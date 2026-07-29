import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MediaCard } from "@/components/media-card";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games — Reviews, News & Guides · PlayRealm" },
      { name: "description", content: "Deep-dive reviews, guides and news for the latest and greatest games across every platform." },
      { property: "og:title", content: "Games · PlayRealm" },
      { property: "og:description", content: "Reviews, guides and news for the latest games across every platform." },
      { property: "og:url", content: "/games" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
  }),
  component: GamesPage,
});

const ITEMS = [
  { image: game3, title: "Dragonwatch Chronicles", category: "RPG", score: 9.3, meta: "Open World • 60+ hrs" },
  { image: game1, title: "Shadowline: Tokyo Nights", category: "Stealth", score: 9.1, meta: "Action • 25 hrs" },
  { image: game4, title: "Zero Protocol", category: "FPS", score: 8.9, meta: "Tactical • Multiplayer" },
  { image: game2, title: "Velocity Racer X", category: "Racing", score: 8.7, meta: "Arcade • Solo" },
  { image: game5, title: "Hollow Woods", category: "Horror", score: 8.5, meta: "Survival • 12 hrs" },
  { image: hero1, title: "Neon Requiem", category: "Action", score: 9.6, meta: "Story • 30 hrs" },
  { image: hero2, title: "Arcane Ascendant", category: "RPG", score: 9.4, meta: "Fantasy • 80+ hrs" },
  { image: hero3, title: "Stellar Frontier IV", category: "Sim", score: 9.2, meta: "Space • Sandbox" },
];

function GamesPage() {
  return (
    <PageShell
      eyebrow="Games"
      title="Every game, deeply reviewed."
      description="Honest scores, spoiler-free stories, granular breakdowns of graphics, gameplay and performance — everything you need to pick your next obsession."
    >
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {ITEMS.map((i) => <MediaCard key={i.title} {...i} />)}
      </div>
    </PageShell>
  );
}
