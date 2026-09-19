"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GitBranch,
  Mail,
} from "lucide-react";

import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { TerminalWindow } from "@/components/terminal-window";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const reveal = {
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
} as const;

const achievements = [
  "SSIP Hackathon Winner - 1st among 2,500+ teams",
  "TCS AI Friday Hackathon Winner - 1st among 20+ teams",
  "Ideathon 2023 - 1st Runner-Up",
  "Pitch Perfect - 1st Runner-Up",
  "TCS Star of the Month - September 2026",
  "TCS On the Spot Team Award - July 2026",
  "Microsoft Certified: Azure AI Engineer Associate",
  "Microsoft Certified: Azure AI Fundamentals",
];

export default function Home() {
  return (
    <div id="top" className="page-shell text-zinc-100">
      <SiteHeader />

      <main>
        <section
          id="work"
          className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div {...reveal}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-sky-300/80">
                {profile.positioning}
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-zinc-50 sm:text-6xl lg:text-7xl">
                HET PATEL
              </h1>

              <p className="mt-4 text-lg font-medium uppercase tracking-[0.18em] text-zinc-300 sm:text-xl">
                {profile.title}
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
                “{profile.heroStatement}”
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                Backend engineering · System architecture · Data · AI/GenAI ·
                Performance
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#systems"
                  className="inline-flex items-center justify-center gap-2 border border-sky-400/40 bg-sky-400/10 px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-sky-100 transition-colors hover:border-sky-300/60 hover:bg-sky-400/15"
                >
                  View selected work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-zinc-100 transition-colors hover:border-white/20"
                >
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={profile.resumeHref}
                  className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-zinc-100 transition-colors hover:border-white/20"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </div>
            </motion.div>

            <motion.div {...reveal} className="lg:justify-self-end">
              <TerminalWindow />
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="01 — Engineering profile"
            title="I work at the intersection of:"
          />

          <div className="profile-pill-group mt-8 flex flex-wrap gap-3 text-sm font-medium">
            {["BACKEND", "SYSTEMS", "DATA", "AI", "PERFORMANCE"].map(
              (label) => (
                <span
                  key={label}
                  className="profile-pill rounded-full border px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.22em]"
                >
                  {label}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="profile-copy space-y-5 text-lg leading-8">
              <p>
                My work sits between practical software delivery and deeper
                systems thinking. I care about how data moves through an
                application, how services communicate, how failures surface, and
                how architecture choices influence performance and
                maintainability over time.
              </p>
              <p>
                That has led me from full-stack projects and backend APIs to
                data processing, cloud infrastructure, and AI/GenAI workflows.
                The process is usually the same: understand the problem, design
                the right boundary, build the moving parts, and measure what
                actually matters before optimizing further.
              </p>
            </div>

            <div className="profile-panel rounded border p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-sky-300/80">
                Engineering lens
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-6">
                <li>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                    Systems
                  </span>
                  <p className="mt-1">
                    Architecture, interfaces, and operational reliability.
                  </p>
                </li>
                <li>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                    Data
                  </span>
                  <p className="mt-1">
                    Pipelines, modeling, flows, and analytics-oriented design.
                  </p>
                </li>
                <li>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                    AI
                  </span>
                  <p className="mt-1">
                    GenAI workflows, RAG, agentic patterns, and reasoning
                    systems.
                  </p>
                </li>
                <li>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                    Performance
                  </span>
                  <p className="mt-1">
                    Observability, bottleneck analysis, and optimization work.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="02 — Experience"
            title="Engineering work across enterprise systems and product teams."
          />
          <div className="mt-10 space-y-8">
            {experience.map((item) => (
              <ExperienceCard key={item.company} item={item} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="systems"
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="03 — Selected systems / projects"
            title="Case studies in architecture, workflows, and software delivery."
          />
          <div className="mt-10 space-y-6">
            {projects.map((project) =>
              [
                "ai-performance-platform",
                "imaze",
                "sachivalay-canteen",
              ].includes(project.id) ? (
                <ProjectCaseStudy key={project.id} project={project} />
              ) : (
                <ProjectCard key={project.id} project={project} />
              ),
            )}
          </div>
        </motion.section>

        <motion.section
          id="stack"
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="04 — Technical stack"
            title="Tools and systems I build with."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded border border-white/10 bg-zinc-950/40 p-5"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sky-300/80">
                  {group.title}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-zinc-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="research"
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="05 — Research / explorations"
            title="Research direction / research project"
          />

          <div className="mt-10 rounded border border-white/10 bg-zinc-950/40 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-zinc-50 sm:text-3xl">
              Adaptive Multi-Cloud Routing for Generative AI APIs using
              Latency-Throughput-Quality Optimization with Switching Overhead
              Awareness
            </h3>

            <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-300">
              This direction explores how AI workloads can be routed across
              multiple providers and model choices under changing conditions. In
              real deployments, the best provider is rarely fixed: latency
              varies, throughput differs by model and region, output quality
              changes across prompts, and switching between providers introduces
              overhead. The objective is to make routing decisions that balance
              those trade-offs in a dynamic environment rather than optimizing
              for a single static point-in-time condition.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded border border-white/10 bg-zinc-900/70 p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                  Core ideas
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                  <li>Contextual multi-armed bandits</li>
                  <li>Thompson Sampling</li>
                  <li>Provider and model routing</li>
                  <li>Uncertainty-aware routing</li>
                </ul>
              </div>
              <div className="rounded border border-white/10 bg-zinc-900/70 p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                  Optimization criteria
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                  <li>Latency</li>
                  <li>Throughput</li>
                  <li>Quality</li>
                  <li>Switching overhead</li>
                  <li>Non-stationary environments</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="06 — Achievements"
            title="Milestones and recognitions."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((item) => (
              <div
                key={item}
                className="rounded border border-white/10 bg-zinc-950/40 p-5 font-mono text-xs uppercase tracking-[0.16em] text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="07 — Education"
            title="Formal training in systems, networks, and applied engineering."
          />
          <div className="mt-10 rounded border border-white/10 bg-zinc-950/40 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-sky-300/80">
                  2020 — 2024
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-zinc-50">
                  G. H. Patel College of Engineering and Technology
                </h3>
              </div>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-zinc-400">
                B.E. in Information Technology
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-zinc-300">
              CPI: 9.07 / 10.0
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded border border-white/10 bg-zinc-900/70 p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                  Relevant areas
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                  <li>Operating Systems</li>
                  <li>DBMS</li>
                  <li>Computer Organization & Architecture</li>
                  <li>Computer Networks</li>
                  <li>Information & Network Security</li>
                  <li>Probability / Statistics</li>
                  <li>IoT</li>
                </ul>
              </div>
              <div className="rounded border border-white/10 bg-zinc-900/70 p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                  Direction
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  My education grounded my interest in software systems and
                  performance: the way memory, processes, networking, security,
                  and data structures shape engineered solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="08 — Leadership"
            title="Mentorship and technical leadership."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded border border-white/10 bg-zinc-950/40 p-5">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sky-300/80">
                Nov 2023 — Dec 2023
              </p>
              <h3 className="mt-3 text-xl font-semibold text-zinc-50">
                Mentor — Smart India Hackathon Team
              </h3>
            </div>
            <div className="rounded border border-white/10 bg-zinc-950/40 p-5">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sky-300/80">
                Jan 2022 — May 2022
              </p>
              <h3 className="mt-3 text-xl font-semibold text-zinc-50">
                Web Lead — Google Developer Student Club, GCET
              </h3>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          {...reveal}
          className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="09 — Contact"
            title="Let's talk systems, data, and engineering."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"
            >
              <GitBranch className="h-5 w-5 text-sky-300" />
              <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                GitHub
              </p>
              <p className="mt-2 text-zinc-100">hetpatel4902</p>
            </a>

            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-sky-400/40"
            >
              <BriefcaseBusiness className="h-5 w-5 text-sky-300" />
              <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                LinkedIn
              </p>
              <p className="mt-2 text-zinc-100">Het Patel</p>
            </a>

            <div className="rounded border border-white/10 bg-zinc-950/40 p-5">
              <Mail className="h-5 w-5 text-sky-300" />
              <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-500">
                Email
              </p>
              <p className="mt-2 text-zinc-100">{profile.email}</p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Het Patel — Software Engineer</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-200"
            >
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.resumeHref}
              className="inline-flex items-center gap-1 hover:text-zinc-200"
            >
              Resume <Download className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
