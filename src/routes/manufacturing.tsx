// import { createFileRoute } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { Counter } from "@/components/site/Counter";
// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";
// import aerial from "@/assets/factory-aerial.jpg";
// import man from "@/assets/manufacturing.jpg";
// import beams from "@/assets/product-beams.jpg";

// export const Route = createFileRoute("/manufacturing")({
//   head: () => ({
//     meta: [
//       { title: "Manufacturing Unit — Epitome Steel" },
//       { name: "description", content: "Inside our 420,000 sq.ft integrated steel fabrication facility — robotic welding, CNC processing, automated paint line and in-house QA." },
//       { property: "og:title", content: "Manufacturing — Epitome Steel" },
//       { property: "og:description", content: "A facility engineered for global-grade output." },
//       { property: "og:url", content: "/manufacturing" },
//     ],
//     links: [{ rel: "canonical", href: "/manufacturing" }],
//   }),
//   component: ManufacturingPage,
// });

// const stats = [
//   { v: 420000, s: " sq.ft", l: "Plant Area" },
//   { v: 65000, s: " T", l: "Annual Output" },
//   { v: 38, s: "", l: "Machining Lines" },
//   { v: 99, s: "%", l: "On-time Delivery" },
// ];

// const sections = [
//   { t: "Robotic Welding Cells", d: "Closed-loop welding with bead monitoring and weld map traceability for repeatable code-compliant joints.", img: man },
//   { t: "Plate Processing", d: "CNC plasma and oxy-fuel lines up to 80mm plate, with edge prep, drilling and bevel automation.", img: beams },
//   { t: "Surface Treatment", d: "Shot-blast prep with automated paint line — meeting C5-M durability targets for industrial environments.", img: aerial },
// ];

// function ManufacturingPage() {
//   return (
//     <>
//       <PageHero eyebrow="Manufacturing" title="Inside a precision-built facility." subtitle="A vertically integrated plant where automation, metallurgy and quality control meet to produce structures the world relies on." />

//       <section className="pb-12">
//         <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((s) => (
//             <div key={s.l} className="glass-card p-6">
//               <div className="font-display font-bold text-3xl text-[--brand-deep]"><Counter to={s.v} suffix={s.s} /></div>
//               <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="py-16 space-y-16">
//         <div className="mx-auto max-w-7xl px-4 space-y-20">
//           {sections.map((sec, i) => (
//             <motion.div key={sec.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
//               <div className="glass-card overflow-hidden">
//                 <img src={sec.img} alt={sec.t} loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
//               </div>
//               <div>
//                 <span className="chip">0{i + 1}</span>
//                 <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{sec.t}</h2>
//                 <p className="mt-3 text-muted-foreground">{sec.d}</p>
//                 <ul className="mt-5 space-y-2 text-sm">
//                   {["ISO 9001 governed processes","Material traceability","Continuous-improvement KPIs"].map((t) => (
//                     <li key={t} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[--trust] mt-0.5" />{t}</li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }





import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Counter } from "@/components/site/Counter";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Factory,
  ShieldCheck,
  Cog,
  ArrowRight,
  Shield,
  Award,
} from "lucide-react";

import aerial from "@/assets/factory-aerial.jpg";
import man from "@/assets/manufacturing.jpg";
import beams from "@/assets/product-beams.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing Unit — Epitome Steel" },
      {
        name: "description",
        content:
          "Inside our 420,000 sq.ft integrated steel fabrication facility — robotic welding, CNC processing, automated paint line and in-house QA.",
      },
    ],
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
  {
    t: "Robotic Welding Cells",
    d: "Closed-loop robotic welding with intelligent monitoring and weld traceability systems for precision-built structures.",
    img: man,
    icon: Factory,
  },
  {
    t: "Plate Processing",
    d: "Advanced CNC plasma and oxy-fuel cutting systems engineered for high-capacity industrial fabrication.",
    img: beams,
    icon: Cog,
  },
  {
    t: "Surface Treatment",
    d: "Automated blasting and paint coating systems delivering corrosion resistance for harsh environments.",
    img: aerial,
    icon: ShieldCheck,
  },
];

function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Inside a Precision-Built Facility"
        subtitle="A vertically integrated plant where automation, metallurgy and quality control come together to build world-class steel structures."
      />

  
      {/* MANUFACTURING SECTIONS */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 space-y-28">

          {sections.map((sec, i) => (
            <motion.div
              key={sec.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                i % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[35px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

                <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-white/20">
                  <img
                    src={sec.img}
                    alt={sec.t}
                    loading="lazy"
                    className="w-full h-[520px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <sec.icon className="w-5 h-5 text-cyan-300" />

                      <span className="text-sm font-semibold text-white">
                        Advanced Technology
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {sec.t}
                    </h3>

                    <p className="text-slate-200 text-sm leading-6">
                      High-performance manufacturing systems engineered for
                      industrial excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div>

                {/* Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl font-bold shadow-xl">
                  0{i + 1}
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  {sec.t}
                </h2>

                {/* Description */}
                <p className="mt-5 text-lg text-slate-600 leading-8">
                  {sec.d}
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  {[
                    "ISO 9001 certified production systems",
                    "Material traceability & inspection",
                    "Automated precision engineering",
                    "Continuous improvement KPIs",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-md border border-slate-100 hover:shadow-xl transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                      </div>

                      <p className="text-slate-700 font-medium">
                        {t}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300">
                  Explore Facility
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    
      {/* BOTTOM CTA */}
    <section className="relative py-28 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-cyan-950/90" />
  </div>

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

  <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl px-6 py-3 text-cyan-300 text-sm font-semibold uppercase tracking-[2px] mb-8 shadow-lg"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

      World-Class Manufacturing
    </motion.div>

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold text-white leading-tight"
    >
      Engineering the Future of{" "}
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Industrial Steel
      </span>
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-8 text-slate-300 text-lg md:text-xl leading-9 max-w-3xl mx-auto"
    >
      Our state-of-the-art manufacturing ecosystem combines advanced
      automation, precision engineering and global quality standards to
      deliver exceptional structural steel solutions for modern industries.
    </motion.p>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5"
    >
      {[
        { number: "420K+", label: "Sq.ft Facility" },
        { number: "65K", label: "Tons Capacity" },
        { number: "38+", label: "Production Lines" },
        { number: "99%", label: "On-Time Delivery" },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {item.number}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[2px] text-slate-300">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-14 flex flex-wrap justify-center gap-5"
    >
      <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_20px_50px_-10px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300">
        <span className="flex items-center gap-3">
          Contact Our Team
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </span>
      </button>

      <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
        Download Brochure
      </button>
    </motion.div>
  </div>
    </section>
    </>
  );
}