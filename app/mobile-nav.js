"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

export default function MobileNav({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    const nextState = !menuOpen;

    setMenuOpen(nextState);
    track("mobile_menu_toggle", {
      state: nextState ? "open" : "closed",
      location: "header",
    });
  }

  return (
    <div className="md:hidden" data-analytics-section="mobile_nav">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,251,245,0.72)] text-zinc-700 transition-colors hover:border-black/20 hover:text-zinc-950"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        data-analytics-label="mobile_menu_toggle"
        onClick={handleMenuToggle}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-4 right-4 top-[calc(100%+0.75rem)] rounded-[1.75rem] border border-black/10 bg-[rgba(255,251,245,0.96)] px-5 py-5 text-sm text-zinc-700 shadow-[0_24px_60px_-40px_rgba(31,26,21,0.55)] backdrop-blur"
        >
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-2xl border border-transparent px-3 py-2 transition-colors hover:border-black/10 hover:bg-white hover:text-zinc-950"
                data-analytics-label={`mobile_nav:${link.label}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-4 inline-flex rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            data-analytics-label="mobile_nav:contact_cta"
            onClick={() => setMenuOpen(false)}
          >
            Написать
          </a>
        </div>
      )}
    </div>
  );
}
