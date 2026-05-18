import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Cog, Layers, Factory, Hammer, Sparkles, Shield, ArrowRight } from "lucide-react";
import Servicescards from "@/components/Servicescompo/Servicescards";
import ProcessTimeline from "@/components/Servicescompo/ProcessTimeline";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Epitome Steel" },
      { name: "description", content: "End-to-end steel fabrication, structural engineering, industrial construction, project execution, installation and design consultancy." },
      { property: "og:title", content: "Services — Epitome Steel" },
      { property: "og:description", content: "A complete engineering stack — from concept BIM to crane-on-site erection." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { i: Cog, t: "Steel Fabrication", d: "CNC processing, robotic welding and automated drilling — engineered for repeatability." },
  { i: Layers, t: "Structural Engineering", d: "BIM-driven design, dynamic analysis and code compliance across IS, ASTM, EN." },
  { i: Factory, t: "Industrial Construction", d: "Turnkey site execution including foundations, MEP coordination and commissioning." },
  { i: Hammer, t: "Project Execution", d: "Dedicated PMO with project controls, EHS governance and schedule certainty." },
  { i: Sparkles, t: "Design Consultancy", d: "Value engineering from concept to handover — optimized for cost and lifecycle." },
  { i: Shield, t: "Installation Services", d: "Certified erection crews mobilized pan-India and to international sites." },
];

const process = [
  { n: "01", t: "Discover", d: "Site assessment, scoping & feasibility." },
  { n: "02", t: "Engineer", d: "BIM models, calculations & approvals." },
  { n: "03", t: "Fabricate", d: "Automated manufacturing & QA gates." },
  { n: "04", t: "Erect", d: "On-site assembly, commissioning & handover." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="An integrated engineering partner." subtitle="From the first sketch to the final weld, our teams own every phase of structural delivery." />

      {/* <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass-card p-6 group">
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[--brand-deep] via-[--brand] to-[--brand-sky] text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,.55)] group-hover:scale-105 transition">
                <s.i className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4" /></div>
            </motion.div>
          ))}
        </div>
      </section> */}

      <Servicescards />

      {/* <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-xl mx-auto text-center">
            <span className="chip">Process</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">A clear path from <span className="text-gradient">brief to build</span></h2>
          </div>
          <div className="mt-12 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[--brand] to-transparent" />
            {process.map((p, i) => (
              <motion.div key={p.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-card p-6 text-center relative">
                <div className="mx-auto w-14 h-14 rounded-full grid place-items-center font-display font-bold text-lg bg-white border border-[--brand-sky] text-[--brand-deep] shadow-[0_0_0_5px_rgba(56,189,248,0.18)]">
                  {p.n}
                </div>
                <h3 className="mt-4 font-display font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <ProcessTimeline />

    </>
  );
}
