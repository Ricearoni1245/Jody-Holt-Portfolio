// ThemeToggle.tsx
import React from "react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  const themes = ["a", "b", "c", "d", "e"] as const;

  const crossfadeTo = (next: typeof themes[number]) => {
    // 1) capture current hero computed background (all layers resolved)
    const hero = document.querySelector<HTMLElement>(".bg-hero");
    const prevBg = hero ? getComputedStyle(hero).backgroundImage : "";

    // 2) stash it in a CSS var & flag crossfade
    const root = document.documentElement;
    root.style.setProperty("--hero-bg-prev", prevBg);
    root.classList.add("hero-xfade");

    // 3) switch theme (your existing logic)
    setTheme(next as any);

    // 4) remove crossfade flag after the animation
    window.setTimeout(() => {
      root.classList.remove("hero-xfade");
      root.style.removeProperty("--hero-bg-prev");
    }, 600); // a bit > .55s animation
  };

  return (
    <div className="relative inline-block text-text">
      <details className="group">
        <summary className="cursor-pointer select-none list-none inline-flex items-center gap-2 rounded px-3 py-1.5 bg-secondary/70 hover:bg-secondary focus:outline-none anim-base hover-pop">
          <span className="font-medium">{compact ? "Theme" : "Toggle Theme"}</span>
          <span aria-hidden>▾</span>
        </summary>

        <div
          className="
            absolute top-full mt-2 z-[70] rounded-lg border border-secondary bg-bg/95 p-2 shadow-xl backdrop-blur
            left-4 right-4 mx-auto w-[calc(100vw-2rem)] max-w-[18rem]
            md:left-auto md:right-0 md:mx-0 md:w-44 md:max-w-none
            origin-top scale-y-95 opacity-0 translate-y-[-4px]
            pointer-events-none transition-all duration-300 ease-out
            group-open:opacity-100 group-open:scale-y-100 group-open:translate-y-0 group-open:pointer-events-auto
          "
        >
          <ul className="space-y-1">
            {themes.map((t) => (
              <li key={t}>
                <button
                  onClick={() => crossfadeTo(t)}
                  className={`w-full rounded px-3 py-2 text-left hover:bg-secondary/60 anim-base ${
                    theme === t ? "outline outline-1 outline-primary" : ""
                  }`}
                >
                  <span
                    className="mr-2 inline-block h-3 w-3 rounded-full align-middle"
                    style={{ background: `var(--color-accent-${t}, var(--color-primary))` }}
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
