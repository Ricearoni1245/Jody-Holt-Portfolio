import React from "react";

type Social = { label: string; href: string; icon?: React.ReactNode };

export function Footer({
  year = new Date().getFullYear(),
  socials = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "#" },
  ],
  showBackToTop = true,
}: {
  year?: number;
  socials?: Social[];
  showBackToTop?: boolean;
}) {
  return (
    <footer className="border-t border-secondary bg-bg px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-xl md:text-2xl font-extrabold font-name tracking-wide text-text">
            Jody Holt
          </div>
          <div className="text-[11px] md:text-sm text-text/70">
            Passion Pioneer
          </div>
        </div>

        <nav className="flex items-center gap-5">
          <a className="text-text hover:text-primary" href="#projects">
            Projects
          </a>
          <a className="text-text hover:text-primary" href="#experience">
            Experience
          </a>
          <a className="text-text hover:text-primary" href="#home">
            Background
          </a>
        </nav>

        <div className="flex items-center gap-4 text-text">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-secondary hover:border-primary hover:text-primary"
              title={s.label}
            >
              {s.icon ?? (
                <span className="h-2.5 w-2.5 rounded-full bg-current" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center gap-4">
        <div className="text-center text-xs text-text/60">
          © {year} Jody Holt • All rights reserved
        </div>
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded px-3 py-1 text-xs text-text/70 hover:text-primary border border-secondary hover:border-primary"
          >
            Back to top
          </button>
        )}
      </div>
    </footer>
  );
}
