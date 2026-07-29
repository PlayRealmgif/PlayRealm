import { Link } from "@tanstack/react-router";
import { Menu, Search, Gamepad2, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/movies", label: "Movies" },
  { to: "/tv-series", label: "TV Series" },
  { to: "/emulators", label: "Emulators" },
  { to: "/apps", label: "Apps" },
  { to: "/news", label: "News" },
  { to: "/guides", label: "Guides" },
  { to: "/top-lists", label: "Top Lists" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            <Gamepad2 className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-black tracking-tight">
            Play<span className="text-gradient">Realm</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 ml-4">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground bg-white/5" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="px-3 py-2 text-sm font-medium rounded-full transition-colors hover:bg-white/5"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            aria-label="Search"
            className="grid h-10 w-10 place-items-center rounded-full glass hover:border-primary/60 transition"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="xl:hidden grid h-10 w-10 place-items-center rounded-full glass"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden glass-strong border-t border-border/50 animate-fade-in">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="py-2.5 text-base font-medium border-b border-border/30 last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
