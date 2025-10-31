import React from "react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  const themes = ["a", "b", "c", "d", "e"] as const;

  return (
    <div className="relative inline-block text-text">
      <details className="group">
        <summary className="cursor-pointer select-none list-none inline-flex items-center gap-2 rounded px-3 py-1.5 bg-secondary/70 hover:bg-secondary focus:outline-none">
          <span className="font-medium">
            {compact ? "Theme" : "Toggle Theme"}
          </span>
          <span aria-hidden>▾</span>
        </summary>
        <div
          className="
     absolute top-full mt-2
     left-0 right-0  w-[calc(100vw-10rem)]
     md:left-auto md:right- md:mx-0 md:w-44
     rounded-lg border border-secondary bg-bg/95 p-2 shadow-xl backdrop-blur z-[70]
   "
        >
          <ul className="space-y-1">
            {themes.map((t) => (
              <li key={t}>
                <button
                  onClick={() => setTheme(t as any)}
                  className={`w-full rounded px-3 py-2 text-left hover:bg-secondary/60 ${
                    theme === t ? "outline outline-1 outline-primary" : ""
                  }`}
                >
                  <span
                    className="mr-2 inline-block h-3 w-3 rounded-full align-middle"
                    style={{ background: `var(--color-accent-${t})` }}
                  />
                  Theme {t.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}
