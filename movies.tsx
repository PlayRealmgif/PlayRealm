import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MediaCard } from "@/components/media-card";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import tv1 from "@/assets/tv-1.jpg";
import tv2 from "@/assets/tv-2.jpg";

export const Route = createFileRoute("/movies")({
  head: () => ({
    meta: [
      { title: "Movies — Reviews & Where to Watch · PlayRealm" },
      { name: "description", content: "Spoiler-free movie reviews with story, pacing, dubbing and where-to-watch details." },
      { property: "og:title", content: "Movies · PlayRealm" },
      { property: "og:description", content: "Spoiler-free movie reviews and where-to-watch details." },
      { property: "og:url", content: "/movies" },
    ],
    links: [{ rel: "canonical", href: "/movies" }],
  }),
  component: MoviesPage,
});

const ITEMS = [
  { image: movie1, title: "Beyond the Silent Moon", category: "Sci-Fi", score: 8.4, meta: "148 min • 2026" },
  { image: movie2, title: "Neon Rain", category: "Thriller", score: 7.9, meta: "121 min • 2026" },
  { image: hero2, title: "The Arcane Order", category: "Fantasy", score: 8.7, meta: "162 min • 2026" },
  { image: hero3, title: "Stellar Frontier: The Film", category: "Sci-Fi", score: 8.2, meta: "134 min • 2026" },
  { image: tv1, title: "The Iron King", category: "Drama", score: 8.0, meta: "128 min • 2025" },
  { image: tv2, title: "Ghost Circuit", category: "Cyberpunk", score: 7.8, meta: "114 min • 2025" },
];

function MoviesPage() {
  return (
    <PageShell
      eyebrow="Movies"
      title="Cinema for people who care."
      description="Every review covers story (spoiler-free), pacing, dubbing quality, pros, cons and where to watch — with a fair, transparent score."
    >
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {ITEMS.map((i) => <MediaCard key={i.title} {...i} />)}
      </div>
    </PageShell>
  );
}
