import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { GithubActivity } from "@/components/sections/github-activity";
import { Certifications } from "@/components/sections/certifications";
import { DeepDivesAndMilestones } from "@/components/sections/deep-dives-milestones";
import { ResumeSection } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { CommandPalette } from "@/components/ui/command-palette";

export default function Home() {
  return (
    <main className="bg-white dark:bg-navy">
      <Navbar />
      <CommandPalette />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GithubActivity />
      <Certifications />
      <DeepDivesAndMilestones />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
