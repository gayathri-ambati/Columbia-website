import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Building2, Truck, Warehouse, Factory, Boxes, Zap } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Epitome Steel" },
      { name: "description", content: "Steel structures and PEB solutions for construction, infrastructure, warehousing, manufacturing, logistics and power plants." },
      { property: "og:title", content: "Industries — Epitome Steel" },
      { property: "og:description", content: "Six sectors. One engineering partner." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const items = [
  { i: Building2, t: "Construction", d: "Commercial, mixed-use and high-rise structural packages." },
  { i: Boxes, t: "Infrastructure", d: "Bridges, terminals, ports and rail structures." },
  { i: Warehouse, t: "Warehousing", d: "High-bay distribution centers & cold-chain facilities." },
  { i: Factory, t: "Manufacturing", d: "Auto OEM, gigafactories and process industries." },
  { i: Truck, t: "Logistics", d: "Multi-modal hubs, cross-docks and depots." },
  { i: Zap, t: "Power Plants", d: "Renewable, thermal, BESS and substation structures." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Built for the sectors that move the world." subtitle="From hyperscale gigafactories to cross-border logistics hubs, our structures host the operations of global industry leaders." />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass-card p-7 group relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[--brand-sky]/20 blur-2xl group-hover:bg-[--brand]/25 transition" />
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-white border border-[--brand-sky]/40 text-[--brand-deep] shadow-[0_0_0_5px_rgba(56,189,248,0.15)] group-hover:scale-105 transition">
                <it.i className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
