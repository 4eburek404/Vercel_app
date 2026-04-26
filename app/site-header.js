import MobileNav from "./mobile-nav";

const roleLinks = [
  { id: "travel", href: "/", label: "Travel" },
  { id: "ai", href: "/ai", label: "AI" },
];

export default function SiteHeader({
  activeRole,
  ctaHref = "#contact",
  ctaLabel = "Написать",
  mobileCtaLabel = "Обсудить задачу",
  navLinks,
}) {
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[rgba(250,245,238,0.78)] backdrop-blur-xl"
      data-analytics-section="header_nav"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href={activeRole === "ai" ? "/ai" : "/"}
          className="font-editorial shrink-0 text-2xl text-[var(--ink)]"
          data-analytics-label="header:brand"
        >
          Konstantin Orlov
        </a>

        <div className="hidden min-w-0 items-center gap-5 text-sm text-zinc-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-zinc-950"
              data-analytics-label={`desktop_nav:${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            aria-label="Выбор профиля"
            className="inline-flex rounded-full border border-black/10 bg-[rgba(255,251,245,0.72)] p-1 text-xs font-medium text-zinc-600"
          >
            {roleLinks.map((role) => {
              const isActive = role.id === activeRole;

              return (
                <a
                  key={role.id}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3.5 py-1.5 transition-colors ${
                    isActive
                      ? "bg-zinc-950 text-white shadow-[0_10px_24px_-18px_rgba(31,26,21,0.75)]"
                      : "hover:bg-white hover:text-zinc-950"
                  }`}
                  data-analytics-label={`role_switch:${role.id}`}
                  href={role.href}
                >
                  {role.label}
                </a>
              );
            })}
          </div>

          <a
            href={ctaHref}
            className="inline-flex rounded-full border border-black/10 bg-[rgba(255,251,245,0.7)] px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-black/20 hover:bg-white hover:text-zinc-950"
            data-analytics-label="desktop_nav:contact_cta"
          >
            {ctaLabel}
          </a>
        </div>

        <MobileNav
          ctaHref={ctaHref}
          ctaLabel={mobileCtaLabel}
          links={navLinks}
          roleLinks={roleLinks.map((role) => ({
            ...role,
            active: role.id === activeRole,
          }))}
        />
      </div>
    </nav>
  );
}
