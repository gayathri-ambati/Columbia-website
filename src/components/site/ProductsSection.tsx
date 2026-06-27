// import { Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { ArrowRight, ChevronRight, Layers, Building2, Boxes, Hammer } from "lucide-react";
// import beamsImg from "@/assets/StructuralSteel.jpg";
// import pebImg from "@/assets/pebimage.jpg";
// import shedImg from "@/assets/product-shed.jpg";
// import roofingImg from "@/assets/product-roofing.jpg";

// const products = [
//   { t: "Structural Steel", d: "Heavy fabricated beams, columns and trusses to IS, ASTM, EN standards.", img: beamsImg, icon: Layers },
//   { t: "PEB Buildings", d: "Pre-engineered structures with optimal span, speed and cost performance.", img: pebImg, icon: Building2 },
//   { t: "Mezzanine Flooring system", d: "High-bay sheds for warehousing, manufacturing and logistics.", img: shedImg, icon: Boxes },
//   { t: "Commercial Steel Buildings", d: "Pre Engineered commercial  steel building structures wijt optimum cost and reduced time frames for construction. ", img: roofingImg, icon: Hammer },
// ];

// export default function ProductsSection() {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
//           <div>
//             <span className="chip">Capability</span>
//             <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//               Built for the <span className="text-gradient">industrial era</span>
//             </h2>
//           </div>
//           <Link to="/products" className="text-sm font-semibold text-[--brand-deep] inline-flex items-center gap-1 hover:gap-2 transition-all">
//             All products <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>
        
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {products.map((p, i) => (
//             <motion.div
//               key={p.t}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               className="glass-card overflow-hidden group"
//             >
//               <div className="relative aspect-[5/4] overflow-hidden">
//                 <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
//                 <div className="absolute top-3 left-3 grid place-items-center w-10 h-10 rounded-lg glass">
//                   <p.icon className="w-5 h-5 text-[--brand-deep]" />
//                 </div>
//               </div>
//               <div className="p-5">
//                 <h3 className="font-display font-semibold text-lg">{p.t}</h3>
//                 <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
//                 <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] hover:gap-2 transition-all">
//                   Explore <ChevronRight className="w-4 h-4" />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Layers, Building2, Boxes, Hammer } from "lucide-react";
import beamsImg from "@/assets/StructuralSteel.jpg";
import pebImg from "@/assets/pebimage.jpg";
import shedImg from "@/assets/Mezzaninefloor.jpg";
import roofingImg from "@/assets/commercialsteelbuilding.jpg";

const products = [
  { t: "Supply Of Steel", d: "Heavy fabricated beams, columns and trusses to IS, ASTM, EN standards.", img: beamsImg, icon: Layers },
  { t: "PEB Buildings", d: "Pre-engineered structures with optimal span, speed and cost performance.", img: pebImg, icon: Building2 },
  { t: "Mezzanine Flooring system", d: "High-bay sheds for warehousing, manufacturing and logistics.", img: shedImg, icon: Boxes },
  { t: "Commercial Steel Buildings", d: "Pre Engineered commercial  steel building structures wijt optimum cost and reduced time frames for construction. ", img: roofingImg, icon: Hammer },
];

export default function ProductsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="chip">Capability</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for the <span className="text-gradient">industrial era</span>
            </h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-[--brand-deep] inline-flex items-center gap-1 hover:gap-2 transition-all">
            All products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                {/* Smoke/gradient removed */}
                <div className="absolute top-3 left-3 grid place-items-center w-10 h-10 rounded-lg glass">
                  <p.icon className="w-5 h-5 text-[--brand-deep]" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg">{p.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
                <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] hover:gap-2 transition-all">
                  Explore <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}