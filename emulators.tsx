import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { MediaCard } from "@/components/media-card";
import game2 from "@/assets/game-2.jpg";
import game1 from "@/assets/game-1.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";

export const Route = createFileRoute("/emulators")({
  head: () => ({
    meta: [
      { title: "Emulators — Setup Guides & Reviews · PlayRealm" },
      { name: "description", content: "The best emulators reviewed: compatibility, performance, features, requirements and download links." },
      { property: "og:title", content: "Emulators · PlayRealm" },
      { property: "og:description", content: "Reviews and setup guides for the best modern emulators." },
      { property: "og:url", content: "/emulators" },
    ],
    links: [{ rel: "canonical", href: "/emulators" }],
  }),
  component: EmuPage,
});

const ITEMS = [
  { image: game2, title: "RetroArch Pro 2026", category: "Multi", score: 9.5, meta: "Cross-platform" },
  { image: game4, title: "DuckStation Ultimate", category: "PS1", score: 9.2, meta: "Windows • macOS" },
  { image: game1, title: "Yuzu Legacy Edition", category: "Switch", score: 8.9, meta: "Windows • Linux" },
  { image: game3, title: "Dolphin Prime", category: "GC / Wii", score: 9.4, meta: "Cross-platform" },
];

function EmuPage() {
  return (
    <PageShell
      eyebrow="Emulators"
      title="Play the classics, anywhere."
      description="Compatibility charts, performance benchmarks, feature breakdowns and safe, verified download links for every emulator we cover."
    >
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {ITEMS.map((i) => <MediaCard key={i.title} {...i} />)}
      </div>
    </PageShell>
  );
}
