import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MediaCard } from "@/components/media-card";
import tv1 from "@/assets/tv-1.jpg";
import tv2 from "@/assets/tv-2.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import movie1 from "@/assets/movie-1.jpg";

export const Route = createFileRoute("/tv-series")({
  head: () => ({
    meta: [
      { title: "TV Series — Reviews & Where to Watch · PlayRealm" },
      { name: "description", content: "Season-by-season TV series reviews with story, pacing, connection to films and streaming info." },
      { property: "og:title", content: "TV Series · PlayRealm" },
      { property: "og:description", content: "Season-by-season TV series reviews and streaming info." },
      { property: "og:url", content: "/tv-series" },
    ],
    links: [{ rel: "canonical", href: "/tv-series" }],
  }),
  component: TvPage,
});

const ITEMS = [
  { image: tv1, title: "Realm of Iron", category: "Fantasy", score: 9.0, meta: "Season 2 • 10 Eps" },
  { image: tv2, title: "Cypher: Ghost Protocol", category: "Cyberpunk", score: 8.6, meta: "Season 1 • 8 Eps" },
  { image: hero1, title: "Neon District", category: "Crime", score: 8.4, meta: "Season 3 • 12 Eps" },
  { image: hero2, title: "Chronicles of the Ashen King", category: "Fantasy", score: 8.8, meta: "Season 1 • 8 Eps" },
  { image: hero3, title: "Voidcrew", category: "Sci-Fi", score: 8.1, meta: "Season 1 • 10 Eps" },
  { image: movie1, title: "The Silent Moon Chronicles", category: "Sci-Fi", score: 8.3, meta: "Season 1 • 6 Eps" },
];

function TvPage() {
  return (
    <PageShell
      eyebrow="TV Series"
      title="Series worth committing to."
      description="We track pacing, dubbing, story quality and connections to bigger universes — so every hour you invest actually pays off."
    >
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {ITEMS.map((i) => <MediaCard key={i.title} {...i} />)}
      </div>
    </PageShell>
  );
}
