import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Guides & Walkthroughs · PlayRealm" },
      { name: "description", content: "Step-by-step guides, walkthroughs and how-tos for the biggest games and apps." },
      { property: "og:title", content: "Guides · PlayRealm" },
      { property: "og:description", content: "Walkthroughs and how-tos for the games and apps we cover." },
      { property: "og:url", content: "/guides" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesPage,
});

const GUIDES = [
  { title: "Neon Requiem — every hidden ending unlocked", tag: "Walkthrough", meta: "22 min read" },
  { title: "Arcane Ascendant: best magic build for beginners", tag: "Build Guide", meta: "14 min read" },
  { title: "How to set up RetroArch Pro like a pro", tag: "How-To", meta: "10 min read" },
  { title: "Zero Protocol ranked climb: tips from a top 100 player", tag: "Strategy", meta: "12 min read" },
  { title: "Dragonwatch romance paths — no spoilers", tag: "Reference", meta: "6 min read" },
  { title: "Best OBS settings for high-motion gameplay", tag: "Creator", meta: "8 min read" },
];

function GuidesPage() {
  return (
    <PageShell
      eyebrow="Guides"
      title="Actually useful guides."
      description="Written by players and creators who finished the thing — not padded, not scraped, always tested."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {GUIDES.map((g) => (
          <a key={g.title} href="#" className="group flex items-start gap-4 rounded-2xl card-premium p-5 hover:card-premium-hover">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
              <BookOpen className="h-5 w-5 text-white" />
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{g.tag}</span>
              <h3 className="mt-0.5 text-base font-semibold group-hover:text-gradient">{g.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{g.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
