// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { ArrowUpRight } from "lucide-react";
// import peb from "@/assets/project-peb.jpg";
// import beams from "@/assets/product-beams.jpg";
// import shed from "@/assets/product-shed.jpg";
// import roofing from "@/assets/product-roofing.jpg";
// import factory from "@/assets/factory-aerial.jpg";
// import manufacturing from "@/assets/manufacturing.jpg";

// export const Route = createFileRoute("/projects")({
//   head: () => ({
//     meta: [
//       { title: "Projects —  Columbia" },
//       { name: "description", content: "A gallery of delivered steel and civil engineering projects across industries and geographies." },
//       { property: "og:title", content: "Projects —  Columbia" },
//       { property: "og:description", content: "Selected works from our portfolio of industrial steel structures." },
//       { property: "og:url", content: "/projects" },
//     ],
//     links: [{ rel: "canonical", href: "/projects" }],
//   }),
//   component: ProjectsPage,
// });

// const filters = ["All", "Manufacturing", "Logistics", "Power", "Infrastructure"] as const;
// type F = typeof filters[number];

// const projects: { t: string; c: Exclude<F, "All">; img: string; loc: string; size: string; tall?: boolean }[] = [
//   { t: "Auto OEM Press Shop", c: "Manufacturing", img: peb, loc: "Pune, IN", size: "62,000 sq.m", tall: true },
//   { t: "Cold-Chain Logistics Hub", c: "Logistics", img: shed, loc: "Dubai, AE", size: "45,000 sq.m" },
//   { t: "Solar Module Plant", c: "Power", img: factory, loc: "Gujarat, IN", size: "120,000 sq.m" },
//   { t: "Port Terminal Canopy", c: "Infrastructure", img: roofing, loc: "Mombasa, KE", size: "18,000 sq.m", tall: true },
//   { t: "EV Battery Gigafactory", c: "Manufacturing", img: manufacturing, loc: "Chennai, IN", size: "95,000 sq.m" },
//   { t: "Steel Service Center", c: "Logistics", img: beams, loc: "Jeddah, SA", size: "32,000 sq.m" },
// ];

// function ProjectsPage() {
//   const [f, setF] = useState<F>("All");
//   const list = f === "All" ? projects : projects.filter((p) => p.c === f);

//   return (
//     <>
//       <PageHero eyebrow="Projects" title="Structures we're proud to sign." subtitle="A selection of fabricated and erected industrial works across continents — each engineered to deliver decades of service." />

//       <section className="pb-24">
//         <div className="mx-auto max-w-7xl px-4">
//           <div className="flex flex-wrap gap-2 mb-8">
//             {filters.map((c) => (
//               <button key={c} onClick={() => setF(c)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${f === c ? "bg-gradient-to-r from-[--brand-deep] to-[--brand] text-white border-transparent" : "bg-white/70 border-border hover:border-[--brand-sky]"}`}>
//                 {c}
//               </button>
//             ))}
//           </div>

//           <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
//             {list.map((p, i) => (
//               <motion.div key={p.t} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`break-inside-avoid mb-5 glass-card overflow-hidden group ${p.tall ? "" : ""}`}>
//                 <div className={`relative overflow-hidden ${p.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
//                   <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
//                   <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition text-white">
//                     <div className="text-xs uppercase tracking-widest text-white/80">{p.c}</div>
//                     <div className="font-display font-semibold text-lg flex items-center gap-1.5">{p.t} <ArrowUpRight className="w-4 h-4" /></div>
//                     <div className="text-xs mt-1 text-white/80">{p.loc} · {p.size}</div>
//                   </div>
//                 </div>
//                 <div className="p-4 group-hover:opacity-0 transition">
//                   <div className="text-[11px] uppercase tracking-widest text-[--brand-deep] font-semibold">{p.c}</div>
//                   <div className="font-display font-semibold mt-0.5">{p.t}</div>
//                   <div className="text-xs text-muted-foreground mt-0.5">{p.loc} · {p.size}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }








// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { ArrowUpRight, MapPin, Ruler, Building2, Package, Zap, Trees, Filter } from "lucide-react";
// import peb from "@/assets/project-peb.jpg";
// import beams from "@/assets/product-beams.jpg";
// import shed from "@/assets/product-shed.jpg";
// import roofing from "@/assets/product-roofing.jpg";
// import factory from "@/assets/factory-aerial.jpg";
// import manufacturing from "@/assets/manufacturing.jpg";

// export const Route = createFileRoute("/projects")({
//   head: () => ({
//     meta: [
//       { title: "Projects —  Columbia" },
//       { name: "description", content: "A gallery of delivered steel and civil engineering projects across industries and geographies." },
//       { property: "og:title", content: "Projects —  Columbia" },
//       { property: "og:description", content: "Selected works from our portfolio of industrial steel structures." },
//       { property: "og:url", content: "/projects" },
//     ],
//     links: [{ rel: "canonical", href: "/projects" }],
//   }),
//   component: ProjectsPage,
// });

// const filters = ["All", "Manufacturing", "Logistics", "Power", "Infrastructure"] as const;
// type F = typeof filters[number];

// const projects: { t: string; c: Exclude<F, "All">; img: string; loc: string; size: string; tall?: boolean; year?: string; description?: string }[] = [
//   { t: "Auto OEM Press Shop", c: "Manufacturing", img: peb, loc: "Pune, IN", size: "62,000 sq.m", tall: true, year: "2023", description: "Heavy-duty structural framework for automotive manufacturing" },
//   { t: "Cold-Chain Logistics Hub", c: "Logistics", img: shed, loc: "Dubai, AE", size: "45,000 sq.m", year: "2023", description: "Temperature-controlled storage facility" },
//   { t: "Solar Module Plant", c: "Power", img: factory, loc: "Gujarat, IN", size: "120,000 sq.m", year: "2024", description: "Renewable energy manufacturing facility" },
//   { t: "Port Terminal Canopy", c: "Infrastructure", img: roofing, loc: "Mombasa, KE", size: "18,000 sq.m", tall: true, year: "2022", description: "Weather protection for cargo handling" },
//   { t: "EV Battery Gigafactory", c: "Manufacturing", img: manufacturing, loc: "Chennai, IN", size: "95,000 sq.m", year: "2024", description: "State-of-the-art battery production plant" },
//   { t: "Steel Service Center", c: "Logistics", img: beams, loc: "Jeddah, SA", size: "32,000 sq.m", year: "2023", description: "Distribution and processing center" },
//   { t: "Hydroelectric Plant", c: "Power", img: peb, loc: "Himachal, IN", size: "25,000 sq.m", tall: true, year: "2022", description: "Power generation infrastructure" },
//   { t: "Metro Rail Depot", c: "Infrastructure", img: factory, loc: "Mumbai, IN", size: "85,000 sq.m", year: "2023", description: "Rolling stock maintenance facility" },
//   { t: "Pharmaceutical Plant", c: "Manufacturing", img: manufacturing, loc: "Hyderabad, IN", size: "40,000 sq.m", year: "2024", description: "GMP-certified production facility" },
// ];

// const getCategoryIcon = (category: string) => {
//   switch(category) {
//     case "Manufacturing": return Package;
//     case "Logistics": return Building2;
//     case "Power": return Zap;
//     case "Infrastructure": return Trees;
//     default: return Building2;
//   }
// };

// const getCategoryColor = (category: string) => {
//   switch(category) {
//     case "Manufacturing": return "from-blue-500 to-blue-600";
//     case "Logistics": return "from-emerald-500 to-emerald-600";
//     case "Power": return "from-orange-500 to-orange-600";
//     case "Infrastructure": return "from-purple-500 to-purple-600";
//     default: return "from-cyan-500 to-cyan-600";
//   }
// };

// const getCategoryBorderColor = (category: string) => {
//   switch(category) {
//     case "Manufacturing": return "hover:border-blue-200";
//     case "Logistics": return "hover:border-emerald-200";
//     case "Power": return "hover:border-orange-200";
//     case "Infrastructure": return "hover:border-purple-200";
//     default: return "hover:border-cyan-200";
//   }
// };

// function ProjectsPage() {
//   const [f, setF] = useState<F>("All");
//   const list = f === "All" ? projects : projects.filter((p) => p.c === f);

//   const totalProjects = projects.length;
//   const totalArea = projects.reduce((acc, p) => acc + parseInt(p.size), 0);
//   const countries = [...new Set(projects.map(p => p.loc.split(',')[1].trim()))];

//   return (
//     <>
//       <PageHero 
//         eyebrow="Projects" 
//         title="Structures we're proud to sign." 
//         subtitle="A selection of fabricated and erected industrial works across continents — each engineered to deliver decades of service." 
//       />

     

//       <section className="pb-24 pt-12">
//         <div className="mx-auto max-w-7xl px-4">
//           {/* Filter Section */}
//           <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
//             <div className="flex items-center gap-2">
//               <Filter className="w-4 h-4 text-slate-400" />
//               <span className="text-sm font-medium text-slate-600">Filter by:</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {filters.map((c) => (
//                 <motion.button 
//                   key={c} 
//                   onClick={() => setF(c)} 
//                   whileTap={{ scale: 0.95 }}
//                   className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
//                     f === c 
//                       ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/25" 
//                       : "bg-white/80 border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-cyan-600"
//                   }`}
//                 >
//                   {c}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Projects Grid - Masonry Layout */}
//           <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
//             <AnimatePresence>
//               {list.map((p, i) => {
//                 const Icon = getCategoryIcon(p.c);
//                 const gradientColor = getCategoryColor(p.c);
//                 const borderColor = getCategoryBorderColor(p.c);
                
//                 return (
//                   <motion.div 
//                     key={p.t} 
//                     initial={{ opacity: 0, y: 24 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 0.5, delay: i * 0.05 }} 
//                     layout
//                     className={`break-inside-avoid mb-6 group cursor-pointer ${borderColor}`}
//                   >
//                     <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
//                       {/* Image Container */}
//                       <div className={`relative overflow-hidden ${p.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
//                         <img 
//                           src={p.img} 
//                           alt={p.t} 
//                           loading="lazy" 
//                           className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
//                         />
                        
//                         {/* Gradient Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                        
//                         {/* Category Badge */}
//                         <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${gradientColor} rounded-full shadow-lg z-10`}>
//                           <Icon className="w-3 h-3 text-white" />
//                           <span className="text-xs font-semibold text-white uppercase tracking-wider">{p.c}</span>
//                         </div>

//                         {/* Year Badge */}
//                         {p.year && (
//                           <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-bold text-slate-700 z-10">
//                             {p.year}
//                           </div>
//                         )}

//                         {/* Hover Content */}
//                         <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
//                           <h3 className="text-white font-bold text-xl mb-2">{p.t}</h3>
//                           <p className="text-white/80 text-sm mb-3 line-clamp-2">{p.description}</p>
//                           <div className="flex items-center gap-4 text-white/80 text-xs">
//                             <div className="flex items-center gap-1">
//                               <MapPin className="w-3 h-3" />
//                               <span>{p.loc}</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <Ruler className="w-3 h-3" />
//                               <span>{p.size}</span>
//                             </div>
//                           </div>
//                           <div className="mt-3 flex items-center gap-1 text-cyan-300 text-sm font-semibold">
//                             View Project <ArrowUpRight className="w-4 h-4" />
//                           </div>
//                         </div>
//                       </div>

//                       {/* Bottom Info (Visible on non-hover) */}
//                       <div className="p-5">
//                         <div className="flex items-start justify-between">
//                           <div className="flex-1">
//                             <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-1">{p.c}</div>
//                             <h3 className="font-display font-semibold text-lg text-slate-900 mb-2 line-clamp-1">{p.t}</h3>
//                             <div className="flex items-center gap-3 text-xs text-slate-500">
//                               <div className="flex items-center gap-1">
//                                 <MapPin className="w-3 h-3" />
//                                 <span>{p.loc}</span>
//                               </div>
//                               <div className="flex items-center gap-1">
//                                 <Ruler className="w-3 h-3" />
//                                 <span>{p.size}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 flex-shrink-0 ml-3">
//                             <ArrowUpRight className="w-4 h-4 text-cyan-600 group-hover:text-white transition-all" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>

//           {/* Empty State */}
//           {list.length === 0 && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <Building2 className="w-16 h-16 mx-auto text-slate-300 mb-4" />
//               <h3 className="text-xl font-semibold text-slate-600 mb-2">No projects found</h3>
//               <p className="text-slate-400">Try selecting a different category</p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
//         <div className="mx-auto max-w-7xl px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Have a Project in Mind?
//             </h2>
//             <p className="text-cyan-100 max-w-2xl mx-auto mb-8">
//               Let's discuss how we can bring your vision to life with our engineering expertise
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
//               >
//                 Start Your Project
//                 <ArrowUpRight className="w-4 h-4" />
//               </a>
//               <a
//                 href="/manufacturing"
//                 className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
//               >
//                 Visit Our Facility
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }






import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects —  Columbia" },
      { name: "description", content: "A gallery of delivered steel and civil engineering projects across industries and geographies." },
      { property: "og:title", content: "Projects —  Columbia" },
      { property: "og:description", content: "Selected works from our portfolio of industrial steel structures." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero 
        eyebrow="Projects" 
        title="Structures we're proud to sign." 
        subtitle="A selection of fabricated and erected industrial works across continents — each engineered to deliver decades of service." 
      />

      <section className="pb-24 pt-12">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-[400px] text-center"
          >
            <Construction className="w-20 h-20 text-amber-500 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              This Page is Under Construction
            </h2>
            <p className="text-slate-500 max-w-md">
              We're currently curating our project portfolio. Please check back soon to see our completed works.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}