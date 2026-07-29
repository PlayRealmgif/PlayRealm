import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Mail, MessageSquare, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PlayRealm · PlayRealm" },
      { name: "description", content: "Get in touch with the PlayRealm editorial team — pitches, press, tips and feedback." },
      { property: "og:title", content: "Contact · PlayRealm" },
      { property: "og:description", content: "Pitches, press, tips and feedback for the PlayRealm team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Drop us a line."
      description="Pitches, press releases, tips, corrections, love letters — all welcome. We read every message."
    >
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "playrealm.gc@gmail.com" },
            { icon: MessageSquare, label: "Press", value: "playrealm.gc@gmail.com" },
            { icon: Send, label: "Tips", value: "playrealm.gc@gmail.com" },
          ].map((c) => (
            <div key={c.label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl card-premium p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                <c.icon className="h-5 w-5 text-white" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{c.label}</p>
                <p className="truncate text-sm font-semibold">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl card-premium p-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</span>
              <input type="text" required className="mt-2 w-full rounded-xl bg-background/50 border border-border px-4 py-2.5 text-sm outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</span>
              <input type="email" required className="mt-2 w-full rounded-xl bg-background/50 border border-border px-4 py-2.5 text-sm outline-none focus:border-primary" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Subject</span>
            <input type="text" required className="mt-2 w-full rounded-xl bg-background/50 border border-border px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea rows={6} required className="mt-2 w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm outline-none focus:border-primary" />
          </label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white neon-glow" style={{ background: "var(--gradient-primary)" }}>
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </PageShell>
  );
}
