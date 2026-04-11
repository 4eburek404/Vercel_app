"use client";

import { useState, useEffect, useRef } from "react";
import { track } from "@vercel/analytics";

export default function MobileNav({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        ref={buttonRef}
        type="button"
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[rgba(255,251,245,0.72)] text-zinc-700 transition-colors hover:border-black/20 hover:text-zinc-950"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        data-analytics-label="mobile_menu_toggle"
        onClick={handleMenuToggle}
      >
        <svg
          className="h-5 w-5 transition-transform duration-300"
          style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M5 12h14"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 top-[68px] z-40 bg-black/20 backdrop-blur-sm"
          style={{ animation: "fadeIn 200ms ease-out" }}
        />
      )}

      <div
        ref={menuRef}
        id="mobile-navigation"
        className="absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 rounded-[1.75rem] border border-black/10 bg-[rgba(255,251,245,0.97)] px-5 py-5 text-sm text-zinc-700 shadow-[0_24px_60px_-40px_rgba(31,26,21,0.55)] backdrop-blur-xl transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-2xl border border-transparent px-4 py-3 transition-colors hover:border-black/10 hover:bg-white hover:text-zinc-950"
              data-analytics-label={`mobile_nav:${link.label}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-4 border-t border-black/10 pt-4">
          <a
            href="#contact"
            className="inline-flex w-full justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-deep)]"
            data-analytics-label="mobile_nav:contact_cta"
            onClick={() => setMenuOpen(false)}
          >
            Обсудить задачу
          </a>
        </div>
      </div>
    </div>
  );
}
