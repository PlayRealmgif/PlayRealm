import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MediaCard } from "@/components/media-card";
import game5 from "@/assets/game-5.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import game2 from "@/assets/game-2.jpg";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "Apps — Reviews & Downloads · PlayRealm" },
      { name: "description", content: "The best gaming and creator apps reviewed: features, performance, requirements and safe downloads." },
      { property: "og:title", content: "Apps · PlayRealm" },
      { property: "og:description", content: "Best gaming and creator apps reviewed with features and downloads." },
      { property: "og:url", content: "/apps" },
    ],
    links: [{ rel: "canonical", href: "/apps" }],
  }),
  component: AppsPage,
});

const ITEMS = [
  { image: game5, title: "GameJournal Pro", category: "Utility", score: 9.0, meta: "Track your backlog" },
  { image: hero3, title: "StreamHub Companion", category: "Creator", score: 8.7, meta: "Streamer toolkit" },
  { image: hero1, title: "PixelCapture Studio", category: "Creator", score: 8.8, meta: "Clip & edit" },
  { image: game2, title: "Overlay Deck", category: "Creator", score: 8.5, meta: "Custom overlays" },
];

function AppsPage() {
  return (
    <PageShell
      eyebrow="Apps"
      title="Level up your setup."
      description="Every app review breaks down features, UI, performance, compatibility and requirements — plus a verified download for the version we tested."
    >
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {ITEMS.map((i) => <MediaCard key={i.title} {...i} />)}
      </div>
    </PageShell>
  );
}
