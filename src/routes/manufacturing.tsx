import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Counter } from "@/components/site/Counter";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aerial from "@/assets/factory-aerial.jpg";
import man from "@/assets/manufacturing.jpg";
import beams from "@/assets/product-beams.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing Unit — Epitome Steel" },
      { name: "description", content: "Inside our 420,000 sq.ft integrated steel fabrication facility — robotic welding, CNC processing, automated paint line and in-house QA." },
      { property: "og:title", content: "Manufacturing — Epitome Steel" },
      { property: "og:description", content: "A facility engineered for global-grade output." },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: ManufacturingPage,
});

const stats = [
  { v: 420000, s: " sq.ft", l: "Plant Area" },
  { v: 65000, s: " T", l: "Annual Output" },
  { v: 38, s: "", l: "Machining Lines" },
  { v: 99, s: "%", l: "On-time Delivery" },
];

const sections = [
  { t: "Robotic Welding Cells", d: "Closed-loop welding with bead monitoring and weld map traceability for repeatable code-compliant joints.", img: man },
  { t: "Plate Processing", d: "CNC plasma and oxy-fuel lines up to 80mm plate, with edge prep, drilling and bevel automation.", img: beams },
  { t: "Surface Treatment", d: "Shot-blast prep with automated paint line — meeting C5-M durability targets for industrial environments.", img: aerial },
];

function ManufacturingPage() {
  return (
    <>
      <PageHero eyebrow="Manufacturing" title="Inside a precision-built facility." subtitle="A vertically integrated plant where automation, metallurgy and quality control meet to produce structures the world relies on." />

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="glass-card p-6">
              <div className="font-display font-bold text-3xl text-[--brand-deep]"><Counter to={s.v} suffix={s.s} /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 space-y-16">
        <div className="mx-auto max-w-7xl px-4 space-y-20">
          {sections.map((sec, i) => (
            <motion.div key={sec.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="glass-card overflow-hidden">
                <img src={sec.img} alt={sec.t} loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
              <div>
                <span className="chip">0{i + 1}</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{sec.t}</h2>
                <p className="mt-3 text-muted-foreground">{sec.d}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {["ISO 9001 governed processes","Material traceability","Continuous-improvement KPIs"].map((t) => (
                    <li key={t} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[--trust] mt-0.5" />{t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
