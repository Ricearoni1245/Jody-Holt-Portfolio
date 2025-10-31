import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ onNav }: { onNav: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Background" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  const handleNav = (id: string) => {
    onNav(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-secondary bg-bg/90 backdrop-blur h-16 md:h-20 font-main">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        
        <div className="flex items-center gap-3">
          <div className="leading-tight">
            <div className="text-xl md:text-2xl font-extrabold font-name tracking-wide text-text">
              Jody Holt
            </div>
            <div className="text-[11px] md:text-sm text-text/70">
              Passion Pioneer
            </div>
          </div>
        </div>

       
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              className="text-text hover:text-primary"
              onClick={() => handleNav(l.id)}
            >
              {l.label}
            </button>
          ))}
          <ThemeToggle />
        </nav>

       
        <div className="md:hidden">
          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            className="rounded px-3 py-2 text-text hover:bg-secondary/60"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

  
      <div
        className={`md:hidden transition-[max-height] duration-300 ${
          open ? "max-h-96 overflow-visible" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="space-y-2 border-t border-secondary bg-bg px-4 py-3">
          {links.map((l) => (
            <button
              key={l.id}
              className="block w-full rounded px-3 py-2 text-left text-text hover:bg-secondary/60"
              onClick={() => handleNav(l.id)}
            >
              {l.label}
            </button>
          ))}
          <div className="pt-2">
            <ThemeToggle compact />
          </div>
        </div>
      </div>
    </header>
  );
}
