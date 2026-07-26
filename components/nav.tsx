"use client";

import { useEffect, useState } from "react";
import { REPOSITORY_URL } from "@/lib/site";
import { ArrowUpRight, CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#principles", label: "Principles" },
  { href: "#stack", label: "Stack" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNav = () => setScrolled(window.scrollY > 720);
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex h-14 max-w-[1120px] items-center justify-between rounded-full border px-4 text-white shadow-[0_12px_50px_rgba(2,27,64,0.14)] backdrop-blur-xl transition-colors duration-300 sm:h-16 sm:px-6 ${
          scrolled
            ? "border-ink/10 bg-ink/90"
            : "border-white/35 bg-white/15"
        }`}
      >
        <a
          className="brand-mark text-xl font-black tracking-[-0.06em] sm:text-2xl"
          href="#top"
          onClick={() => setOpen(false)}
        >
          Pntr<span className="text-orange">.</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="hidden items-center gap-2 rounded-full border border-white/35 bg-white/12 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-ink md:flex"
          href={REPOSITORY_URL}
          rel="noreferrer"
          target="_blank"
        >
          GitHub <ArrowUpRight className="size-4" />
        </a>

        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-full border border-white/35 bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-[1120px] rounded-[28px] border border-white/35 bg-[#153f86]/90 p-3 text-white shadow-2xl backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              className="block rounded-2xl px-5 py-3 text-lg font-semibold hover:bg-white/10"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-2 flex items-center justify-between rounded-2xl bg-white px-5 py-3 font-bold text-ink"
            href={REPOSITORY_URL}
            rel="noreferrer"
            target="_blank"
          >
            View on GitHub <ArrowUpRight className="size-5" />
          </a>
        </div>
      )}
    </header>
  );
}
