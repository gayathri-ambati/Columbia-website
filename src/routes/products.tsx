import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Download, ArrowRight } from "lucide-react";
import beams from "@/assets/product-beams.jpg";
import roofing from "@/assets/product-roofing.jpg";
import shed from "@/assets/product-shed.jpg";
import peb from "@/assets/project-peb.jpg";
import factory from "@/assets/factory-aerial.jpg";
import eng from "@/assets/engineer.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Epitome Steel" },
      { name: "description", content: "Steel structures, PEB buildings, industrial sheds, roofing systems, fabricated components and civil structural parts." },
      { property: "og:title", content: "Products — Epitome Steel" },
      { property: "og:description", content: "Engineered steel products to IS, ASTM and EN standards." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Cat = "All" | "Steel" | "PEB" | "Sheds" | "Roofing" | "Components" | "Civil";

const items: { c: Exclude<Cat, "All">; t: string; d: string; img: string }[] = [
  { c: "Steel", t: "Structural Steel Beams", d: "Heavy I-sections, H-columns and trusses.", img: beams },
  { c: "PEB", t: "PEB Industrial Buildings", d: "Optimized clear-span structures up to 90m.", img: peb },
  { c: "Sheds", t: "Industrial Sheds", d: "Warehouse & manufacturing shed systems.", img: shed },
  { c: "Roofing", t: "Standing Seam Roofing", d: "Insulated metal panels and weather-tight roof.", img: roofing },
  { c: "Components", t: "Fabricated Components", d: "Plate, lattice, bracket and node assemblies.", img: factory },
  { c: "Civil", t: "Civil Structural Parts", d: "Embedments, rebar cages, precast supports.", img: eng },
];

const cats: Cat[] = ["All", "Steel", "PEB", "Sheds", "Roofing", "Components", "Civil"];

function ProductsPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.c === active);
  return (
    <>
      <PageHero eyebrow="Products" title="Engineered to lift industry." subtitle="A complete catalogue of structural steel, PEB systems and civil components — manufactured to global standards and delivered ready for site." />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {cats.map((c) => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${active === c ? "bg-gradient-to-r from-[--brand-deep] to-[--brand] text-white border-transparent shadow-[0_8px_20px_-10px_rgba(37,99,235,.6)]" : "bg-white/70 border-border hover:border-[--brand-sky]"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <motion.article key={p.t + i} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.04 }} className="glass-card overflow-hidden group">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <span className="absolute top-3 left-3 chip">{p.c}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
                  <div className="mt-4 flex gap-2">
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold">Inquire <ArrowRight className="w-3.5 h-3.5" /></Link>
                    <Link to="/downloads" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-border hover:border-[--brand-sky]"><Download className="w-3.5 h-3.5" /> Brochure</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
