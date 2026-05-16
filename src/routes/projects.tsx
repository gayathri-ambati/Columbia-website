import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import peb from "@/assets/project-peb.jpg";
import beams from "@/assets/product-beams.jpg";
import shed from "@/assets/product-shed.jpg";
import roofing from "@/assets/product-roofing.jpg";
import factory from "@/assets/factory-aerial.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Epitome Steel" },
      { name: "description", content: "A gallery of delivered steel and civil engineering projects across industries and geographies." },
      { property: "og:title", content: "Projects — Epitome Steel" },
      { property: "og:description", content: "Selected works from our portfolio of industrial steel structures." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Manufacturing", "Logistics", "Power", "Infrastructure"] as const;
type F = typeof filters[number];

const projects: { t: string; c: Exclude<F, "All">; img: string; loc: string; size: string; tall?: boolean }[] = [
  { t: "Auto OEM Press Shop", c: "Manufacturing", img: peb, loc: "Pune, IN", size: "62,000 sq.m", tall: true },
  { t: "Cold-Chain Logistics Hub", c: "Logistics", img: shed, loc: "Dubai, AE", size: "45,000 sq.m" },
  { t: "Solar Module Plant", c: "Power", img: factory, loc: "Gujarat, IN", size: "120,000 sq.m" },
  { t: "Port Terminal Canopy", c: "Infrastructure", img: roofing, loc: "Mombasa, KE", size: "18,000 sq.m", tall: true },
  { t: "EV Battery Gigafactory", c: "Manufacturing", img: manufacturing, loc: "Chennai, IN", size: "95,000 sq.m" },
  { t: "Steel Service Center", c: "Logistics", img: beams, loc: "Jeddah, SA", size: "32,000 sq.m" },
];

function ProjectsPage() {
  const [f, setF] = useState<F>("All");
  const list = f === "All" ? projects : projects.filter((p) => p.c === f);

  return (
    <>
      <PageHero eyebrow="Projects" title="Structures we're proud to sign." subtitle="A selection of fabricated and erected industrial works across continents — each engineered to deliver decades of service." />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((c) => (
              <button key={c} onClick={() => setF(c)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${f === c ? "bg-gradient-to-r from-[--brand-deep] to-[--brand] text-white border-transparent" : "bg-white/70 border-border hover:border-[--brand-sky]"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {list.map((p, i) => (
              <motion.div key={p.t} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`break-inside-avoid mb-5 glass-card overflow-hidden group ${p.tall ? "" : ""}`}>
                <div className={`relative overflow-hidden ${p.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition text-white">
                    <div className="text-xs uppercase tracking-widest text-white/80">{p.c}</div>
                    <div className="font-display font-semibold text-lg flex items-center gap-1.5">{p.t} <ArrowUpRight className="w-4 h-4" /></div>
                    <div className="text-xs mt-1 text-white/80">{p.loc} · {p.size}</div>
                  </div>
                </div>
                <div className="p-4 group-hover:opacity-0 transition">
                  <div className="text-[11px] uppercase tracking-widest text-[--brand-deep] font-semibold">{p.c}</div>
                  <div className="font-display font-semibold mt-0.5">{p.t}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.loc} · {p.size}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
