// import { createFileRoute, Link } from "@tanstack/react-router";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { Download, ArrowRight } from "lucide-react";
// import beams from "@/assets/product-beams.jpg";
// import roofing from "@/assets/product-roofing.jpg";
// import shed from "@/assets/product-shed.jpg";
// import peb from "@/assets/project-peb.jpg";
// import factory from "@/assets/factory-aerial.jpg";
// import eng from "@/assets/engineer.jpg";

// export const Route = createFileRoute("/products")({
//   head: () => ({
//     meta: [
//       { title: "Products — Epitome Steel" },
//       { name: "description", content: "Steel structures, PEB buildings, industrial sheds, roofing systems, fabricated components and civil structural parts." },
//       { property: "og:title", content: "Products — Epitome Steel" },
//       { property: "og:description", content: "Engineered steel products to IS, ASTM and EN standards." },
//       { property: "og:url", content: "/products" },
//     ],
//     links: [{ rel: "canonical", href: "/products" }],
//   }),
//   component: ProductsPage,
// });

// type Cat = "All" | "Steel" | "PEB" | "Sheds" | "Roofing" | "Components" | "Civil";

// const items: { c: Exclude<Cat, "All">; t: string; d: string; img: string }[] = [
//   { c: "Steel", t: "Structural Steel Beams", d: "Heavy I-sections, H-columns and trusses.", img: beams },
//   { c: "PEB", t: "PEB Industrial Buildings", d: "Optimized clear-span structures up to 90m.", img: peb },
//   { c: "Sheds", t: "Industrial Sheds", d: "Warehouse & manufacturing shed systems.", img: shed },
//   { c: "Roofing", t: "Standing Seam Roofing", d: "Insulated metal panels and weather-tight roof.", img: roofing },
//   { c: "Components", t: "Fabricated Components", d: "Plate, lattice, bracket and node assemblies.", img: factory },
//   { c: "Civil", t: "Civil Structural Parts", d: "Embedments, rebar cages, precast supports.", img: eng },
// ];

// const cats: Cat[] = ["All", "Steel", "PEB", "Sheds", "Roofing", "Components", "Civil"];

// function ProductsPage() {
//   const [active, setActive] = useState<Cat>("All");
//   const filtered = active === "All" ? items : items.filter((i) => i.c === active);
//   return (
//     <>
//       <PageHero eyebrow="Products" title="Engineered to lift industry." subtitle="A complete catalogue of structural steel, PEB systems and civil components — manufactured to global standards and delivered ready for site." />

//       <section className="pb-24">
//         <div className="mx-auto max-w-7xl px-4">
//           <div className="flex flex-wrap gap-2 mb-8">
//             {cats.map((c) => (
//               <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${active === c ? "bg-gradient-to-r from-[--brand-deep] to-[--brand] text-white border-transparent shadow-[0_8px_20px_-10px_rgba(37,99,235,.6)]" : "bg-white/70 border-border hover:border-[--brand-sky]"}`}>
//                 {c}
//               </button>
//             ))}
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {filtered.map((p, i) => (
//               <motion.article key={p.t + i} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.04 }} className="glass-card overflow-hidden group">
//                 <div className="relative aspect-[5/4] overflow-hidden">
//                   <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
//                   <span className="absolute top-3 left-3 chip">{p.c}</span>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="font-display font-semibold text-lg">{p.t}</h3>
//                   <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
//                   <div className="mt-4 flex gap-2">
//                     <Link to="/contact" className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold">Inquire <ArrowRight className="w-3.5 h-3.5" /></Link>
//                     <Link to="/downloads" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-border hover:border-[--brand-sky]"><Download className="w-3.5 h-3.5" /> Brochure</Link>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { 
  Download, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Truck,
  Settings,
  Award,
  CheckCircle,
  Building2,
  HardHat,
  Ruler,
  Sparkles
} from "lucide-react";

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
      {
        name: "description",
        content:
          "Steel structures, PEB buildings, industrial sheds, roofing systems, fabricated components and civil structural parts.",
      },
      { property: "og:title", content: "Products — Epitome Steel" },
      {
        property: "og:description",
        content: "Engineered steel products to IS, ASTM and EN standards.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Cat =
  | "All"
  | "Steel"
  | "PEB"
  | "Sheds"
  | "Roofing"
  | "Components"
  | "Civil";

const items: {
  c: Exclude<Cat, "All">;
  t: string;
  d: string;
  imgs: string[];
}[] = [
  {
    c: "Steel",
    t: "Structural Steel Beams",
    d: "Heavy I-sections, H-columns and trusses.",
    imgs: [beams, peb, factory, eng],
  },
  {
    c: "PEB",
    t: "PEB Industrial Buildings",
    d: "Optimized clear-span structures up to 90m.",
    imgs: [peb, beams, roofing, shed],
  },
  {
    c: "Sheds",
    t: "Industrial Sheds",
    d: "Warehouse & manufacturing shed systems.",
    imgs: [shed, factory, peb, beams],
  },
  {
    c: "Roofing",
    t: "Standing Seam Roofing",
    d: "Insulated metal panels and weather-tight roof.",
    imgs: [roofing, shed, beams, eng],
  },
  {
    c: "Components",
    t: "Fabricated Components",
    d: "Plate, lattice, bracket and node assemblies.",
    imgs: [factory, beams, peb, roofing],
  },
  {
    c: "Civil",
    t: "Civil Structural Parts",
    d: "Embedments, rebar cages, precast supports.",
    imgs: [eng, factory, shed, roofing],
  },
];

const cats: Cat[] = [
  "All",
  "Steel",
  "PEB",
  "Sheds",
  "Roofing",
  "Components",
  "Civil",
];

function ProductsPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered =
    active === "All"
      ? items
      : items.filter((i) => i.c === active);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Engineered to lift industry."
        subtitle="A complete catalogue of structural steel, PEB systems and civil components — manufactured to global standards and delivered ready for site."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* FILTER BUTTONS - Centered */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 mt-12">
  {cats.map((c) => {
    return (
      <button
        key={c}
        onClick={() => setActive(c)}
        className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 shadow-sm ${
          active === c
            ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-600 shadow-lg scale-105"
            : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-400"
        }`}
      >
        {c}
      </button>
    );
  })}
      </div>

          {/* PRODUCT GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.article
                key={p.t + i}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="glass-card overflow-hidden group rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <ImageCarousel images={p.imgs} category={p.c} />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg">
                    {p.t}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {p.d}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to="/contact"
                      className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                    >
                      Inquire
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/downloads"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-border hover:border-[--brand-sky]"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Brochure
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: KEY FEATURES */}
      <section className="py-20 relative overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/70" />
  </div>

  <div className="mx-auto max-w-7xl px-4 relative z-10">
    
    {/* Heading */}
    <div className="text-center mb-14">
      <span className="text-sm font-semibold text-cyan-400 uppercase tracking-[3px]">
        Why Choose Us
      </span>

      <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-5 text-white">
        Engineered for Excellence
      </h2>

      <p className="text-gray-200 max-w-2xl mx-auto text-base leading-7">
        Every product is manufactured with precision, quality, and durability
        at its core to deliver unmatched industrial performance.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
      {[
        {
          icon: Shield,
          title: "Premium Quality",
          desc: "IS, ASTM & EN certified materials",
        },
        {
          icon: Settings,
          title: "Custom Engineering",
          desc: "Tailored to your specifications",
        },
        {
          icon: Truck,
          title: "Pan-India Delivery",
          desc: "Ready for site installation",
        },
        {
          icon: Award,
          title: "10+ Years Warranty",
          desc: "On structural integrity",
        },
      ].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white/10 backdrop-blur-xl rounded-3xl p-7 border border-white/10 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.35)]"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition">
            <feature.icon className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3">
            {feature.title}
          </h3>

          {/* Desc */}
          <p className="text-sm text-gray-300 leading-6">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
      </section>

      {/* SECTION 2: INDUSTRY APPLICATIONS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Applications</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our products are trusted across diverse industrial sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Warehouses", bg: "from-blue-500 to-blue-600" },
              { icon: HardHat, title: "Manufacturing Plants", bg: "from-purple-500 to-purple-600" },
              { icon: Ruler, title: "Airplane Hangars", bg: "from-emerald-500 to-emerald-600" },
              { icon: Building2, title: "Shopping Malls", bg: "from-orange-500 to-orange-600" },
              { icon: Settings, title: "Workshops", bg: "from-teal-500 to-teal-600" },
              { icon: Sparkles, title: "Stadiums", bg: "from-pink-500 to-pink-600" }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${industry.bg} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all`}
              >
                <industry.icon className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-xl font-semibold">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CERTIFICATIONS */}
   <section className="py-20 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 -z-10" />
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
  
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
          <Award className="w-4 h-4" />
          <span className="text-sm font-semibold uppercase tracking-wider">Quality Assurance</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Certified to Global Standards
        </h2>
        
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          Our manufacturing processes and products meet rigorous international quality standards, 
          ensuring safety, reliability, and performance you can trust.
        </p>
        
        <div className="space-y-4">
          {[
            { cert: "ISO 9001:2015 Certified", icon: Shield, color: "blue" },
            { cert: "AWS D1.1 Welding Certification", icon: Settings, color: "purple" },
            { cert: "IS 2062, IS 800 Compliance", icon: CheckCircle, color: "green" },
            { cert: "ASTM & EN Standards", icon: Award, color: "orange" }
          ].map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all group"
            >
              <div className={`w-10 h-10 rounded-lg bg-${cert.color}-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <cert.icon className={`w-5 h-5 text-${cert.color}-600`} />
              </div>
              <span className="text-sm font-semibold text-gray-700">{cert.cert}</span>
            </motion.div>
          ))}
        </div>

       
      </div>

      {/* Right Side - Image Grid */}
      <div className="flex-1">
        <div className="relative">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={factory} 
              alt="Quality manufacturing" 
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Badge overlay */}
            <div className="absolute bottom-4 left-4 right-4">
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-2xl border border-green-100 hover:scale-[1.02] hover:shadow-green-200/60 transition-all duration-300"
  >
    
    {/* WhatsApp Icon */}
    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
      
      {/* Pulse Ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-8 h-8 text-white relative z-10"
      >
        <path d="M19.11 17.2c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.74.92-.91 1.11-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.34-.26.26-.98.96-.98 2.35s1 2.73 1.14 2.92c.15.19 1.97 3 4.77 4.08.67.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z" />
        <path d="M16.01 3C8.84 3 3 8.82 3 15.99c0 2.54.74 5.01 2.13 7.12L3 29l6.08-2.05a12.92 12.92 0 006.93 2.02h.01C23.18 28.97 29 23.15 29 16S23.18 3 16.01 3zm0 23.69h-.01a10.7 10.7 0 01-5.45-1.49l-.39-.23-3.61 1.22 1.18-3.52-.25-.41a10.67 10.67 0 1118.53-7.27c0 5.89-4.79 10.7-10.69 10.7z" />
      </svg>
    </div>

    {/* Content */}
    <div className="flex-1">
     

      <p className="text-sm font-bold text-slate-800">
        Quality Certified
      </p>

      <p className="text-xs text-slate-500 mt-1">
        100% Tested & Approved
      </p>
    </div>
  </a>
            </div>
          </motion.div>

           {/* Additional trust indicator */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Trusted by <span className="font-bold text-blue-600">500+</span> clients across India
            </p>
          </div>
        </div>

          {/* Floating small images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-12 hidden lg:block"
          >
            <img src={eng} alt="Engineering" className="w-full h-full object-cover" />
          </motion.div>
          
        
        </div>
      </div>
    </div>
  </div>
  </section>

  
      {/* SECTION 5: CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Build Your Project?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your steel structure requirements
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ========================= */
/* IMAGE CAROUSEL with Arrow Controls */
/* ========================= */

function ImageCarousel({
  images,
  category,
}: {
  images: string[];
  category: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative aspect-[5/4] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={category}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <span className="absolute top-3 left-3 z-20 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
        {category}
      </span>

      <button
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 backdrop-blur-sm transition-all duration-200 opacity-70 hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 backdrop-blur-sm transition-all duration-200 opacity-70 hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-[1]" />
    </div>
  );
}