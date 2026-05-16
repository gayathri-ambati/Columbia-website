import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Search, ArrowRight } from "lucide-react";
import f1 from "@/assets/manufacturing.jpg";
import f2 from "@/assets/factory-aerial.jpg";
import f3 from "@/assets/project-peb.jpg";
import f4 from "@/assets/product-roofing.jpg";
import f5 from "@/assets/product-beams.jpg";
import f6 from "@/assets/engineer.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & News — Epitome Steel" },
      { name: "description", content: "Engineering insights, project stories and industry news from the Epitome Steel team." },
      { property: "og:title", content: "Insights — Epitome Steel" },
      { property: "og:description", content: "Field-tested perspectives on steel, structures and industrial construction." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { t: "How BIM is reshaping steel fabrication", c: "Engineering", img: f1, d: "Aug 14, 2025", read: "6 min" },
  { t: "Inside our 420,000 sq.ft plant tour", c: "Manufacturing", img: f2, d: "Jul 30, 2025", read: "4 min" },
  { t: "PEB vs. conventional steel — the real economics", c: "Insights", img: f3, d: "Jul 02, 2025", read: "8 min" },
  { t: "Standing seam roofs for coastal facilities", c: "Products", img: f4, d: "Jun 18, 2025", read: "5 min" },
  { t: "Sourcing IS 2062 E350 — what to verify", c: "Quality", img: f5, d: "May 22, 2025", read: "7 min" },
  { t: "On-site safety culture at gigafactory scale", c: "Safety", img: f6, d: "Apr 09, 2025", read: "6 min" },
];
const categories = ["All", "Engineering", "Manufacturing", "Insights", "Products", "Quality", "Safety"];

function BlogPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = posts.filter((p) => (cat === "All" || p.c === cat) && p.t.toLowerCase().includes(q.toLowerCase()));
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero eyebrow="Insights" title="Engineering, manufacturing & field notes." subtitle="Field-tested perspectives from the people who design, weld and erect modern industrial structures." />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition ${cat === c ? "bg-gradient-to-r from-[--brand-deep] to-[--brand] text-white border-transparent" : "bg-white/70 border-border hover:border-[--brand-sky]"}`}>{c}</button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="pl-9 pr-4 py-2 rounded-full text-sm bg-white/80 border border-border focus:border-[--brand] outline-none w-60" />
            </div>
          </div>

          {featured && (
            <article className="glass-card overflow-hidden grid lg:grid-cols-2 mb-8 group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={featured.img} alt={featured.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="chip">Featured · {featured.c}</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-display font-semibold tracking-tight">{featured.t}</h2>
                <div className="mt-3 text-xs text-muted-foreground">{featured.d} · {featured.read} read</div>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[--brand-deep] hover:gap-2 transition-all w-fit">Read the article <ArrowRight className="w-4 h-4" /></button>
              </div>
            </article>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <article key={p.t} className="glass-card overflow-hidden group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <span className="absolute top-3 left-3 chip">{p.c}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold">{p.t}</h3>
                  <div className="mt-2 text-xs text-muted-foreground">{p.d} · {p.read}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
