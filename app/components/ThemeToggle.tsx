"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white px-3 py-1 text-xs font-medium text-brand-700 hover:bg-brand-50 dark:border-brand-800 dark:bg-zinc-900 dark:text-brand-300 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span aria-hidden="true">{dark ? "🌙" : "☀️"}</span>
      <span>{dark ? "Dark" : "Light"}</span>
    </button>
  );
}
