// import { motion } from "framer-motion";
// import { Cog, Layers, Factory, Shield, Hammer, Sparkles } from "lucide-react";

// const services = [
//   { t: "Steel Fabrication", d: "CNC plasma, robotic welding, automated drilling lines.", i: Cog },
//   { t: "Structural Engineering", d: "BIM-driven design, dynamic and seismic analysis.", i: Layers },
//   { t: "Industrial Construction", d: "Turnkey site execution by certified erection crews.", i: Factory },
//   { t: "Quality & Safety", d: "ISO 9001, ISO 14001 & OHSAS 18001 governed processes.", i: Shield },
//   { t: "Installation", d: "Pan-India and global erection with project controls.", i: Hammer },
//   { t: "Design Consultancy", d: "Value engineering from concept to commissioning.", i: Sparkles },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
//       <div className="blueprint-grid absolute inset-0 opacity-50" />
//       <div className="mx-auto max-w-7xl px-4 relative">
//         <div className="max-w-2xl">
//           <span className="chip">Services</span>
//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//             A complete <span className="text-gradient">engineering stack</span>
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             From concept BIM to crane-on-site erection, our integrated teams deliver every phase of industrial construction.
//           </p>
//         </div>
        
//         <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {services.map((s, i) => (
//             <motion.div
//               key={s.t}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: i * 0.06 }}
//               className="glass-card p-6"
//             >
//               <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.5)]">
//                 <s.i className="w-5 h-5" />
//               </div>
//               <h3 className="mt-4 font-display font-semibold text-lg">{s.t}</h3>
//               <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { 
  Cog, 
  Layers, 
  Factory, 
  Shield, 
  Hammer, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const services = [
  { 
    t: "Steel Fabrication", 
    d: "CNC plasma, robotic welding, automated drilling lines.", 
    i: Cog,
    color: "#3B82F6",
    stat: "50K+ tons/year"
  },
  { 
    t: "Structural Engineering", 
    d: "BIM-driven design, dynamic and seismic analysis.", 
    i: Layers,
    color: "#6366F1",
    stat: "500+ projects"
  },
  { 
    t: "Industrial Construction", 
    d: "Turnkey site execution by certified erection crews.", 
    i: Factory,
    color: "#10B981",
    stat: "24/7 execution"
  },
  { 
    t: "Steel Supply", 
    d: "Wholsale traders in MS plates, channels, angels, tubes, TMT bars, cement and all type of construction  materials. ", 
    i: Shield,
    color: "#EF4444",
    stat: "Zero incidents"
  },
  { 
    t: "Installation", 
    d: "Pan-India installation and global erection with project controls.", 
    i: Hammer,
    color: "#F59E0B",
    stat: "Pan India"
  },
  { 
    t: "Design Consultancy", 
    d: "Value engineering from concept to commissioning.", 
    i: Sparkles,
    color: "#8B5CF6",
    stat: "100% satisfaction"
  },
];

// Icon animation variants
const iconVariants = {
  hover: {
    rotate: [0, -10, 10, -5, 5, 0],
    scale: 1.2,
    transition: { duration: 0.5 }
  }
};

const cardVariants = {
  hover: {
    y: -8,
    transition: { duration: 0.3 }
  }
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-50" />
      
      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="max-w-2xl">
          <span className="chip">
            <Sparkles className="w-3 h-3" />
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            A complete <span className="text-gradient">engineering stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From concept BIM to crane-on-site erection, our integrated teams deliver every phase of industrial construction.
          </p>
        </div>
        
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const IconComponent = s.i;
            return (
              <motion.div
                key={s.t}
                variants={cardVariants}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group cursor-pointer"
              >
                <div className="glass-card p-6 h-full relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: s.color }}
                  />
                  
                  {/* Icon with animation */}
                  <motion.div 
                    variants={iconVariants}
                    className="relative inline-block"
                  >
                    <div 
                      className="grid place-items-center w-14 h-14 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${s.color}20, ${s.color}40)`,
                        color: s.color
                      }}
                    >
                      <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                  
                  {/* Stat badge */}
                  <div className="absolute top-6 right-6">
                    <div className="text-xs font-bold px-2 py-1 rounded-full bg-white/80 shadow-sm" style={{ color: s.color }}>
                      {s.stat}
                    </div>
                  </div>
                  
                  <h3 className="mt-5 font-display font-bold text-xl text-[--brand-deep]">
                    {s.t}
                  </h3>
                  
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.d}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: s.color }}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                  
                  {/* Decorative line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: s.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Stats counter */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border"
        >
          {[
            { label: "Projects Completed", value: "1200+", icon: Factory },
            { label: "Happy Clients", value: "850+", icon: Shield },
            { label: "Expert Engineers", value: "150+", icon: Hammer },
            { label: "Global Reach", value: "42", icon: Cog, suffix: "Countries" }
          ].map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[--brand]/10 mb-3">
                  <StatIcon className="w-5 h-5 text-[--brand]" />
                </div>
                <div className="text-2xl font-bold text-[--brand-deep]">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                {stat.suffix && <div className="text-xs text-muted-foreground">{stat.suffix}</div>}
              </div>
            );
          })}
        </motion.div> */}
      </div>
    </section>
  );
}