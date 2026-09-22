"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Signature visual: a subtle animated data-pipeline graph — nodes flowing
 * into each other in stages, echoing the Bronze/Silver/Gold medallion
 * architecture Jeet actually builds. Not a generic particle field.
 */
export function PipelineCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Three pipeline stages (Bronze / Silver / Gold), each a cluster of nodes
    const stageX = [-4.5, 0, 4.5];
    const stageColors = [0x60a5fa, 0x38bdf8, 0x14b8a6];
    const nodesPerStage = 4;

    const nodeGroup = new THREE.Group();
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[][] = [];

    stageX.forEach((x, stageIdx) => {
      const positions: THREE.Vector3[] = [];
      for (let i = 0; i < nodesPerStage; i++) {
        const y = (i - (nodesPerStage - 1) / 2) * 1.6;
        const z = (Math.random() - 0.5) * 1.2;
        const pos = new THREE.Vector3(x, y, z);
        positions.push(pos);

        const geometry = new THREE.SphereGeometry(0.12, 16, 16);
        const material = new THREE.MeshBasicMaterial({
          color: stageColors[stageIdx],
          transparent: true,
          opacity: 0.85,
        });
        const node = new THREE.Mesh(geometry, material);
        node.position.copy(pos);
        nodeGroup.add(node);
        nodes.push(node);
      }
      nodePositions.push(positions);
    });

    // Connecting lines between adjacent stages
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.18,
    });
    for (let s = 0; s < nodePositions.length - 1; s++) {
      nodePositions[s].forEach((from) => {
        nodePositions[s + 1].forEach((to) => {
          if (Math.random() > 0.55) return; // sparse, not a dense mesh
          const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
          const line = new THREE.Line(geometry, lineMaterial);
          nodeGroup.add(line);
        });
      });
    }

    // Flowing particles along the pipeline (left to right)
    const particleCount = 24;
    const particleGeometry = new THREE.SphereGeometry(0.045, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
    });
    const particles: {
      mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
      progress: number;
      speed: number;
      row: number;
    }[] = [];
    for (let i = 0; i < particleCount; i++) {
      const mesh = new THREE.Mesh(particleGeometry, particleMaterial);
      const row = Math.floor(Math.random() * nodesPerStage);
      particles.push({
        mesh,
        progress: Math.random(),
        speed: 0.08 + Math.random() * 0.06,
        row,
      });
      nodeGroup.add(mesh);
    }

    scene.add(nodeGroup);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
      const handleResizeStatic = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        renderer.render(scene, camera);
      };
      window.addEventListener("resize", handleResizeStatic);
      return () => {
        window.removeEventListener("resize", handleResizeStatic);
        renderer.dispose();
        container.removeChild(renderer.domElement);
      };
    }

    let frameId: number;
    const clock = new THREE.Clock();

    function animate() {
      const elapsed = clock.getElapsedTime();
      nodeGroup.rotation.y = Math.sin(elapsed * 0.08) * 0.15;
      nodeGroup.rotation.x = Math.cos(elapsed * 0.06) * 0.05;

      nodes.forEach((node, i) => {
        node.scale.setScalar(1 + Math.sin(elapsed * 1.5 + i) * 0.08);
      });

      particles.forEach((p) => {
        p.progress += p.speed * 0.01;
        if (p.progress > 1) p.progress = 0;
        const totalSpan = stageX[stageX.length - 1] - stageX[0];
        const x = stageX[0] + p.progress * totalSpan;
        const y = (p.row - (nodesPerStage - 1) / 2) * 1.6;
        p.mesh.position.set(x, y, 0);
        p.mesh.material.opacity = 0.4 + Math.sin(p.progress * Math.PI) * 0.5;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 opacity-60 dark:opacity-80"
      aria-hidden="true"
    />
  );
}
