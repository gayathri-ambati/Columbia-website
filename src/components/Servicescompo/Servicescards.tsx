// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Cog,
//   Layers,
//   Factory,
//   Hammer,
//   Sparkles,
//   Shield,
//  ArrowRight,
// } from "lucide-react";

// const services = [
//   {
//     i: Cog,
//     t: "Fabrication Job Worker",
//     d: "We undertake Steel Conversion work.",
//     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     i: Layers,
//     t: "Structural Engineering",
//     d: "Advanced BIM-driven engineering solutions with complete compliance and analysis.",
//     img: "https://i.pinimg.com/736x/63/ef/b0/63efb0b68c36d0c385c93cb0a36518d1.jpg",
//   },
//   {
//     i: Factory,
//     t: "Industrial Construction",
//     d: "End-to-end industrial construction with seamless project delivery and execution.",
//     img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     i: Hammer,
//     t: "Project Execution",
//     d: "Efficient execution workflows ensuring timelines, safety, and operational excellence.",
//     img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     i: Sparkles,
//     t: "Design Consultancy",
//     d: "Creative and cost-effective engineering consultancy from concept to commissioning.",
//     img: "https://i.pinimg.com/1200x/b3/75/9f/b3759f9a660736ed2fc6185442ee2010.jpg",
//   },
//   {
//     i: Shield,
//     t: "Installation Services",
//     d: "Professional installation teams delivering precision and reliability on every site.",
//     img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// const Servicescards = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
//             Our Services
//           </span>

//           <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//             Engineering Excellence <br />
//             Built For Modern Industry
//           </h1>

//           <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
//             Delivering world-class steel fabrication, structural engineering,
//             industrial construction, and turnkey execution solutions with
//             innovation and precision.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//           {services.map((s, i) => (
//             <motion.div
//               key={s.t}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//               className="group relative overflow-hidden rounded-[30px] h-[460px] shadow-xl"
//             >
//               {/* Background Image */}
//               <img
//                 src={s.img}
//                 alt={s.t}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition duration-500" />

//               {/* Top Gradient */}
//               <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

//               {/* Bottom Sliding Content */}
//               <div className="absolute bottom-0 left-0 w-full min-h-[58%] bg-white/95 backdrop-blur-xl p-6 rounded-t-[28px] transform translate-y-[120px] group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-start">

//                 {/* Icon */}
//                 <div className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500 text-white shadow-[0_18px_35px_-12px_rgba(37,99,235,.55)]">
//                   <s.i className="w-7 h-7" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-5 text-2xl font-bold text-slate-900">
//                   {s.t}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-4">
//                   {s.d}
//                 </p>

//                 {/* Learn More */}
//                 {/* <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 group-hover:gap-3 transition-all">
//                   Learn More
//                   <ArrowRight className="w-4 h-4" />
//                 </button> */}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Servicescards;







import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import steelconversation1 from "@/assets/steelconversation1.jpg";
import steelconversation2 from "@/assets/steelconversation2.jpg";
import steelconversation3 from "@/assets/steelconversation3.jpg";

import {
  Cog,
  Layers,
  Factory,
  Hammer,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";


interface Service {
  i: React.ElementType;
  t: string;
  d: string;
  img?: string;
  images?: string[];
}

interface ImageSlideshowProps {
  images: string[];
}

const services: Service[] = [
  {
    i: Cog,
    t: "Fabrication Job Worker",
    d: "We undertake Steel Conversion work.",
    images: [
      steelconversation1,
     steelconversation2,
     steelconversation3,
    ],
  },
  {
    i: Layers,
    t: "Structural Engineering",
    d: "Advanced BIM-driven engineering solutions with complete compliance and analysis.",
    img: "https://i.pinimg.com/736x/63/ef/b0/63efb0b68c36d0c385c93cb0a36518d1.jpg",
  },
  {
    i: Factory,
    t: "Industrial Construction",
    d: "End-to-end industrial construction with seamless project delivery and execution.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    i: Hammer,
    t: "Project Execution",
    d: "Efficient execution workflows ensuring timelines, safety, and operational excellence.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
  },
  {
    i: Sparkles,
    t: "Design Consultancy",
    d: "Creative and cost-effective engineering consultancy from concept to commissioning.",
    img: "https://i.pinimg.com/1200x/b3/75/9f/b3759f9a660736ed2fc6185442ee2010.jpg",
  },
  {
    i: Shield,
    t: "Installation Services",
    d: "Professional installation teams delivering precision and reliability on every site.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
  },
];

// Slideshow component for Fabrication card
const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((img: string, index: number) => (
        <img
          key={index}
          src={img}
          alt={`Fabrication ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

const Servicescards: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
            Our Services
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Engineering Excellence <br />
            Built For Modern Industry
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            Delivering world-class steel fabrication, structural engineering,
            industrial construction, and turnkey execution solutions with
            innovation and precision.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s: Service, index: number) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[30px] h-[460px] shadow-xl"
            >
              {/* Background Image - For cards with single image */}
              {s.img && (
                <img
                  src={s.img}
                  alt={s.t}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Slideshow - For Fabrication card with multiple images */}
              {s.images && <ImageSlideshow images={s.images} />}

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition duration-500" />

              {/* Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

              {/* Bottom Sliding Content */}
              <div className="absolute bottom-0 left-0 w-full min-h-[58%] bg-white/95 backdrop-blur-xl p-6 rounded-t-[28px] transform translate-y-[120px] group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-start">

                {/* Icon */}
                <div className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500 text-white shadow-[0_18px_35px_-12px_rgba(37,99,235,.55)]">
                  <s.i className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {s.t}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-4">
                  {s.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicescards;