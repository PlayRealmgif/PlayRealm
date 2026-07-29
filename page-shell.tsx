import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{eyebrow}</span>
      </nav>
      <div className="relative mt-6 overflow-hidden rounded-3xl border border-border/50 p-8 sm:p-12"
        style={{ background: "linear-gradient(135deg, oklch(0.22 0.06 285 / 90%), oklch(0.18 0.05 260 / 90%))" }}
      >
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-50" style={{ background: "var(--neon-purple)" }} />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full blur-3xl opacity-40" style={{ background: "var(--neon-blue)" }} />
        <div className="relative">
          <span className="inline-flex rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
