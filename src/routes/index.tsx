// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { ArrowRight, ChevronRight, Factory, Hammer, Building2, Cog, Shield, Boxes, Layers, Zap, CheckCircle2, Sparkles } from "lucide-react";
// import heroImg from "@/assets/hero-factory.jpg";
// import aerialImg from "@/assets/factory-aerial.jpg";
// import beamsImg from "@/assets/product-beams.jpg";
// import roofingImg from "@/assets/product-roofing.jpg";
// import shedImg from "@/assets/product-shed.jpg";
// import pebImg from "@/assets/project-peb.jpg";
// import engineerImg from "@/assets/engineer.jpg";
// import { Counter } from "@/components/site/Counter";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: " Columbia — Engineering Strength. Building the Future." },
//       { name: "description", content: "Precision steel manufacturing and civil structural solutions for industrial leaders. PEB buildings, structural steel, sheds, roofing and fabricated components." },
//       { property: "og:title", content: " Columbia — Engineering Strength. Building the Future." },
//       { property: "og:description", content: "World-class steel manufacturing and civil engineering driven by innovation, trust, and excellence." },
//       { property: "og:url", content: "/" },
//     ],
//     links: [{ rel: "canonical", href: "/" }],
//   }),
//   component: Home,
// });

// const stats = [
//   { v: 28, s: "+", l: "Years of Engineering" },
//   { v: 1200, s: "+", l: "Projects Delivered" },
//   { v: 65000, s: "T", l: "Annual Steel Output" },
//   { v: 42, s: "", l: "Countries Served" },
// ];

// const products = [
//   { t: "Structural Steel", d: "Heavy fabricated beams, columns and trusses to IS, ASTM, EN standards.", img: beamsImg, icon: Layers },
//   { t: "PEB Buildings", d: "Pre-engineered structures with optimal span, speed and cost performance.", img: pebImg, icon: Building2 },
//   { t: "Industrial Sheds", d: "High-bay sheds for warehousing, manufacturing and logistics.", img: shedImg, icon: Boxes },
//   { t: "Roofing Systems", d: "Insulated metal panels, standing seam and engineered cladding.", img: roofingImg, icon: Hammer },
// ];

// const services = [
//   { t: "Steel Fabrication", d: "CNC plasma, robotic welding, automated drilling lines.", i: Cog },
//   { t: "Structural Engineering", d: "BIM-driven design, dynamic and seismic analysis.", i: Layers },
//   { t: "Industrial Construction", d: "Turnkey site execution by certified erection crews.", i: Factory },
//   { t: "Quality & Safety", d: "ISO 9001, ISO 14001 & OHSAS 18001 governed processes.", i: Shield },
//   { t: "Installation", d: "Pan-India and global erection with project controls.", i: Hammer },
//   { t: "Design Consultancy", d: "Value engineering from concept to commissioning.", i: Sparkles },
// ];

// const logos = ["Tata Projects", "L&T", "Adani", "JSW", "Reliance", "Mahindra", "Siemens", "Hindalco"];

// function Home() {
//   return (
//     <div className="relative">
//       {/* HERO */}
//       <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
//         <div className="aurora absolute inset-0 -z-10" />
//         <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />
//         {/* Floating particles */}
//         <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
//           {[...Array(14)].map((_, i) => (
//             <span
//               key={i}
//               className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
//               style={{
//                 top: `${(i * 53) % 90 + 5}%`,
//                 left: `${(i * 37) % 95 + 2}%`,
//                 width: `${4 + (i % 4) * 2}px`,
//                 height: `${4 + (i % 4) * 2}px`,
//                 animationDelay: `${(i % 6) * 0.6}s`,
//                 animationDuration: `${5 + (i % 5)}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
//           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
//             <span className="chip"><span className="w-1.5 h-1.5 rounded-full bg-[--energy]" /> Precision · Strength · Innovation</span>
//             <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
//               Engineering Strength.
//               <br />
//               Building the <span className="text-gradient">Future</span> with Precision.
//             </h1>
//             <p className="mt-6 text-lg text-muted-foreground max-w-xl">
//               World-class steel manufacturing and civil engineering solutions driven by
//               innovation, trust, and engineering excellence across continents.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
//                 Get a Quote <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link to="/projects" className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
//                 Explore Projects <ChevronRight className="w-4 h-4" />
//               </Link>
//             </div>
//             <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {stats.map((s) => (
//                 <div key={s.l} className="glass rounded-xl px-4 py-4">
//                   <div className="text-2xl sm:text-3xl font-display font-bold text-[--brand-deep]">
//                     <Counter to={s.v} suffix={s.s} />
//                   </div>
//                   <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="lg:col-span-5 relative">
//             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
//               <img src={heroImg} alt="Steel fabrication facility" className="w-full h-full object-cover" width={1920} height={1280} />
//               <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
//               {/* Floating glass UI cards */}
//               <div className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs animate-float">
//                 <div className="flex items-center gap-2 text-[--brand-deep] font-semibold"><Zap className="w-4 h-4" /> Live · Bay 4</div>
//                 <div className="mt-1 text-muted-foreground">Robotic weld cell · 99.4% uptime</div>
//               </div>
//               <div className="absolute -right-4 bottom-8 glass rounded-2xl px-4 py-3 text-xs animate-float" style={{ animationDelay: "1.2s" }}>
//                 <div className="flex items-center gap-2 text-[--trust] font-semibold"><CheckCircle2 className="w-4 h-4" /> ISO 9001 · Verified</div>
//                 <div className="mt-1 text-muted-foreground">Batch #EPS-2451 cleared QC</div>
//               </div>
//             </div>
//             {/* Scroll indicator */}
//             <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
//               <div className="w-px h-12 bg-gradient-to-b from-[--brand] to-transparent" />
//               Scroll
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* LOGO SLIDER */}
//       <section className="border-y border-border/60 bg-white/60 backdrop-blur">
//         <div className="mx-auto max-w-7xl px-4 py-6 overflow-hidden">
//           <div className="flex gap-12 animate-[shimmer_30s_linear_infinite] whitespace-nowrap" style={{ animation: "none" }}>
//             <div className="flex gap-12 animate-marquee">
//               {[...logos, ...logos].map((l, i) => (
//                 <span key={i} className="text-sm sm:text-base font-display font-semibold tracking-tight text-foreground/40 hover:text-[--brand-deep] transition">{l}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//         <style>{`
//           @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
//           .animate-marquee { animation: marquee 28s linear infinite; }
//         `}</style>
//       </section>

//       {/* PRODUCTS */}
//       <section className="py-24">
//         <div className="mx-auto max-w-7xl px-4">
//           <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
//             <div>
//               <span className="chip">Capability</span>
//               <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Built for the <span className="text-gradient">industrial era</span></h2>
//             </div>
//             <Link to="/products" className="text-sm font-semibold text-[--brand-deep] inline-flex items-center gap-1 hover:gap-2 transition-all">All products <ArrowRight className="w-4 h-4" /></Link>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {products.map((p, i) => (
//               <motion.div
//                 key={p.t}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="glass-card overflow-hidden group"
//               >
//                 <div className="relative aspect-[5/4] overflow-hidden">
//                   <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
//                   <div className="absolute top-3 left-3 grid place-items-center w-10 h-10 rounded-lg glass">
//                     <p.icon className="w-5 h-5 text-[--brand-deep]" />
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="font-display font-semibold text-lg">{p.t}</h3>
//                   <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
//                   <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] hover:gap-2 transition-all">
//                     Explore <ChevronRight className="w-4 h-4" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
//         <div className="blueprint-grid absolute inset-0 opacity-50" />
//         <div className="mx-auto max-w-7xl px-4 relative">
//           <div className="max-w-2xl">
//             <span className="chip">Services</span>
//             <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">A complete <span className="text-gradient">engineering stack</span></h2>
//             <p className="mt-4 text-muted-foreground">From concept BIM to crane-on-site erection, our integrated teams deliver every phase of industrial construction.</p>
//           </div>
//           <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {services.map((s, i) => (
//               <motion.div
//                 key={s.t}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: i * 0.06 }}
//                 className="glass-card p-6"
//               >
//                 <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.5)]">
//                   <s.i className="w-5 h-5" />
//                 </div>
//                 <h3 className="mt-4 font-display font-semibold text-lg">{s.t}</h3>
//                 <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FACTORY / WHY */}
//       <section className="py-24">
//         <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
//           <div className="lg:col-span-6 relative">
//             <div className="glass-card overflow-hidden">
//               <img src={aerialImg} alt="Factory aerial" loading="lazy" className="w-full h-full object-cover" />
//             </div>
//             <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 max-w-[220px]">
//               <div className="text-xs uppercase tracking-widest text-muted-foreground">Plant Area</div>
//               <div className="font-display font-bold text-2xl text-[--brand-deep]">
//                 <Counter to={420000} suffix=" sq.ft" />
//               </div>
//             </div>
//           </div>
//           <div className="lg:col-span-6">
//             <span className="chip">Manufacturing</span>
//             <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Two decades of <span className="text-gradient">precision output</span></h2>
//             <p className="mt-4 text-muted-foreground">A fully integrated facility with automated cutting, robotic welding, surface treatment and an in-house QA lab — engineered for repeatable global-grade quality.</p>
//             <ul className="mt-6 space-y-3">
//               {[
//                 "Robotic welding cells with weld-bead monitoring",
//                 "CNC plasma & oxy-fuel cutting up to 80mm plate",
//                 "Shot-blast surface prep + automated paint line",
//                 "In-house NDT, mechanical and metallurgical testing",
//               ].map((t) => (
//                 <li key={t} className="flex items-start gap-3 text-sm">
//                   <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-[--trust]/20 text-[--trust]"><CheckCircle2 className="w-3.5 h-3.5" /></span>
//                   {t}
//                 </li>
//               ))}
//             </ul>
//             <Link to="/manufacturing" className="mt-7 inline-flex items-center gap-1.5 btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold">
//               Tour the facility <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-4">
//           <div className="relative overflow-hidden rounded-3xl glass-card p-10 lg:p-14">
//             <div className="absolute inset-0 -z-10">
//               <img src={engineerImg} alt="" className="w-full h-full object-cover opacity-30" />
//               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40" />
//             </div>
//             <div className="max-w-2xl">
//               <span className="chip">Start a Project</span>
//               <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Have a structure in mind? <span className="text-gradient">Let's engineer it.</span></h2>
//               <p className="mt-3 text-muted-foreground">Talk to our project engineers and receive a detailed quote in under 48 hours.</p>
//               <div className="mt-6 flex flex-wrap gap-3">
//                 <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
//                 <Link to="/downloads" className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">Download Brochure</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// import { createFileRoute } from "@tanstack/react-router";
// import Hero from "@/components/site/Hero";
// import LogoSlider from "@/components/site/LogoSlider";
// import ProductsSection from "@/components/site/ProductsSection";
// import ServicesSection from "@/components/site/ServicesSection";
// import ManufacturingSection from "@/components/site/ManufacturingSection";
// import CTASection from "@/components/site/CTASection";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: " Columbia — Engineering Strength. Building the Future." },
//       { name: "description", content: "Precision steel manufacturing and civil structural solutions for industrial leaders. PEB buildings, structural steel, sheds, roofing and fabricated components." },
//       { property: "og:title", content: " Columbia — Engineering Strength. Building the Future." },
//       { property: "og:description", content: "World-class steel manufacturing and civil engineering driven by innovation, trust, and excellence." },
//       { property: "og:url", content: "/" },
//     ],
//     links: [{ rel: "canonical", href: "/" }],
//   }),
//   component: Home,
// });

// function Home() {
//   return (
//     <div className="relative">
//       <Hero />
//       <LogoSlider />
//       <ProductsSection />
//       <ServicesSection />
//       <ManufacturingSection />
//       <CTASection />
//     </div>
//   );
// }



import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/site/Hero";
import LogoSlider from "@/components/site/LogoSlider";
import ProductsSection from "@/components/site/ProductsSection";
import ServicesSection from "@/components/site/ServicesSection";
import ManufacturingSection from "@/components/site/ManufacturingSection";
import CTASection from "@/components/site/CTASection";
import ProcessVideo from "@/components/site/ProcessVideo";
import ProjectVideoShowcase from "@/components/site/ProjectVideoShowcase";
import FactoryTour from "@/components/site/FactoryTour";
import VideoTestimonials from "@/components/site/VideoTestimonials";
import BehindTheScenes from "@/components/site/BehindTheScenes";
import EngineeringStructureSection from "@/components/site/EngineeringStructureSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: " Columbia — Engineering Strength. Building the Future." },
      { name: "description", content: "Precision steel manufacturing and civil structural solutions for industrial leaders. PEB buildings, structural steel, sheds, roofing and fabricated components." },
      { property: "og:title", content: " Columbia — Engineering Strength. Building the Future." },
      { property: "og:description", content: "World-class steel manufacturing and civil engineering driven by innovation, trust, and excellence." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* <LogoSlider /> */}
      <ProductsSection />
      <ServicesSection />
      <EngineeringStructureSection />
      
      {/* Video Sections */}
      {/* <ProcessVideo /> */}
      <ProjectVideoShowcase />
      
      {/* <ManufacturingSection /> */}
      
      {/* More Video Sections */}
      {/* <FactoryTour /> */}
      {/* <VideoTestimonials /> */}
      {/* <BehindTheScenes /> */}
      
      <CTASection />
    </div>
  );
}