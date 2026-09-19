import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <details
      className="group rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40 hover:bg-zinc-950/70"
      open={project.id === "ai-performance-platform"}
    >
      <summary className="cursor-pointer list-none">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-sky-300/80">
              {project.projectType}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-zinc-50">
              {project.name}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-zinc-400">
            0
            {project.id === "ai-performance-platform"
              ? 1
              : project.id === "food-delivery-platform"
                ? 2
                : project.id === "sachivalay-canteen"
                  ? 3
                  : 4}
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-zinc-300">{project.oneLiner}</p>
      </summary>

      <div className="mt-6 border-t border-white/10 pt-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
              Problem
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
              Architecture
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.architecture}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
              Engineering
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.engineering}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
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
              className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-[0.63rem] uppercase tracking-[0.12em] text-zinc-100"
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
            className="mt-6 inline-flex items-center gap-2 border border-sky-400/40 bg-sky-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-sky-200 transition-colors hover:border-sky-300/60 hover:bg-sky-400/15"
          >
            View project
          </a>
        )}
      </div>
    </details>
  );
}
