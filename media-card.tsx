import { Star } from "lucide-react";

export function MediaCard({
  image,
  title,
  category,
  score,
  meta,
}: {
  image: string;
  title: string;
  category: string;
  score: number;
  meta?: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl card-premium hover:card-premium-hover">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full glass px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
          {category}
        </span>
        <span
          className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold text-white"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Star className="h-3 w-3 fill-current" />
          {score.toFixed(1)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug group-hover:text-gradient">
          {title}
        </h3>
        {meta && <p className="mt-1.5 text-xs text-muted-foreground">{meta}</p>}
      </div>
    </article>
  );
}
