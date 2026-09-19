"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  const knownImages =
    project.id === "imaze"
      ? Array.from(
          { length: 5 },
          (_, index) => `/images/${project.id}-${index + 1}.jpeg`,
        )
      : project.id === "sachivalay-canteen"
        ? Array.from(
            { length: 5 },
            (_, index) => `/images/${project.id}-${index + 1}.jpg`,
          )
        : null;
  const imagesToShow = knownImages ?? availableImages;

  useEffect(() => {
    if (project.id === "imaze" || project.id === "sachivalay-canteen") {
      return;
    }

    let mounted = true;
    const found: string[] = [];
    const base = `/images/${project.id}`;

    const tries = 5;
    let remaining = tries + 1;

    for (let i = 1; i <= tries; i++) {
      const src = `${base}-${i}.png`;
      const img = new window.Image();
      img.onload = () => {
        found.push(src);
        remaining -= 1;
        if (mounted && remaining === 0) setAvailableImages(found);
      };
      img.onerror = () => {
        remaining -= 1;
        if (mounted && remaining === 0) setAvailableImages(found);
      };
      img.src = src;
    }

    const plain = `${base}.png`;
    const imgPlain = new window.Image();
    imgPlain.onload = () => {
      found.push(plain);
      remaining -= 1;
      if (mounted && remaining === 0) setAvailableImages(found);
    };
    imgPlain.onerror = () => {
      remaining -= 1;
      if (mounted && remaining === 0) setAvailableImages(found);
    };
    imgPlain.src = plain;

    return () => {
      mounted = false;
    };
  }, [project.id]);

  return (
    <article className="group min-w-0 rounded border border-white/10 bg-zinc-950/40 p-5 sm:p-8">
      <div className="grid gap-6">
        <div className="min-w-0">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-sky-300/80 sm:text-[0.68rem] sm:tracking-[0.28em]">
            {project.projectType}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-2xl sm:tracking-[-0.05em]">
            {project.name}
          </h3>

          <p className="mt-4 max-w-3xl text-zinc-300">{project.oneLiner}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-zinc-500 sm:tracking-[0.18em]">
                Problem
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-zinc-500 sm:tracking-[0.18em]">
                Engineering
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {project.engineering}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-zinc-500 sm:tracking-[0.18em]">
              Impact
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.impact}
            </p>
          </div>

          {project.link && (
            <div className="mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-sky-400/40 bg-sky-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-sky-200 transition-colors hover:border-sky-300/60 hover:bg-sky-400/15 sm:tracking-[0.18em]"
              >
                View project
              </a>
            </div>
          )}

          {project.id === "ai-performance-platform" ? (
            <div className="mt-6 text-sm text-zinc-400">
              Visuals omitted for this project.
            </div>
          ) : imagesToShow.length > 0 ? (
            <div className="mt-6 flex max-w-full gap-3 overflow-x-auto pb-2">
              {imagesToShow.slice(0, 5).map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.name} screenshot`}
                  width={216}
                  height={384}
                  loading="lazy"
                  className="h-64 w-auto max-w-none shrink-0 rounded border border-white/6 bg-zinc-900 object-contain min-[360px]:h-72 sm:h-80 md:h-96"
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 flex h-44 w-full items-center justify-center rounded border border-white/10 bg-zinc-900/60 text-zinc-400">
              <div className="text-center">
                <p className="font-mono text-sm uppercase tracking-[0.12em]">
                  No screenshots available
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs text-sky-300 underline"
                  >
                    View repository
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-[0.63rem] uppercase tracking-[0.08em] text-zinc-100 sm:tracking-[0.12em]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
