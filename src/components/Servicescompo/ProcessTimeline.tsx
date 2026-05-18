// import React from "react";
// import { motion } from "framer-motion";

// const process = [
//   {
//     year: "2022",
//     title: "Discover",
//     desc: "Site assessment, scoping & feasibility.",
//     color: "from-green-500 to-lime-400",
//     dot: "bg-green-500",
//   },
//   {
//     year: "2023",
//     title: "Engineer",
//     desc: "BIM models, calculations & approvals.",
//     color: "from-lime-400 to-yellow-400",
//     dot: "bg-lime-400",
//   },
//   {
//     year: "2024",
//     title: "Fabricate",
//     desc: "Automated manufacturing & QA gates.",
//     color: "from-yellow-400 to-orange-400",
//     dot: "bg-yellow-400",
//   },
//   {
//     year: "2025",
//     title: "Execute",
//     desc: "On-site assembly, commissioning & handover.",
//     color: "from-orange-400 to-red-500",
//     dot: "bg-orange-500",
//   },
//   {
//     year: "2026",
//     title: "Deliver",
//     desc: "Final delivery with quality assurance.",
//     color: "from-red-500 to-rose-600",
//     dot: "bg-red-500",
//   },
// ];

// const ProcessTimeline = () => {
//   return (
//     <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#f8fafc] to-white">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
//             Process Timeline
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
//             A Clear Path From <br />
//             <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
//               Concept To Completion
//             </span>
//           </h2>
//         </div>

//         {/* Timeline */}
//         <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">

//           {/* Main Line */}
//           <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-5 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 shadow-lg" />

//           {process.map((item, i) => (
//             <motion.div
//               key={item.year}
//               initial={{ opacity: 0, y: 70 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.12 }}
//               viewport={{ once: true }}
//               className={`relative flex flex-col items-center ${
//                 i % 2 === 0 ? "lg:-mt-36" : "lg:mt-36"
//               }`}
//             >

//               {/* Dot */}
//               <div
//                 className={`absolute ${
//                   i % 2 === 0 ? "bottom-[-55px]" : "top-[-55px]"
//                 } w-7 h-7 rounded-full border-[6px] border-white shadow-xl ${item.dot}`}
//               />

//               {/* Dotted Connector */}
//               <div
//                 className={`absolute ${
//                   i % 2 === 0
//                     ? "bottom-[-38px] h-10"
//                     : "top-[-38px] h-10"
//                 } border-l-2 border-dashed border-slate-400`}
//               />

//               {/* Hexagon Card */}
//               <div className="relative w-[210px] h-[185px]">
                
//                 {/* Shadow */}
//                 <div className="absolute inset-0 bg-black/10 blur-xl rounded-[40px]" />

//                 {/* Hexagon */}
//                 <div
//                   className="absolute inset-0 bg-white shadow-2xl border border-slate-200"
//                   style={{
//                     clipPath:
//                       "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
//                   }}
//                 />

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
//                   <h3
//                     className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
//                   >
//                     {item.year}
//                   </h3>

//                   <h4 className="mt-3 text-xl font-semibold text-slate-900">
//                     {item.title}
//                   </h4>

//                   <p className="mt-2 text-sm leading-6 text-slate-600">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessTimeline;



import React from "react";
import { motion } from "framer-motion";
import { 
  MagnifyingGlassIcon, 
  CpuChipIcon, 
  CubeIcon, 
  WrenchScrewdriverIcon, 
  RocketLaunchIcon 
} from "@heroicons/react/24/solid";

const process = [
  {
    title: "Discover",
    desc: "Site assessment, scoping & feasibility.",
    color: "from-green-500 to-lime-400",
    dot: "bg-green-500",
    icon: MagnifyingGlassIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Engineer",
    desc: "BIM models, calculations & approvals.",
    color: "from-lime-400 to-yellow-400",
    dot: "bg-lime-400",
    icon: CpuChipIcon,
    iconBg: "bg-lime-100",
    iconColor: "text-lime-600",
  },
  {
    title: "Fabricate",
    desc: "Automated manufacturing & QA gates.",
    color: "from-yellow-400 to-orange-400",
    dot: "bg-yellow-400",
    icon: CubeIcon,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Execute",
    desc: "On-site assembly, commissioning & handover.",
    color: "from-orange-400 to-red-500",
    dot: "bg-orange-500",
    icon: WrenchScrewdriverIcon,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Deliver",
    desc: "Final delivery with quality assurance.",
    color: "from-red-500 to-rose-600",
    dot: "bg-red-500",
    icon: RocketLaunchIcon,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Process Timeline
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            A Clear Path From <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Concept To Completion
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">

          {/* Main Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-5 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 shadow-lg" />

          {process.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center ${
                i % 2 === 0 ? "lg:-mt-36" : "lg:mt-36"
              }`}
            >

              {/* Dot */}
              <div
                className={`absolute ${
                  i % 2 === 0 ? "bottom-[-55px]" : "top-[-55px]"
                } w-7 h-7 rounded-full border-[6px] border-white shadow-xl ${item.dot}`}
              />

              {/* Dotted Connector */}
              <div
                className={`absolute ${
                  i % 2 === 0
                    ? "bottom-[-38px] h-10"
                    : "top-[-38px] h-10"
                } border-l-2 border-dashed border-slate-400`}
              />

              {/* Hexagon Card */}
              <div className="relative w-[210px] h-[185px]">
                
                {/* Shadow */}
                <div className="absolute inset-0 bg-black/10 blur-xl rounded-[40px]" />

                {/* Hexagon */}
                <div
                  className="absolute inset-0 bg-white shadow-2xl border border-slate-200"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  {/* Icon */}
                  <div className={`mb-2 p-2 rounded-xl ${item.iconBg}`}>
                    <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>

                  <h4 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;