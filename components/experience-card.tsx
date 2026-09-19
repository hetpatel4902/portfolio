import Image from "next/image";
import type { ExperienceEntry } from "@/data/experience";

const companyLogos: Record<
  string,
  { label: string; src: string; className: string }
> = {
  "TATA CONSULTANCY SERVICES": {
    label: "TCS",
    src: "/images/logos/tcs.png",
    className: "border-white/15 bg-white",
  },
  TATVASOFT: {
    label: "TV",
    src: "/images/logos/tatvasoft.png",
    className: "border-white/15 bg-white",
  },
  "THE KARMIC UNIVERSE": {
    label: "KU",
    src: "/images/logos/karmic-universe.jpg",
    className: "border-white/15 bg-white",
  },
};

function CompanyLogo({ name }: { name: string }) {
  const logo = companyLogos[name];
  const fallbackLabel =
    logo?.label ??
    name
      .split(/[\s/&]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded border ${
        logo?.className ?? "border-white/15 bg-white/[0.04]"
      }`}
    >
      {logo ? (
        <Image
          src={logo.src}
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-contain p-1"
          loading="lazy"
        />
      ) : (
        <span className="font-mono text-[0.68rem] font-semibold uppercase text-zinc-100">
          {fallbackLabel}
        </span>
      )}
    </span>
  );
}

export function ExperienceCard({ item }: { item: ExperienceEntry }) {
  return (
    <details className="group rounded border border-white/10 bg-zinc-950/40 p-6 sm:p-8">
      <summary className="mb-4 cursor-pointer list-none">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-sky-300/80">
              {item.period}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <CompanyLogo name={item.company} />
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-zinc-50">
                {item.company}
              </h3>
            </div>
          </div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-400">
            {item.role}
          </p>
        </div>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
          {item.summary}
        </p>
      </summary>

      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        {item.projects.map((project) => (
          <div
            key={`${item.company}-${project.name}`}
            className="rounded border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-sky-300/80">
                {project.domain}
              </p>
              <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky-200">
                {project.role}
              </span>
            </div>

            <h4 className="text-xl font-medium text-zinc-50">{project.name}</h4>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={`${project.name}-${tech}`}
                  className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <dl className="mt-5 space-y-4 text-sm leading-6 text-zinc-300">
              {project.whatBuilt && (
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
                    What I built
                  </dt>
                  <dd className="mt-1">{project.whatBuilt}</dd>
                </div>
              )}
              {project.engineeringProblem && (
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
                    Engineering problem
                  </dt>
                  <dd className="mt-1">{project.engineeringProblem}</dd>
                </div>
              )}
              {project.impact && (
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
                    Impact
                  </dt>
                  <dd className="mt-1">{project.impact}</dd>
                </div>
              )}
            </dl>
          </div>
        ))}
      </div>
    </details>
  );
}
