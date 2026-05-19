import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Target, Eye, Award, Users, CheckCircle2 } from "lucide-react";
import factoryImg from "@/assets/factory-aerial.jpg";
import engineerImg from "@/assets/engineer.jpg";
import LeadershipPage from "@/components/Aboutcompo/LeadershipPage";
import TimelinePage from "@/components/Aboutcompo/TimelinePage";
import MissionVisionPage from "@/components/Aboutcompo/MissionVisionPage";

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


function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Epitome"
        title="Three decades of structural excellence."
        subtitle="From a single fabrication bay in Pune to one of the region's most trusted steel and civil structures partners — engineered with precision, delivered with trust."
      />

      {/* <section className="py-16">
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
      </section> */}

      <MissionVisionPage />

      {/* Timeline */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
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
      </section> */}

      <TimelinePage />
      <LeadershipPage />

      {/* Infra */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[--brand]/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[--brand-sky]/20 to-[--brand]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={factoryImg} alt="Facility" loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm">
                <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">420,000 sq.ft</span>
                <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">ISO 9001:2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="chip">Infrastructure</span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                A facility built for <span className="text-gradient">global standards</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our state-of-the-art manufacturing facility integrates automation, quality control, and sustainable practices to deliver world-class steel structures.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "420,000 sq.ft integrated plant",
                  "Robotic welding & CNC processing",
                  "Captive paint & galvanizing line",
                  "On-site NDT and QA laboratory",
                  "Logistics ramp for oversize loads",
                  "BIM-enabled design centre",
                ].map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[--brand]/10 flex items-center justify-center group-hover:bg-[--brand]/20 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[--brand-deep]" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>
             <div className="pt-6 flex items-center gap-4">
  <div className="flex -space-x-2">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="w-8 h-8 rounded-full bg-gradient-to-br from-[--brand-sky] to-[--brand] border-2 border-white"
      />
    ))}
  </div>

  {/* Quotation Style Text */}
  <div className="relative">
   

    <p className="relative text-sm md:text-base italic font-medium text-slate-700 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
       “ Trusted by <span className="font-bold text-[--brand-deep] text-gradient">500+</span>{" "}
      Engineering Partners Worldwide ”
    </p>

   
  </div>
          </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
