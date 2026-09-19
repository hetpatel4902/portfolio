import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <details
      className="group min-w-0 rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40 hover:bg-zinc-950/70"
      open={project.id === "ai-performance-platform"}
    >
      <summary className="cursor-pointer list-none">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-sky-300/80 sm:text-[0.68rem] sm:tracking-[0.28em]">
              {project.projectType}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-2xl sm:tracking-[-0.05em]">
              {project.name}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-white/10 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-zinc-400 sm:tracking-[0.24em]">
            0
            {project.id === "ai-performance-platform"
              ? 1
              : project.id === "sachivalay-canteen"
                ? 2
                : 3}
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-zinc-300">{project.oneLiner}</p>
      </summary>

      <div className="mt-6 border-t border-white/10 pt-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-zinc-500 sm:tracking-[0.2em]">
              Problem
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-zinc-500 sm:tracking-[0.2em]">
              Architecture
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.architecture}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-zinc-500 sm:tracking-[0.2em]">
              Engineering
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.engineering}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-zinc-500 sm:tracking-[0.2em]">
              Impact
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.impact}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-[0.63rem] uppercase tracking-[0.08em] text-zinc-100 sm:tracking-[0.12em]"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-sky-400/40 bg-sky-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-sky-200 transition-colors hover:border-sky-300/60 hover:bg-sky-400/15 sm:tracking-[0.18em]"
          >
            View project
          </a>
        )}
      </div>
    </details>
  );
}
