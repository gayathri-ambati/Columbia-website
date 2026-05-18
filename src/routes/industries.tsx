// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { Building2, Truck, Warehouse, Factory, Boxes, Zap } from "lucide-react";

// export const Route = createFileRoute("/industries")({
//   head: () => ({
//     meta: [
//       { title: "Industries — Epitome Steel" },
//       { name: "description", content: "Steel structures and PEB solutions for construction, infrastructure, warehousing, manufacturing, logistics and power plants." },
//       { property: "og:title", content: "Industries — Epitome Steel" },
//       { property: "og:description", content: "Six sectors. One engineering partner." },
//       { property: "og:url", content: "/industries" },
//     ],
//     links: [{ rel: "canonical", href: "/industries" }],
//   }),
//   component: IndustriesPage,
// });

// const items = [
//   { i: Building2, t: "Construction", d: "Commercial, mixed-use and high-rise structural packages." },
//   { i: Boxes, t: "Infrastructure", d: "Bridges, terminals, ports and rail structures." },
//   { i: Warehouse, t: "Warehousing", d: "High-bay distribution centers & cold-chain facilities." },
//   { i: Factory, t: "Manufacturing", d: "Auto OEM, gigafactories and process industries." },
//   { i: Truck, t: "Logistics", d: "Multi-modal hubs, cross-docks and depots." },
//   { i: Zap, t: "Power Plants", d: "Renewable, thermal, BESS and substation structures." },
// ];

// function IndustriesPage() {
//   return (
//     <>
//       <PageHero eyebrow="Industries" title="Built for the sectors that move the world." subtitle="From hyperscale gigafactories to cross-border logistics hubs, our structures host the operations of global industry leaders." />
//       <section className="pb-24">
//         <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {items.map((it, i) => (
//             <motion.div key={it.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass-card p-7 group relative overflow-hidden">
//               <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[--brand-sky]/20 blur-2xl group-hover:bg-[--brand]/25 transition" />
//               <div className="grid place-items-center w-14 h-14 rounded-2xl bg-white border border-[--brand-sky]/40 text-[--brand-deep] shadow-[0_0_0_5px_rgba(56,189,248,0.15)] group-hover:scale-105 transition">
//                 <it.i className="w-6 h-6" />
//               </div>
//               <h3 className="mt-5 font-display font-semibold text-lg">{it.t}</h3>
//               <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }




import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { 
  Building2, 
  Truck, 
  Warehouse, 
  Factory, 
  Boxes, 
  Zap,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  MapPin,
  Briefcase,
  Award,
  Flame,
  Car,
  Train,
  Plane,
  Pickaxe,
  Pill,
  SunMedium,
  Server
} from "lucide-react";

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
  { 
    i: Building2, 
    t: "Construction", 
    d: "Commercial, mixed-use and high-rise structural packages.",
    stats: "250+ Projects",
    projects: "50+ High-rises | 30+ Malls | 20+ Airports",
    color: "from-blue-500 to-blue-600"
  },
  { 
    i: Boxes, 
    t: "Infrastructure", 
    d: "Bridges, terminals, ports and rail structures.",
    stats: "180+ Structures",
    projects: "40+ Bridges | 25+ Metro Stations | 15+ Ports",
    color: "from-purple-500 to-purple-600"
  },
  { 
    i: Warehouse, 
    t: "Warehousing", 
    d: "High-bay distribution centers & cold-chain facilities.",
    stats: "5M+ Sq. Ft.",
    projects: "100+ DCs | 50+ Cold Storages",
    color: "from-emerald-500 to-emerald-600"
  },
  { 
    i: Factory, 
    t: "Manufacturing", 
    d: "Auto OEM, gigafactories and process industries.",
    stats: "120+ Plants",
    projects: "45+ Auto Plants | 30+ Process Industries",
    color: "from-orange-500 to-orange-600"
  },
  { 
    i: Truck, 
    t: "Logistics", 
    d: "Multi-modal hubs, cross-docks and depots.",
    stats: "90+ Hubs",
    projects: "35+ Logistics Parks | 25+ Cross-docks",
    color: "from-amber-500 to-amber-600"
  },
  { 
    i: Zap, 
    t: "Power Plants", 
    d: "Renewable, thermal, BESS and substation structures.",
    stats: "75+ Plants",
    projects: "40+ Solar Farms | 20+ Wind Projects",
    color: "from-sky-500 to-blue-500"
  },
];



const testimonials = [
  { text: "Epitome Steel delivered our warehouse ahead of schedule with exceptional quality.", client: "Reliance Logistics", role: "Operations Head" },
  { text: "The PEB structure for our manufacturing plant exceeded all expectations.", client: "Tata Motors", role: "Plant Manager" },
  { text: "Professional team, excellent quality, and timely completion for our solar project.", client: "Adani Green Energy", role: "Project Director" }
];

function IndustriesPage() {
  return (
    <>
      <PageHero 
        eyebrow="Industries" 
        title="Built for the sectors that move the world." 
        subtitle="From hyperscale gigafactories to cross-border logistics hubs, our structures host the operations of global industry leaders." 
      />


      {/* Industry Sectors */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Smart Solutions   <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
            For Every Industry
          </span>{" "}
            </h2>
         
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized steel solutions for India's fastest-growing industries
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${it.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} style={{ padding: '2px' }}>
                  <div className="absolute inset-[2px] bg-white rounded-2xl" />
                </div>
                
                <div className="relative p-7">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${it.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <it.i className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="mt-5 font-display font-bold text-xl">{it.t}</h3>
                  
                  {/* Description */}
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                  
                  {/* Stats Badge */}
                  <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full">
                    <TrendingUp className="w-3 h-3 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600">{it.stats}</span>
                  </div>
                  
                  {/* Projects */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Key Projects</p>
                    <p className="text-sm text-gray-600">{it.projects}</p>
                  </div>
                  
                  {/* Learn More Link */}
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
  
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/30 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full" />

  <div className="mx-auto max-w-7xl px-4 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-16">

      {/* LEFT CONTENT */}
      <div className="flex-1">

        {/* Badge */}
        <div className="relative inline-block mb-7">
          <div className="absolute inset-0 blur-xl bg-cyan-400 opacity-30 rounded-full"></div>

          <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-5 py-2 rounded-full shadow-xl">
            <Factory className="w-4 h-4" />

            <span className="text-sm font-semibold uppercase tracking-[2px]">
              Industries We Serve
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
          Powering <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Industrial Growth
          </span>{" "}
          Across Every Sector
        </h2>

        {/* Description */}
        <p className="text-slate-600 text-lg leading-8 mb-10 max-w-2xl">
          We deliver advanced steel structures and engineered solutions for
          modern industries including infrastructure, warehousing,
          manufacturing, logistics, and power plants.
        </p>

        {/* Industry Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
  {[
    {
      title: "Oil & Gas",
      icon: Flame,
      color: "red",
      desc: "Pipeline & refinery structural solutions",
    },
    {
      title: "Automobile",
      icon: Car,
      color: "blue",
      desc: "Advanced fabrication for auto industries",
    },
    {
      title: "Railways",
      icon: Train,
      color: "emerald",
      desc: "Heavy steel structures for railway projects",
    },
    {
      title: "Airports",
      icon: Plane,
      color: "sky",
      desc: "Modern airport infrastructure systems",
    },
    {
      title: "Mining",
      icon: Pickaxe,
      color: "amber",
      desc: "Durable mining plant structures",
    },
    {
      title: "Pharmaceutical",
      icon: Pill,
      color: "violet",
      desc: "Cleanroom & pharma plant construction",
    },
    {
      title: "Data Centers",
      icon: Server,
      color: "cyan",
      desc: "High-performance smart infrastructure",
    },
    {
      title: "Renewable Energy",
      icon: SunMedium,
      color: "orange",
      desc: "Solar & wind energy steel solutions",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group flex items-center gap-4 bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-2xl bg-${item.color}-100 flex items-center justify-center`}
      >
        <item.icon
          className={`w-6 h-6 text-${item.color}-600`}
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-slate-900">
          {item.title}
        </h3>

        <p className="text-sm text-slate-500">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
        </div>

       
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute -inset-3 rounded-[35px] bg-gradient-to-r from-cyan-500 to-blue-700 blur-2xl opacity-25 group-hover:opacity-40 transition duration-500"></div>

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
              alt="Industries"
              className="w-full h-[620px] object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                <span className="text-xs font-semibold uppercase tracking-[3px]">
                  Industrial Excellence
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Advanced Engineering Solutions
              </h3>

              <p className="text-sm text-gray-200 leading-6 max-w-md">
                Delivering high-performance steel structures for construction,
                logistics, warehousing, manufacturing and energy industries.
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-xl rounded-full px-4 py-2 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                <span className="text-xs font-bold text-slate-800">
                  250+ Projects
                </span>
              </div>
            </div>
          </div>
        </motion.div>

         {/* Bottom Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 rounded-3xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 p-5 shadow-lg mt-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl">
            <Truck className="w-8 h-8 text-white" />
          </div>

          <div className="flex-1">
            <p className="text-sm text-slate-500 uppercase tracking-wider">
              Trusted by Leading Industries
            </p>

            <h4 className="text-lg font-bold text-slate-900 mt-1">
              Delivering Projects Across India
            </h4>
          </div>

          <div className="hidden sm:flex w-14 h-14 rounded-full bg-yellow-400 items-center justify-center shadow-lg">
            <span className="text-white text-2xl">★</span>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
    </section>

    
      {/* Geographic Presence */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Pan-India Delivery Network
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Serving clients across all major industrial regions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { region: "North India", cities: "Delhi NCR, Chandigarh, Jaipur, Lucknow", projects: "120+" },
              { region: "South India", cities: "Bangalore, Chennai, Hyderabad, Coimbatore", projects: "150+" },
              { region: "East India", cities: "Kolkata, Bhubaneswar, Guwahati, Patna", projects: "80+" },
              { region: "West India", cities: "Mumbai, Pune, Ahmedabad, Surat", projects: "180+" }
            ].map((region, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-lg font-bold mb-2">{region.region}</div>
                <div className="text-xs text-blue-200 mb-3">{region.cities}</div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full">
                  <Briefcase className="w-3 h-3" />
                  <span className="text-sm font-semibold">{region.projects} Projects</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Why Choose Us Section */}
     <section
  className="py-20 relative overflow-hidden bg-cover bg-center mt-12"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-slate-900/75"></div>

  {/* Gradient Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

  <div className="relative mx-auto max-w-7xl px-4">
    <div className="text-center mb-12">
      <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
        Why Choose Us
      </span>

      <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-white">
        Engineered for Excellence
      </h2>

      <p className="text-slate-300 max-w-2xl mx-auto">
        What makes Epitome Steel the preferred partner for industry leaders
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: CheckCircle,
          title: "Quality Assured",
          desc: "IS, ASTM & EN certified materials with strict quality control",
        },
        {
          icon: Briefcase,
          title: "Industry Expertise",
          desc: "25+ years of experience across diverse industrial sectors",
        },
        {
          icon: MapPin,
          title: "Pan-India Presence",
          desc: "Dedicated teams across all major industrial hubs",
        },
      ].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="text-center p-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <feature.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-xl font-bold mb-2 text-white">
            {feature.title}
          </h3>

          <p className="text-slate-300">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed quote for your steel structure requirements
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}