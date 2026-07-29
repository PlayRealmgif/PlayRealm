import { Link } from "@tanstack/react-router";
import { Gamepad2, Twitter, Youtube, Twitch, Github } from "lucide-react";

const COLS = [
  {
    title: "Explore",
    links: [
      ["Games", "/games"],
      ["Movies", "/movies"],
      ["TV Series", "/tv-series"],
      ["Emulators", "/emulators"],
      ["Apps", "/apps"],
    ],
  },
  {
    title: "Editorial",
    links: [
      ["News", "/news"],
      ["Guides", "/guides"],
      ["Top Lists", "/top-lists"],
      ["Reviews", "/games"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Careers", "/about"],
      ["Press", "/about"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Gamepad2 className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-black tracking-tight">
                Play<span className="text-gradient">Realm</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The premium hub for game &amp; entertainment reviews, news, guides
              and top lists — from AAA to indies, blockbusters to hidden gems.
            </p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-full glass hover:border-primary/60 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-border/50 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PlayRealm. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
