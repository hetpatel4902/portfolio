"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GitBranch, Moon, SunMedium } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

import { profile } from "@/data/profile";

function getThemePreference(): "dark" | "light" {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme-preference");
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
}

function subscribeToTheme(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleThemeChange = () => callback();
  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

  window.addEventListener("theme-preference-change", handleThemeChange);
  mediaQuery.addEventListener("change", handleThemeChange);

  return () => {
    window.removeEventListener("theme-preference-change", handleThemeChange);
    mediaQuery.removeEventListener("change", handleThemeChange);
  };
}

export function SiteHeader() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemePreference,
    () => "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-light", theme === "light");
    root.classList.toggle("theme-dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  const setThemePreference = (nextTheme: "dark" | "light") => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("theme-preference", nextTheme);
    window.dispatchEvent(new Event("theme-preference-change"));
  };

  return (
    <header className="site-header sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="site-header-brand flex items-center gap-3 font-mono text-sm uppercase tracking-[0.26em]"
        >
          <Image
            src={profile.image}
            alt={`${profile.name} — profile`}
            width={36}
            height={36}
            className="avatar rounded-full object-cover"
          />
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {profile.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-header-link font-mono text-[0.68rem] uppercase tracking-[0.2em] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setThemePreference(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle color theme"
            className="site-header-button inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-sky-300/50"
          >
            {theme === "dark" ? (
              <SunMedium className="site-header-button-icon h-4 w-4" />
            ) : (
              <Moon className="site-header-button-icon h-4 w-4" />
            )}
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="site-header-button inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-sky-300/50"
          >
            <GitBranch className="site-header-button-icon h-4 w-4" />
          </a>
          <a
            href={profile.resumeHref}
            className="hidden items-center gap-2 border border-sky-400/40 bg-sky-400/10 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky-100 transition-colors hover:border-sky-200/60 hover:bg-sky-400/15 sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
