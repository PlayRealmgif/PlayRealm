import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Star } from "lucide-react";

export const Route = createFileRoute("/top-lists")({
  head: () => ({
    meta: [
      { title: "Top Lists — The Best Of · PlayRealm" },
      { name: "description", content: "Editor-curated top lists across games, movies, TV, emulators and apps." },
      { property: "og:title", content: "Top Lists · PlayRealm" },
      { property: "og:description", content: "The best of the year, decade, and forever — ranked and defended." },
      { property: "og:url", content: "/top-lists" },
    ],
    links: [{ rel: "canonical", href: "/top-lists" }],
  }),
  component: TopListsPage,
});

const LISTS = [
  { title: "Top 25 Games of 2026", meta: "Updated weekly" },
  { title: "Top 10 Stealth Games of All Time", meta: "Editor's Pick" },
  { title: "Top 15 Sci-Fi Movies This Decade", meta: "Curated" },
  { title: "Top 20 TV Series Worth Bingeing", meta: "Reader Favorite" },
  { title: "Top 10 Emulators for 2026", meta: "Benchmarks inside" },
  { title: "Top 12 Creator Apps for Streamers", meta: "Tried & tested" },
];

function TopListsPage() {
  return (
    <PageShell
      eyebrow="Top Lists"
      title="Rankings we'll defend."
      description="No listicle spam. Every entry earned its slot — and we tell you exactly why it beat the rest."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {LISTS.map((l, i) => (
          <a key={l.title} href="#" className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl card-premium p-5 hover:card-premium-hover">
            <span className="text-3xl font-black text-gradient tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <h3 className="text-base font-semibold group-hover:text-gradient sm:text-lg">{l.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{l.meta}</p>
            </div>
            <Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400" />
          </a>
        ))}
      </div>
    </PageShell>
  );
}
