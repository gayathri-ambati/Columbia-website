import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Target, Eye, Award, Users, CheckCircle2 } from "lucide-react";
import factoryImg from "@/assets/factory-aerial.jpg";
import engineerImg from "@/assets/engineer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Epitome Steel Pvt Ltd" },
      { name: "description", content: "Three decades of engineering excellence in steel manufacturing, civil structures, and turnkey industrial construction." },
      { property: "og:title", content: "About — Epitome Steel" },
      { property: "og:description", content: "Our story, vision, and the leadership engineering the future of industrial construction." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "1997", t: "Founded in Pune", d: "Started as a small fabrication unit with a focus on civil structurals." },
  { y: "2005", t: "First PEB Plant", d: "Commissioned India's first automated PEB line in our region." },
  { y: "2012", t: "ISO 9001 + ASTM", d: "Achieved international quality certifications and ASTM compliance." },
  { y: "2018", t: "Robotic Fabrication", d: "Deployed robotic welding cells & CNC plate processing lines." },
  { y: "2023", t: "Global Expansion", d: "Active projects across the Middle East, Africa, and SE Asia." },
];

const leaders = [
  { n: "Rajesh Verma", r: "Chairman & Managing Director" },
  { n: "Aisha Khan", r: "Chief Operating Officer" },
  { n: "Daniel Mathew", r: "Head of Engineering" },
  { n: "Priya Iyer", r: "Quality & Compliance Director" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Epitome"
        title="Three decades of structural excellence."
        subtitle="From a single fabrication bay in Pune to one of the region's most trusted steel and civil structures partners — engineered with precision, delivered with trust."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-6">
          {[
            { i: Target, t: "Our Mission", d: "To build the structural backbone of modern industry through precision manufacturing, deep engineering and uncompromising safety." },
            { i: Eye, t: "Our Vision", d: "To be the global benchmark for sustainable steel construction — pioneering automation, BIM-driven design and net-zero manufacturing." },
          ].map((c) => (
            <div key={c.t} className="glass-card p-8">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white">
                <c.i className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-xl font-display font-semibold">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl"><span className="chip">Timeline</span><h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Milestones that <span className="text-gradient">shaped us</span></h2></div>
          <div className="mt-12 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[--brand-sky] via-[--brand] to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div key={m.y} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`hidden sm:block ${i % 2 ? "text-left pl-12" : "text-right pr-12"}`}>
                    <div className="text-5xl font-display font-bold text-gradient">{m.y}</div>
                  </div>
                  <div className="glass-card p-5 sm:p-6 relative">
                    <span className="absolute -left-12 sm:left-auto sm:-translate-x-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 grid place-items-center w-6 h-6 rounded-full bg-white border-2 border-[--brand] shadow-[0_0_0_4px_rgba(56,189,248,0.2)]" style={i % 2 === 0 ? { left: "auto", right: "-3rem" } : undefined}>
                      <span className="w-2 h-2 rounded-full bg-[--brand]" />
                    </span>
                    <div className="sm:hidden text-sm font-semibold text-[--brand-deep]">{m.y}</div>
                    <h3 className="mt-1 font-display font-semibold text-lg">{m.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div><span className="chip">Leadership</span><h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">The people behind the structure</h2></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((l) => (
              <div key={l.n} className="glass-card p-6 text-center group">
                <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-[--brand-sky]/30 to-[--brand]/20 grid place-items-center text-2xl font-display font-bold text-[--brand-deep] group-hover:scale-105 transition">
                  {l.n.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="mt-4 font-display font-semibold">{l.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infra */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div className="glass-card overflow-hidden"><img src={factoryImg} alt="Facility" loading="lazy" className="w-full h-full object-cover" /></div>
          <div>
            <span className="chip">Infrastructure</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">A facility built for <span className="text-gradient">global standards</span></h2>
            <ul className="mt-6 space-y-3">
              {["420,000 sq.ft integrated plant","Robotic welding & CNC processing","Captive paint & galvanizing line","On-site NDT and QA laboratory","Logistics ramp for oversize loads"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-[--trust] mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
