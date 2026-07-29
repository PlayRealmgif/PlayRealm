import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Award, Users, Zap, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PlayRealm — Our Story & Ethics · PlayRealm" },
      { name: "description", content: "PlayRealm is an independent editorial covering games, movies, TV, emulators and apps with honesty and craft." },
      { property: "og:title", content: "About · PlayRealm" },
      { property: "og:description", content: "Independent editorial covering games and entertainment with honesty and craft." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Award, title: "Honest scores", desc: "Every score is defended in the review. No advertorial, no pay-for-play." },
  { icon: Users, title: "Player first", desc: "We write for players and viewers — not publishers, not algorithms." },
  { icon: Zap, title: "Fast + deep", desc: "Same-day news, week-long reviews. We move fast without cutting corners." },
  { icon: Heart, title: "Made with care", desc: "Craft-obsessed writing, editing and design. This is a magazine, not a mill." },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Enter the PlayRealm."
      description="We're a small, independent editorial covering games, movies, TV series, emulators and apps — one honest review at a time."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-2xl card-premium p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
              <v.icon className="h-5 w-5 text-white" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
