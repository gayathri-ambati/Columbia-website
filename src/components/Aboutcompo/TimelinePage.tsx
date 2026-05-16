// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Pencil,
//   Monitor,
//   Search,
//   User,
//   Settings,
// } from "lucide-react";

// const milestones = [
//   {
//     year: "1997",
//     title: "Founded in Pune",
//     desc: "Started as a small fabrication unit with a focus on civil structurals.",
//     icon: <Settings size={28} />,
//     color: "bg-orange-400",
//     position: "right",
//   },
//   {
//     year: "2005",
//     title: "First PEB Plant",
//     desc: "Commissioned India's first automated PEB line in our region.",
//     icon: <Pencil size={28} />,
//     color: "bg-cyan-400",
//     position: "left",
//   },
//   {
//     year: "2012",
//     title: "ISO 9001 + ASTM",
//     desc: "Achieved international quality certifications and ASTM compliance.",
//     icon: <Monitor size={28} />,
//     color: "bg-blue-400",
//     position: "right",
//   },
//   {
//     year: "2018",
//     title: "Robotic Fabrication",
//     desc: "Deployed robotic welding cells & CNC plate processing lines.",
//     icon: <Search size={28} />,
//     color: "bg-pink-500",
//     position: "left",
//   },
//   {
//     year: "2023",
//     title: "Global Expansion",
//     desc: "Active projects across the Middle East, Africa, and SE Asia.",
//     icon: <User size={28} />,
//     color: "bg-purple-600",
//     position: "right",
//   },
// ];

// const TimelinePage = () => {
//   return (
//     <section className="py-24 bg-[#ececec] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Timeline Title */}
//         <div className="flex justify-center mb-20">
//           <div className="bg-[#2c2c2c] text-white px-10 py-3 rounded-2xl shadow-lg">
//             <h2 className="text-3xl font-extrabold tracking-wide">
//               TIMELINE
//             </h2>
//           </div>
//         </div>

//         {/* Timeline Container */}
//         <div className="relative">

//           {/* Curved Line */}
//         <svg
//   className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block"
//   width="260"
//   height="1300"
//   viewBox="0 0 220 1100"
//   fill="none"
// >
//   <path
//     d="
//       M110 0
      
//       C110 100, 20 120, 20 220
//       C20 340, 190 350, 190 470
      
//       C190 590, 30 610, 30 730
//       C30 850, 180 870, 180 980
      
//       C180 1040, 110 1060, 110 1100
//     "
//     stroke="#2d2d2d"
//     strokeWidth="5"
//     fill="none"
//     strokeLinecap="round"
//   />
//         </svg>

//           {/* Timeline Items */}
//           <div className="space-y-24 relative z-10">
//             {milestones.map((m, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className={`relative flex items-center ${
//                   m.position === "left"
//                     ? "justify-start"
//                     : "justify-end"
//                 }`}
//               >

//                 {/* Card */}
//                 <div className="relative w-full md:w-[420px]">

//                   <div className="bg-white rounded-full shadow-xl px-8 py-6 relative flex items-center">

//                     {/* Icon Circle */}
//                     <div
//                       className={`absolute ${
//                         m.position === "left"
//                           ? "-right-6"
//                           : "-left-6"
//                       } w-24 h-24 rounded-full ${m.color} shadow-lg flex items-center justify-center text-white border-[6px] border-white`}
//                     >
//                       {m.icon}
//                     </div>

//                     {/* Content */}
//                     <div
//                       className={`${
//                         m.position === "left"
//                           ? "pr-20"
//                           : "pl-20"
//                       }`}
//                     >
//                       <h3 className="text-3xl font-extrabold text-[#2d2d2d] uppercase tracking-wide">
//                         {m.year}
//                       </h3>

//                       <h4 className="mt-2 text-xl font-bold text-[#3a3a3a]">
//                         {m.title}
//                       </h4>

//                       <p className="mt-3 text-gray-500 text-sm leading-relaxed">
//                         {m.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Center Dot */}
//                 <div
//                   className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${m.color} border-[5px] border-[#2d2d2d] z-20`}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TimelinePage;




// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Pencil,
//   Monitor,
//  Search,
//   User,
//   Settings,
// } from "lucide-react";

// const milestones = [
//   {
//     y: "1997",
//     t: "Founded in Pune",
//     d: "Started as a small fabrication unit with a focus on civil structurals.",
//     icon: <Settings size={28} />,
//     color: "from-orange-400 to-orange-500",
//     position: "right",
//   },
//   {
//     y: "2005",
//     t: "First PEB Plant",
//     d: "Commissioned India's first automated PEB line in our region.",
//     icon: <Pencil size={28} />,
//     color: "from-cyan-400 to-sky-500",
//     position: "left",
//   },
//   {
//     y: "2012",
//     t: "ISO 9001 + ASTM",
//     d: "Achieved international quality certifications and ASTM compliance.",
//     icon: <Monitor size={28} />,
//     color: "from-blue-400 to-indigo-500",
//     position: "right",
//   },
//   {
//     y: "2018",
//     t: "Robotic Fabrication",
//     d: "Deployed robotic welding cells & CNC plate processing lines.",
//     icon: <Search size={28} />,
//     color: "from-pink-400 to-rose-500",
//     position: "left",
//   },
//   {
//     y: "2023",
//     t: "Global Expansion",
//     d: "Active projects across the Middle East, Africa, and SE Asia.",
//     icon: <User size={28} />,
//     color: "from-violet-500 to-purple-600",
//     position: "right",
//   },
// ];

// const TimelinePage = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Heading */}
//         <div className="max-w-2xl mx-auto text-center mb-20">
//           <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
//             Timeline
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
//             Milestones that{" "}
//             <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
//               shaped us
//             </span>
//           </h2>

//           <p className="mt-5 text-slate-600 text-lg leading-relaxed">
//             Our journey of innovation, engineering excellence, and continuous
//             transformation across industries and global markets.
//           </p>
//         </div>

//         {/* Timeline Container */}
//         <div className="relative">

//           {/* Curved Line */}
//           <svg
//             className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block"
//             width="260"
//             height="1450"
//             viewBox="0 0 220 1100"
//             fill="none"
//           >
//             <path
//               d="
//                 M110 0
                
//                 C110 100, 20 120, 20 220
//                 C20 340, 190 350, 190 470
                
//                 C190 590, 30 610, 30 730
//                 C30 850, 180 870, 180 980
                
//                 C180 1040, 110 1060, 110 1100
//               "
//               stroke="url(#gradientLine)"
//               strokeWidth="5"
//               fill="none"
//               strokeLinecap="round"
//             />

//             <defs>
//               <linearGradient
//                 id="gradientLine"
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="1"
//               >
//                 <stop offset="0%" stopColor="#22d3ee" />
//                 <stop offset="50%" stopColor="#3b82f6" />
//                 <stop offset="100%" stopColor="#8b5cf6" />
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* Timeline Items */}
//           <div className="space-y-24 relative z-10">
//             {milestones.map((m, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className={`relative flex items-center ${
//                   m.position === "left"
//                     ? "justify-start"
//                     : "justify-end"
//                 }`}
//               >

//                 {/* Card */}
//                 <div className="relative w-full md:w-[430px]">

//                   <div className="rounded-full border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-8 py-6 relative flex items-center hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-all duration-500">

//                     {/* Icon Circle */}
//                     <div
//                       className={`absolute ${
//                         m.position === "left"
//                           ? "-right-6"
//                           : "-left-6"
//                       } w-24 h-24 rounded-full bg-gradient-to-br ${m.color} shadow-xl flex items-center justify-center text-white border-[6px] border-white`}
//                     >
//                       {m.icon}
//                     </div>

//                     {/* Content */}
//                     <div
//                       className={`${
//                         m.position === "left"
//                           ? "pr-20"
//                           : "pl-20"
//                       }`}
//                     >
//                       <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-wide">
//                         {m.y}
//                       </h3>

//                       <h4 className="mt-2 text-xl font-bold text-slate-900">
//                         {m.t}
//                       </h4>

//                       <p className="mt-3 text-slate-600 text-sm leading-relaxed">
//                         {m.d}
//                       </p>

//                       <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Center Dot */}
//                 <div
//                   className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r ${m.color} border-[5px] border-white shadow-lg z-20`}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TimelinePage;





import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    y: "1997",
    t: "Founded in Pune",
    d: "Started as a small fabrication unit with a focus on civil structurals.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    color: "from-orange-400 to-orange-500",
    position: "right",
  },
  {
    y: "2005",
    t: "First PEB Plant",
    d: "Commissioned India's first automated PEB line in our region.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    color: "from-cyan-400 to-sky-500",
    position: "left",
  },
  {
    y: "2012",
    t: "ISO 9001 + ASTM",
    d: "Achieved international quality certifications and ASTM compliance.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    color: "from-blue-400 to-indigo-500",
    position: "right",
  },
  {
    y: "2018",
    t: "Robotic Fabrication",
    d: "Deployed robotic welding cells & CNC plate processing lines.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    color: "from-pink-400 to-rose-500",
    position: "left",
  },
  {
    y: "2023",
    t: "Global Expansion",
    d: "Active projects across the Middle East, Africa, and SE Asia.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    color: "from-violet-500 to-purple-600",
    position: "right",
  },
];

const TimelinePage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
            Timeline
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Milestones that{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              shaped us
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Our journey of innovation, engineering excellence, and continuous
            transformation across industries and global markets.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Curved Line */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block"
            width="260"
            height="1450"
            viewBox="0 0 220 1100"
            fill="none"
          >
            <path
              d="
                M110 0
                
                C110 100, 20 120, 20 220
                C20 340, 190 350, 190 470
                
                C190 590, 30 610, 30 730
                C30 850, 180 870, 180 980
                
                C180 1040, 110 1060, 110 1100
              "
              stroke="url(#gradientLine)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient
                id="gradientLine"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline Items */}
          <div className="space-y-24 relative z-10">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${
                  m.position === "left"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                {/* Card */}
                <div className="relative w-full md:w-[430px]">

                  <div className="rounded-full border border-[#d9f3f0] bg-[#effcf9] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-8 py-6 relative flex items-center hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.10)] transition-all duration-500">

                    {/* Image Circle */}
                    <div
                      className={`absolute ${
                        m.position === "left"
                          ? "-right-6"
                          : "-left-6"
                      } w-24 h-24 rounded-full bg-gradient-to-br ${m.color} shadow-xl border-[6px] border-white overflow-hidden`}
                    >
                      <img
                        src={m.img}
                        alt={m.t}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay */}
                      {/* <div
                        className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-30`}
                      /> */}
                    </div>

                    {/* Content */}
                    <div
                      className={`${
                        m.position === "left"
                          ? "pr-20"
                          : "pl-20"
                      }`}
                    >
                      <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-wide">
                        {m.y}
                      </h3>

                      <h4 className="mt-2 text-xl font-bold text-slate-900">
                        {m.t}
                      </h4>

                      <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                        {m.d}
                      </p>

                      <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div
                  className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r ${m.color} border-[5px] border-white shadow-lg z-20`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelinePage;