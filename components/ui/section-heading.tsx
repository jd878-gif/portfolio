import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-mono text-sm text-primary-500 dark:text-accent-sky font-mono-tag mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-navy dark:text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
