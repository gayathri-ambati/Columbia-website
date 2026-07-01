// import { createFileRoute } from "@tanstack/react-router";
// import { PageHero } from "@/components/site/PageHero";
// import { ShieldCheck, BadgeCheck, FileText, Download } from "lucide-react";

// export const Route = createFileRoute("/certifications")({
//   head: () => ({
//     meta: [
//       { title: "Certifications & Quality —  Columbia" },
//       { name: "description", content: "ISO 9001, ISO 14001, OHSAS 18001 certified. AWS, EN 1090 weld qualifications. Documented quality assurance." },
//       { property: "og:title", content: "Certifications —  Columbia" },
//       { property: "og:description", content: "Verified, audited and continuously improved." },
//       { property: "og:url", content: "/certifications" },
//     ],
//     links: [{ rel: "canonical", href: "/certifications" }],
//   }),
//   component: CertPage,
// });

// const certs = [
//   { t: "ISO 9001:2015", d: "Quality Management System" },
//   { t: "ISO 14001:2015", d: "Environmental Management" },
//   { t: "ISO 45001:2018", d: "Occupational Health & Safety" },
//   { t: "EN 1090-1 EXC3", d: "European structural steel execution" },
//   { t: "AWS D1.1", d: "Welding qualification — structural steel" },
//   { t: "ASTM A6 / A992", d: "Material & section compliance" },
// ];

// function CertPage() {
//   return (
//     <>
//       <PageHero eyebrow="Certifications" title="Verified, audited and improved." subtitle="Every weld, plate and process governed by internationally recognized quality frameworks." />
//       <section className="pb-16">
//         <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {certs.map((c) => (
//             <div key={c.t} className="glass-card p-6 flex gap-4">
//               <div className="grid place-items-center w-14 h-14 rounded-2xl bg-[--trust]/15 text-[--trust] shrink-0">
//                 <BadgeCheck className="w-7 h-7" />
//               </div>
//               <div>
//                 <div className="font-display font-semibold text-lg">{c.t}</div>
//                 <div className="text-sm text-muted-foreground">{c.d}</div>
//                 <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[--brand-deep] hover:gap-2 transition-all"><Download className="w-3.5 h-3.5" /> View Certificate</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="py-16 bg-gradient-to-b from-[#F8FAFC] to-white">
//         <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-5">
//           {[
//             { i: ShieldCheck, t: "Quality Assurance", d: "Documented inbound material checks, in-process inspection and final dispatch verification." },
//             { i: FileText, t: "Traceability", d: "Heat numbers, weld maps, NDT reports — fully archived and exportable per project." },
//             { i: BadgeCheck, t: "Continuous Improvement", d: "Monthly KPI reviews, CAPA system and external audit cycle every quarter." },
//           ].map((c) => (
//             <div key={c.t} className="glass-card p-7">
//               <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white"><c.i className="w-5 h-5" /></div>
//               <h3 className="mt-4 font-display font-semibold text-lg">{c.t}</h3>
//               <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }




import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { 
  ShieldCheck, 
  BadgeCheck, 
  FileText, 
  Download, 
  Award, 
  CheckCircle2,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Quality —  Columbia" },
      { name: "description", content: "ISO 9001, ISO 14001, OHSAS 18001 certified. AWS, EN 1090 weld qualifications. Documented quality assurance." },
      { property: "og:title", content: "Certifications —  Columbia" },
      { property: "og:description", content: "Verified, audited and continuously improved." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertPage,
});

const certs = [
  { t: "ISO 9001:2015", d: "Quality Management System", color: "blue", year: "2024" },
  { t: "ISO 14001:2015", d: "Environmental Management", color: "green", year: "2024" },
  { t: "ISO 45001:2018", d: "Occupational Health & Safety", color: "orange", year: "2023" },
  { t: "EN 1090-1 EXC3", d: "European structural steel execution", color: "purple", year: "2024" },
  { t: "AWS D1.1", d: "Welding qualification — structural steel", color: "cyan", year: "2024" },
  { t: "ASTM A6 / A992", d: "Material & section compliance", color: "indigo", year: "2023" },
];

const getCertColor = (color: string) => {
  switch(color) {
    case "blue": return "from-blue-500 to-blue-600";
    case "green": return "from-emerald-500 to-emerald-600";
    case "orange": return "from-orange-500 to-orange-600";
    case "purple": return "from-purple-500 to-purple-600";
    case "cyan": return "from-cyan-500 to-cyan-600";
    case "indigo": return "from-indigo-500 to-indigo-600";
    default: return "from-cyan-500 to-blue-600";
  }
};

const getCertBgColor = (color: string) => {
  switch(color) {
    case "blue": return "bg-blue-50 text-blue-600";
    case "green": return "bg-emerald-50 text-emerald-600";
    case "orange": return "bg-orange-50 text-orange-600";
    case "purple": return "bg-purple-50 text-purple-600";
    case "cyan": return "bg-cyan-50 text-cyan-600";
    case "indigo": return "bg-indigo-50 text-indigo-600";
    default: return "bg-cyan-50 text-cyan-600";
  }
};

function CertPage() {
  return (
    <>
      <PageHero 
        eyebrow="Certifications" 
        title="Verified, audited and improved." 
        subtitle="Every weld, plate and process governed by internationally recognized quality frameworks." 
      />

     

      {/* Certifications Grid */}
      {/* <section className="pb-16 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">Our Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900">
              Industry-Recognized Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of quality, safety, and environmental compliance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((c, i) => {
              const gradientColor = getCertColor(c.color);
              const bgColor = getCertBgColor(c.color);
              
              return (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                    <div className="flex gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${bgColor}`}>
                        <BadgeCheck className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${gradientColor} text-white`}>
                            {c.year}
                          </div>
                        </div>
                        <div className="font-display font-semibold text-lg text-slate-900">{c.t}</div>
                        <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
                        <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:gap-2 transition-all group/btn">
                          <Download className="w-3.5 h-3.5" />
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Quality Pillars Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">Quality Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900">
              Our Quality Pillars
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on three fundamental principles that ensure excellence in every project
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { 
                i: ShieldCheck, 
                t: "Quality Assurance", 
                d: "Documented inbound material checks, in-process inspection and final dispatch verification.", 
                features: ["Raw material testing", "In-process inspection", "Final quality check"]
              },
              { 
                i: FileText, 
                t: "Traceability", 
                d: "Heat numbers, weld maps, NDT reports — fully archived and exportable per project.", 
                features: ["Full documentation", "Digital records", "Third-party audit ready"]
              },
              { 
                i: BadgeCheck, 
                t: "Continuous Improvement", 
                d: "Monthly KPI reviews, CAPA system and external audit cycle every quarter.", 
                features: ["Monthly reviews", "CAPA system", "External audits"]
              },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-100">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <c.i className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{c.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.d}</p>
                  <div className="space-y-2">
                    {c.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      {/* <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Globally Recognized Compliance
            </h2>
            <p className="text-cyan-100 max-w-2xl mx-auto mb-8">
              Our certifications are recognized by international bodies and accepted across all major markets
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🇪🇺 European Union
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🇺🇸 United States
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🇮🇳 India
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🇦🇪 UAE
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🇸🇦 Saudi Arabia
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Download Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Download Quality Manual
              </h2>
              <p className="text-muted-foreground">
                Get our complete quality assurance documentation and certification package
              </p>
            </div>
            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                <Download className="w-4 h-4" />
                Quality Manual
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-600 transition-all">
                <FileText className="w-4 h-4" />
                Certifications Bundle
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}