import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Gaming News — Latest From The Industry · PlayRealm" },
      { name: "description", content: "Fast, curated gaming news: releases, patches, hardware, esports and streaming." },
      { property: "og:title", content: "Gaming News · PlayRealm" },
      { property: "og:description", content: "The latest gaming and entertainment news, curated." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const NEWS = [
  { tag: "Industry", title: "Studios pledge to end crunch culture in 2026 charter", time: "2h ago", excerpt: "A coalition of major publishers signs a new voluntary standard on healthy production practices." },
  { tag: "Release", title: "Neon Requiem tops one million players in 24 hours", time: "5h ago", excerpt: "The neo-noir stealth hit smashes launch expectations across every platform." },
  { tag: "Hardware", title: "Next-gen handheld leaked: 8-inch OLED at 120Hz", time: "8h ago", excerpt: "New patent filings hint at a serious challenger in the portable PC space." },
  { tag: "Esports", title: "World Championship finals shatter viewership record", time: "12h ago", excerpt: "Peak concurrent viewers cracked 3.8M — a new benchmark for the scene." },
  { tag: "Streaming", title: "Cloud gaming service adds full 4K tier — free trial live", time: "1d ago", excerpt: "The biggest upgrade to cloud play in three years is here." },
  { tag: "Studios", title: "Cult indie developer announces new fantasy RPG", time: "2d ago", excerpt: "First screenshots tease a hand-painted world unlike anything they've built before." },
];

function NewsPage() {
  return (
    <PageShell
      eyebrow="News"
      title="What just happened in games."
      description="No filler, no hype cycles — just the news you actually need, ranked by importance and updated throughout the day."
    >
      <div className="mt-10 space-y-3">
        {NEWS.map((n, i) => (
          <a key={n.title} href="#" className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 rounded-2xl card-premium p-5 hover:card-premium-hover">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-black text-white" style={{ background: "var(--gradient-primary)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{n.tag}</span>
              <h3 className="mt-0.5 text-base font-semibold sm:text-lg">{n.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{n.excerpt}</p>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">{n.time}</span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
