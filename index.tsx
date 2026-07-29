import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Flame,
  Gamepad2,
  Film,
  Tv,
  MonitorPlay,
  Smartphone,
  Newspaper,
  BookOpen,
  Trophy,
  Star,
  Clock,
  TrendingUp,
  Zap,
  Sparkles,
  Play,
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import tv1 from "@/assets/tv-1.jpg";
import tv2 from "@/assets/tv-2.jpg";
import { MediaCard } from "@/components/media-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlayRealm — Premium Gaming & Entertainment Reviews" },
      {
        name: "description",
        content:
          "Reviews, guides, news and top lists for games, movies, TV series, emulators and apps. Enter the PlayRealm.",
      },
      { property: "og:title", content: "PlayRealm — Premium Gaming & Entertainment Reviews" },
      { property: "og:description", content: "Enter the PlayRealm — reviews, guides and news across games, movies, TV, emulators & apps." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "PlayRealm",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/?q={query}",
            "query-input": "required name=query",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const SLIDES = [
  {
    image: hero1,
    tag: "Featured Review",
    title: "Neon Requiem",
    excerpt:
      "A neo-noir stealth epic that redefines the genre with breathtaking neon-drenched cities and razor-sharp combat.",
    score: 9.6,
    category: "Games",
  },
  {
    image: hero2,
    tag: "Editor's Pick",
    title: "Arcane Ascendant",
    excerpt:
      "The fantasy RPG we've been waiting for — a mythic world layered with meaningful choice and stunning arcane visuals.",
    score: 9.4,
    category: "Games",
  },
  {
    image: hero3,
    tag: "New Release",
    title: "Stellar Frontier IV",
    excerpt:
      "The definitive space combat sim returns with jaw-dropping visuals, dynamic factions and pure interstellar chaos.",
    score: 9.2,
    category: "Games",
  },
];

const CATEGORIES = [
  { label: "Games", icon: Gamepad2, count: "1,240+", to: "/games" },
  { label: "Movies", icon: Film, count: "820+", to: "/movies" },
  { label: "TV Series", icon: Tv, count: "560+", to: "/tv-series" },
  { label: "Emulators", icon: MonitorPlay, count: "180+", to: "/emulators" },
  { label: "Apps", icon: Smartphone, count: "940+", to: "/apps" },
  { label: "News", icon: Newspaper, count: "3.2k+", to: "/news" },
  { label: "Guides", icon: BookOpen, count: "670+", to: "/guides" },
  { label: "Top Lists", icon: Trophy, count: "210+", to: "/top-lists" },
] as const;

const TRENDING = [
  { image: game1, title: "Shadowline: Tokyo Nights", category: "Games", score: 9.1, meta: "Action • Stealth" },
  { image: game2, title: "Velocity Racer X", category: "Games", score: 8.7, meta: "Racing • Arcade" },
  { image: game3, title: "Dragonwatch Chronicles", category: "Games", score: 9.3, meta: "RPG • Open World" },
  { image: game4, title: "Zero Protocol", category: "Games", score: 8.9, meta: "FPS • Tactical" },
  { image: game5, title: "Hollow Woods", category: "Games", score: 8.5, meta: "Horror • Survival" },
];

const REVIEWS = [
  { image: game3, title: "Dragonwatch Chronicles Review — A Fantasy Masterclass", category: "Review", score: 9.3, meta: "By Alex Morgan • 12 min read" },
  { image: game1, title: "Shadowline: Tokyo Nights — Stealth Perfected", category: "Review", score: 9.1, meta: "By Rio Tanaka • 9 min read" },
  { image: game4, title: "Zero Protocol Review — Tactical FPS Redefined", category: "Review", score: 8.9, meta: "By Sam Chen • 10 min read" },
  { image: game5, title: "Hollow Woods — Slow Burn Horror at Its Finest", category: "Review", score: 8.5, meta: "By Jamie Reed • 8 min read" },
];

const MOVIES = [
  { image: movie1, title: "Beyond the Silent Moon", category: "Sci-Fi", score: 8.4, meta: "148 min • 2026" },
  { image: movie2, title: "Neon Rain", category: "Thriller", score: 7.9, meta: "121 min • 2026" },
  { image: hero2, title: "The Arcane Order", category: "Fantasy", score: 8.7, meta: "162 min • 2026" },
  { image: hero3, title: "Stellar Frontier: The Film", category: "Sci-Fi", score: 8.2, meta: "134 min • 2026" },
];

const SERIES = [
  { image: tv1, title: "Realm of Iron", category: "Series", score: 9.0, meta: "Season 2 • 10 Episodes" },
  { image: tv2, title: "Cypher: Ghost Protocol", category: "Series", score: 8.6, meta: "Season 1 • 8 Episodes" },
  { image: hero1, title: "Neon District", category: "Series", score: 8.4, meta: "Season 3 • 12 Episodes" },
  { image: hero2, title: "Chronicles of the Ashen King", category: "Series", score: 8.8, meta: "Season 1 • 8 Episodes" },
];

const EMULATORS = [
  { image: game2, title: "RetroArch Pro 2026", category: "Emulator", score: 9.5, meta: "Multi-platform" },
  { image: game4, title: "DuckStation Ultimate", category: "PS1", score: 9.2, meta: "Windows • macOS" },
  { image: game1, title: "Yuzu Legacy Edition", category: "Switch", score: 8.9, meta: "Windows • Linux" },
  { image: game3, title: "Dolphin Prime", category: "GameCube / Wii", score: 9.4, meta: "Cross-platform" },
];

const APPS = [
  { image: game5, title: "GameJournal Pro", category: "App", score: 9.0, meta: "Track your backlog" },
  { image: hero3, title: "StreamHub Companion", category: "App", score: 8.7, meta: "Streamer toolkit" },
  { image: hero1, title: "PixelCapture Studio", category: "App", score: 8.8, meta: "Clip &amp; edit" },
  { image: game2, title: "Overlay Deck", category: "App", score: 8.5, meta: "Custom overlays" },
];

const NEWS_ITEMS = [
  { tag: "Industry", title: "Studios pledge to end crunch culture in 2026 charter", time: "2h ago" },
  { tag: "Release", title: "Neon Requiem tops one million players in 24 hours", time: "5h ago" },
  { tag: "Hardware", title: "Next-gen handheld leaked: 8-inch OLED at 120Hz", time: "8h ago" },
  { tag: "Esports", title: "World Championship finals shatter viewership record", time: "12h ago" },
  { tag: "Streaming", title: "Cloud gaming service adds full 4K tier — free trial live", time: "1d ago" },
];

const TOP_RATED = [
  { rank: 1, title: "Dragonwatch Chronicles", cat: "RPG", score: 9.3 },
  { rank: 2, title: "Realm of Iron S2", cat: "TV Series", score: 9.0 },
  { rank: 3, title: "Shadowline: Tokyo Nights", cat: "Stealth", score: 9.1 },
  { rank: 4, title: "The Arcane Order", cat: "Movie", score: 8.7 },
  { rank: 5, title: "Zero Protocol", cat: "FPS", score: 8.9 },
];

function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedArticles />
      <Section
        eyebrow="Trending Now"
        title="What everyone is playing"
        icon={<Flame className="h-4 w-4" />}
        link={{ to: "/games", label: "All games" }}
      >
        <ScrollRow>
          {TRENDING.map((g) => (
            <div key={g.title} className="w-56 shrink-0 sm:w-64">
              <MediaCard {...g} />
            </div>
          ))}
        </ScrollRow>
      </Section>

      <Section
        eyebrow="Latest Reviews"
        title="Fresh verdicts from our critics"
        icon={<Sparkles className="h-4 w-4" />}
        link={{ to: "/games", label: "All reviews" }}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {REVIEWS.map((r) => <MediaCard key={r.title} {...r} />)}
        </div>
      </Section>

      <Section eyebrow="At the Cinema" title="Movies worth your time" icon={<Film className="h-4 w-4" />} link={{ to: "/movies", label: "All movies" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {MOVIES.map((r) => <MediaCard key={r.title} {...r} />)}
        </div>
      </Section>

      <Section eyebrow="Binge Worthy" title="TV series to stream now" icon={<Tv className="h-4 w-4" />} link={{ to: "/tv-series", label: "All series" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {SERIES.map((r) => <MediaCard key={r.title} {...r} />)}
        </div>
      </Section>

      <Section eyebrow="Emulators" title="Play the classics, anywhere" icon={<MonitorPlay className="h-4 w-4" />} link={{ to: "/emulators", label: "All emulators" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {EMULATORS.map((r) => <MediaCard key={r.title} {...r} />)}
        </div>
      </Section>

      <Section eyebrow="Apps" title="Level up your setup" icon={<Smartphone className="h-4 w-4" />} link={{ to: "/apps", label: "All apps" }}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {APPS.map((r) => <MediaCard key={r.title} {...r} />)}
        </div>
      </Section>

      <NewsAndTopRated />

      <PopularAndUpdates />

      <CategoriesGrid />

      <Newsletter />
    </>
  );
}

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-[0_30px_80px_-30px_rgba(120,80,255,0.5)]">
          <div className="relative aspect-[16/10] md:aspect-[21/9]">
            {SLIDES.map((slide, idx) => (
              <img
                key={idx}
                src={slide.image}
                alt={slide.title}
                fetchPriority={idx === 0 ? "high" : "low"}
                width={1920}
                height={1080}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-end md:items-center">
              <div className="w-full p-6 md:p-12 lg:p-16">
                <div className="max-w-xl">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white"
                  >
                    <Zap className="h-3 w-3" /> {s.tag}
                  </span>
                  <h1 className="mt-4 text-3xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                    {s.title}
                  </h1>
                  <p className="mt-3 max-w-md text-sm text-white/80 sm:text-base">
                    {s.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      to="/games"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white neon-glow transition hover:brightness-110"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Play className="h-4 w-4 fill-current" /> Read Review
                    </Link>
                    <div
                      className="flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-white"
                    >
                      <Star className="h-4 w-4 fill-current text-yellow-400" /> {s.score.toFixed(1)} / 10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 md:bottom-6 md:right-6">
              <button
                aria-label="Prev"
                onClick={() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)}
                className="grid h-10 w-10 place-items-center rounded-full glass hover:border-primary/60"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next"
                onClick={() => setI((v) => (v + 1) % SLIDES.length)}
                className="grid h-10 w-10 place-items-center rounded-full glass hover:border-primary/60"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute bottom-4 left-6 flex gap-1.5 md:bottom-8 md:left-12">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-white" : "w-4 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticles() {
  const items = [
    { image: game3, tag: "Featured", title: "The RPGs that will define 2026", meta: "10 min read" },
    { image: hero3, tag: "Deep Dive", title: "How space sims got their groove back", meta: "8 min read" },
    { image: movie1, tag: "Essay", title: "Sci-fi cinema in a post-streaming world", meta: "12 min read" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Featured Articles"
        title="Handpicked by our editors"
        icon={<Star className="h-4 w-4" />}
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((a) => (
          <article
            key={a.title}
            className="group relative overflow-hidden rounded-3xl card-premium hover:card-premium-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                {a.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold leading-snug group-hover:text-gradient">
                {a.title}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {a.meta}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  icon,
  link,
}: {
  eyebrow: string;
  title: string;
  icon?: React.ReactNode;
  link?: { to: string; label: string };
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0">
        <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {icon} {eyebrow}
        </span>
        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      </div>
      {link && (
        <Link
          to={link.to}
          className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          <span className="hidden sm:inline">{link.label}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

function Section({
  children,
  ...rest
}: {
  eyebrow: string;
  title: string;
  icon?: React.ReactNode;
  link?: { to: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader {...rest} />
      <div className="mt-8">{children}</div>
    </section>
  );
}

function ScrollRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 md:gap-5">
      {children}
    </div>
  );
}

function NewsAndTopRated() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Gaming News"
            title="Latest from the industry"
            icon={<Newspaper className="h-4 w-4" />}
            link={{ to: "/news", label: "All news" }}
          />
          <ul className="mt-8 space-y-3">
            {NEWS_ITEMS.map((n, i) => (
              <li key={n.title}>
                <a
                  href="#"
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl card-premium p-4 hover:card-premium-hover"
                >
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-black text-white"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {n.tag}
                    </span>
                    <h3 className="mt-0.5 truncate text-sm font-semibold sm:text-base">{n.title}</h3>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{n.time}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeader
            eyebrow="Top Rated"
            title="Highest scores"
            icon={<Trophy className="h-4 w-4" />}
          />
          <ol className="mt-8 space-y-2 rounded-3xl card-premium p-4">
            {TOP_RATED.map((t) => (
              <li key={t.rank} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition">
                <span className="text-2xl font-black text-gradient tabular-nums">
                  {String(t.rank).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.cat}</p>
                </div>
                <span className="flex shrink-0 items-center gap-1 rounded-full glass px-2.5 py-1 text-xs font-bold">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {t.score.toFixed(1)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function PopularAndUpdates() {
  const popular = [
    { image: game1, title: "The 25 best stealth games of all time", meta: "18k views" },
    { image: hero2, title: "Beginner's guide to Arcane Ascendant magic", meta: "12k views" },
    { image: movie2, title: "Every Neon Rain easter egg explained", meta: "9k views" },
    { image: tv1, title: "Realm of Iron: full timeline before season 3", meta: "7k views" },
  ];
  const updates = [
    { tag: "Patch 2.4", title: "Neon Requiem gets huge combat overhaul", time: "Today" },
    { tag: "Event", title: "Dragonwatch launches winter festival", time: "Yesterday" },
    { tag: "DLC", title: "Zero Protocol adds new operator: Wraith", time: "2 days ago" },
    { tag: "Update", title: "RetroArch Pro rolls out Vulkan renderer", time: "3 days ago" },
    { tag: "Beta", title: "Stellar Frontier IV opens PvP beta signups", time: "4 days ago" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Popular Articles"
            title="What readers love"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <div className="mt-8 space-y-3">
            {popular.map((p) => (
              <a
                key={p.title}
                href="#"
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl card-premium p-3 hover:card-premium-hover"
              >
                <img src={p.image} alt="" loading="lazy" className="h-20 w-28 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold sm:text-base">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.meta}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="Latest Updates"
            title="Patches, events &amp; drops"
            icon={<Clock className="h-4 w-4" />}
          />
          <ul className="mt-8 space-y-3">
            {updates.map((u) => (
              <li key={u.title} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl card-premium p-4 hover:card-premium-hover">
                <span className="rounded-full glass px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {u.tag}
                </span>
                <p className="min-w-0 truncate text-sm font-semibold sm:text-base">{u.title}</p>
                <span className="shrink-0 text-xs text-muted-foreground">{u.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CategoriesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Categories"
        title="Explore the PlayRealm"
        icon={<Sparkles className="h-4 w-4" />}
      />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
        {CATEGORIES.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            className="group relative overflow-hidden rounded-2xl card-premium p-5 hover:card-premium-hover"
          >
            <div className="flex items-start justify-between">
              <span
                className="grid h-11 w-11 place-items-center rounded-xl transition group-hover:scale-110"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                <c.icon className="h-5 w-5 text-white" />
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
            <h3 className="mt-6 text-lg font-bold">{c.label}</h3>
            <p className="text-xs text-muted-foreground">{c.count} entries</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.06 285 / 90%), oklch(0.18 0.05 260 / 90%))",
          border: "1px solid oklch(0.85 0.05 275 / 15%)",
        }}
      >
        <div
          className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full blur-3xl opacity-60"
          style={{ background: "var(--neon-purple)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--neon-blue)" }}
        />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
              <Zap className="h-3 w-3" /> Newsletter
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Get the weekly <span className="text-gradient">PlayRealm</span> drop
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              The best reviews, breaking news, guides and top lists — delivered
              every Friday. No spam, ever.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-full p-1.5"
          >
            <input
              type="email"
              required
              placeholder="you@epicmail.com"
              className="min-w-0 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-white neon-glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
