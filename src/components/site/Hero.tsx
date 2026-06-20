// // import { Link } from "@tanstack/react-router";
// // import { motion } from "framer-motion";
// // import { ArrowRight, ChevronRight, Zap, CheckCircle2 } from "lucide-react";
// // import heroImg from "@/assets/hero-factory.jpg";
// // import { Counter } from "@/components/site/Counter";

// // const stats = [
// //   { v: 28, s: "+", l: "Years of Engineering" },
// //   { v: 1200, s: "+", l: "Projects Delivered" },
// //   { v: 65000, s: "T", l: "Annual Steel Output" },
// //   { v: 42, s: "", l: "Countries Served" },
// // ];

// // export default function Hero() {
// //   return (
// //     <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
// //       <div className="aurora absolute inset-0 -z-10" />
// //       <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />
      
// //       {/* Floating particles */}
// //       <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
// //         {[...Array(14)].map((_, i) => (
// //           <span
// //             key={i}
// //             className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
// //             style={{
// //               top: `${(i * 53) % 90 + 5}%`,
// //               left: `${(i * 37) % 95 + 2}%`,
// //               width: `${4 + (i % 4) * 2}px`,
// //               height: `${4 + (i % 4) * 2}px`,
// //               animationDelay: `${(i % 6) * 0.6}s`,
// //               animationDuration: `${5 + (i % 5)}s`,
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }} 
// //           animate={{ opacity: 1, y: 0 }} 
// //           transition={{ duration: 0.8 }} 
// //           className="lg:col-span-7"
// //         >
// //           <span className="chip">
// //             <span className="w-1.5 h-1.5 rounded-full bg-[--energy]" /> 
// //             Precision · Strength · Innovation
// //           </span>
// //           <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
// //             Engineering Strength.
// //             <br />
// //             Building the <span className="text-gradient">Future</span> with Precision.
// //           </h1>
// //           <p className="mt-6 text-lg text-muted-foreground max-w-xl">
// //             World-class steel manufacturing and civil engineering solutions driven by
// //             innovation, trust, and engineering excellence across continents.
// //           </p>
// //           <div className="mt-8 flex flex-wrap gap-3">
// //             <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
// //               Get a Quote <ArrowRight className="w-4 h-4" />
// //             </Link>
// //             <Link to="/projects" className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
// //               Explore Projects <ChevronRight className="w-4 h-4" />
// //             </Link>
// //           </div>
// //           <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
// //             {stats.map((s) => (
// //               <div key={s.l} className="glass rounded-xl px-4 py-4">
// //                 <div className="text-2xl sm:text-3xl font-display font-bold text-[--brand-deep]">
// //                   <Counter to={s.v} suffix={s.s} />
// //                 </div>
// //                 <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         <motion.div 
// //           initial={{ opacity: 0, scale: 0.95 }} 
// //           animate={{ opacity: 1, scale: 1 }} 
// //           transition={{ duration: 0.9, delay: 0.15 }} 
// //           className="lg:col-span-5 relative"
// //         >
// //           <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
// //             <img src={heroImg} alt="Steel fabrication facility" className="w-full h-full object-cover" width={1920} height={1280} />
// //             <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
            
// //             <div className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs animate-float">
// //               <div className="flex items-center gap-2 text-[--brand-deep] font-semibold">
// //                 <Zap className="w-4 h-4" /> Live · Bay 4
// //               </div>
// //               <div className="mt-1 text-muted-foreground">Robotic weld cell · 99.4% uptime</div>
// //             </div>
            
// //             <div className="absolute -right-4 bottom-8 glass rounded-2xl px-4 py-3 text-xs animate-float" style={{ animationDelay: "1.2s" }}>
// //               <div className="flex items-center gap-2 text-[--trust] font-semibold">
// //                 <CheckCircle2 className="w-4 h-4" /> ISO 9001 · Verified
// //               </div>
// //               <div className="mt-1 text-muted-foreground">Batch #EPS-2451 cleared QC</div>
// //             </div>
// //           </div>
          
// //           <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
// //             <div className="w-px h-12 bg-gradient-to-b from-[--brand] to-transparent" />
// //             Scroll
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// // import { useState, useEffect } from "react";
// // import { Link } from "@tanstack/react-router";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ArrowRight, ChevronRight, Zap, CheckCircle2, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
// // import heroImg1 from "@/assets/hero-factory.jpg";
// // import heroImg2 from "@/assets/factory-aerial.jpg";
// // import heroImg3 from "@/assets/project-peb.jpg";
// // import { Counter } from "@/components/site/Counter";

// // const slides = [
// //   {
// //     image: heroImg1,
// //     badge: { icon: Zap, text: "Live · Bay 4", subtext: "Robotic weld cell · 99.4% uptime" }
// //   },
// //   {
// //     image: heroImg2,
// //     badge: { icon: CheckCircle2, text: "ISO 9001 · Verified", subtext: "Batch #EPS-2451 cleared QC" }
// //   },
// //   {
// //     image: heroImg3,
// //     badge: { icon: Zap, text: "Production Peak", subtext: "65K tons annual capacity" }
// //   },
// // ];

// // const stats = [
// //   { v: 28, s: "+", l: "Years of Engineering" },
// //   { v: 1200, s: "+", l: "Projects Delivered" },
// //   { v: 65000, s: "T", l: "Annual Steel Output" },
// //   { v: 42, s: "", l: "Countries Served" },
// // ];

// // export default function Hero() {
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   // Animation variants with proper easing types
// //   const imageVariants = {
// //     enter: {
// //       opacity: 0,
// //       scale: 1.1,
// //     },
// //     center: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeOut" as const,
// //       },
// //     },
// //     exit: {
// //       opacity: 0,
// //       scale: 0.95,
// //       transition: {
// //         duration: 0.4,
// //         ease: "easeIn" as const,
// //       },
// //     },
// //   };

// //   const badgeVariants = {
// //     initial: { opacity: 0, x: -20 },
// //     animate: { opacity: 1, x: 0 },
// //     exit: { opacity: 0, x: -20 },
// //   };

// //   return (
// //     <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
// //       <div className="aurora absolute inset-0 -z-10" />
// //       <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />

// //       {/* Floating particles */}
// //       <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
// //         {[...Array(14)].map((_, i) => (
// //           <span
// //             key={i}
// //             className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
// //             style={{
// //               top: `${(i * 53) % 90 + 5}%`,
// //               left: `${(i * 37) % 95 + 2}%`,
// //               width: `${4 + (i % 4) * 2}px`,
// //               height: `${4 + (i % 4) * 2}px`,
// //               animationDelay: `${(i % 6) * 0.6}s`,
// //               animationDuration: `${5 + (i % 5)}s`,
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
// //         {/* Left Column - Static Content */}
// //         <div className="lg:col-span-7">
// //           <span className="chip">
// //             <span className="w-1.5 h-1.5 rounded-full bg-[--energy]" />
// //             Precision · Strength · Innovation
// //           </span>
// //           <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
// //             Engineering Strength.
// //             <br />
// //             Building the <span className="text-gradient">Future</span> with Precision.
// //           </h1>
// //           <p className="mt-6 text-lg text-muted-foreground max-w-xl">
// //             World-class steel manufacturing and civil engineering solutions driven by
// //             innovation, trust, and engineering excellence across continents.
// //           </p>
// //           <div className="mt-8 flex flex-wrap gap-3">
// //             <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
// //               Get a Quote <ArrowRight className="w-4 h-4" />
// //             </Link>
// //             <Link to="/projects" className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
// //               Explore Projects <ChevronRight className="w-4 h-4" />
// //             </Link>
// //           </div>
// //           <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
// //             {stats.map((s) => (
// //               <div key={s.l} className="glass rounded-xl px-4 py-4">
// //                 <div className="text-2xl sm:text-3xl font-display font-bold text-[--brand-deep]">
// //                   <Counter to={s.v} suffix={s.s} />
// //                 </div>
// //                 <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right Column - Carousel Image */}
// //         <div className="lg:col-span-5 relative">
// //           <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
// //             <AnimatePresence mode="wait">
// //               <motion.img
// //                 key={currentSlide}
// //                 src={slides[currentSlide].image}
// //                 variants={imageVariants}
// //                 initial="enter"
// //                 animate="center"
// //                 exit="exit"
// //                 className="absolute inset-0 w-full h-full object-cover"
// //                 alt={`Slide ${currentSlide + 1}`}
// //               />
// //             </AnimatePresence>
            
// //             <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
            
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={`badge-${currentSlide}`}
// //                 variants={badgeVariants}
// //                 initial="initial"
// //                 animate="animate"
// //                 exit="exit"
// //                 transition={{ duration: 0.4 }}
// //                 className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs z-10"
// //               >
// //                 <div className="flex items-center gap-2 text-[--brand-deep] font-semibold">
// //                   {(() => {
// //                     const BadgeIcon = slides[currentSlide].badge.icon;
// //                     return <BadgeIcon className="w-4 h-4" />;
// //                   })()}
// //                   {slides[currentSlide].badge.text}
// //                 </div>
// //                 <div className="mt-1 text-muted-foreground">{slides[currentSlide].badge.subtext}</div>
// //               </motion.div>
// //             </AnimatePresence>

// //             {/* Navigation Arrows */}
// //             <button
// //               onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
// //               className="absolute left-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
// //               aria-label="Previous slide"
// //             >
// //               <ChevronLeft className="w-5 h-5 text-[--brand-deep]" />
// //             </button>
            
// //             <button
// //               onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
// //               className="absolute right-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
// //               aria-label="Next slide"
// //             >
// //               <ChevronRightIcon className="w-5 h-5 text-[--brand-deep]" />
// //             </button>

// //             {/* Dots Indicator */}
// //             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //               {slides.map((_, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => setCurrentSlide(idx)}
// //                   className={`transition-all rounded-full ${
// //                     idx === currentSlide 
// //                       ? "w-6 h-2 bg-[--brand-deep]" 
// //                       : "w-2 h-2 bg-white/50 hover:bg-white/80"
// //                   }`}
// //                   aria-label={`Go to slide ${idx + 1}`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Scroll indicator */}
// //           <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
// //             <div className="w-px h-12 bg-gradient-to-b from-[--brand] to-transparent" />
// //             Scroll
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }





// // import { useState, useEffect } from "react";
// // import { Link } from "@tanstack/react-router";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ArrowRight, ChevronRight, Zap, CheckCircle2, ChevronLeft, ChevronRight as ChevronRightIcon, Factory, Globe, Shield } from "lucide-react";
// // import heroImg1 from "@/assets/hero-factory.jpg";
// // import heroImg2 from "@/assets/factory-aerial.jpg";
// // import heroImg3 from "@/assets/project-peb.jpg";
// // import { Counter } from "@/components/site/Counter";

// // const slides = [
// //   {
// //     id: 1,
// //     title: "Engineering Strength.",
// //     subtitle: "Building the Future with Precision.",
// //     description: "World-class steel manufacturing and civil engineering solutions driven by innovation, trust, and engineering excellence across continents.",
// //     image: heroImg1,
// //     chip: "Precision · Strength · Innovation",
// //     chipIcon: Zap,
// //     cta1: { text: "Get a Quote", link: "/contact", icon: ArrowRight },
// //     cta2: { text: "Explore Projects", link: "/projects", icon: ChevronRight },
// //     badge: { 
// //       icon: Zap, 
// //       text: "Live · Bay 4", 
// //       subtext: "Robotic weld cell · 99.4% uptime",
// //       color: "brand-deep"
// //     },
// //     stats: [
// //       { v: 28, s: "+", l: "Years of Engineering" },
// //       { v: 1200, s: "+", l: "Projects Delivered" },
// //       { v: 65000, s: "T", l: "Annual Steel Output" },
// //       { v: 42, s: "", l: "Countries Served" },
// //     ]
// //   },
// //   {
// //     id: 2,
// //     title: "Industrial Evolution.",
// //     subtitle: "Powered by Advanced Manufacturing.",
// //     description: "State-of-the-art robotic welding, CNC plasma cutting, and automated fabrication lines delivering precision at scale with ISO-certified processes.",
// //     image: heroImg2,
// //     chip: "Innovation · Automation · Scale",
// //     chipIcon: Factory,
// //     cta1: { text: "Our Facility", link: "/manufacturing", icon: ArrowRight },
// //     cta2: { text: "View Capabilities", link: "/capabilities", icon: ChevronRight },
// //     badge: { 
// //       icon: Factory, 
// //       text: "Production Capacity", 
// //       subtext: "65,000 tons annually",
// //       color: "energy"
// //     },
// //     stats: [
// //       { v: 15, s: "+", l: "Robotic Weld Cells" },
// //       { v: 24, s: "/7", l: "Production Hours" },
// //       { v: 99.4, s: "%", l: "Uptime Rate" },
// //       { v: 420, s: "k", l: "Plant Area (sq.ft)" },
// //     ]
// //   },
// //   {
// //     id: 3,
// //     title: "Global Standards.",
// //     subtitle: "Engineering Trust Worldwide.",
// //     description: "ISO 9001, ISO 14001 & OHSAS 18001 certified processes delivering structural solutions across 42 countries with uncompromising quality and safety.",
// //     image: heroImg3,
// //     chip: "Quality · Safety · Global",
// //     chipIcon: Globe,
// //     cta1: { text: "Our Projects", link: "/projects", icon: ArrowRight },
// //     cta2: { text: "Certifications", link: "/certifications", icon: ChevronRight },
// //     badge: { 
// //       icon: Shield, 
// //       text: "ISO 9001 · Verified", 
// //       subtext: "Global quality standards",
// //       color: "trust"
// //     },
// //     stats: [
// //       { v: 28, s: "+", l: "Years of Excellence" },
// //       { v: 42, s: "", l: "Countries Served" },
// //       { v: 1200, s: "+", l: "Projects Delivered" },
// //       { v: 100, s: "%", l: "Client Satisfaction" },
// //     ]
// //   },
// // ];

// // export default function Hero() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [direction, setDirection] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setDirection(1);
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 7000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const handleNext = () => {
// //     setDirection(1);
// //     setCurrentSlide((prev) => (prev + 1) % slides.length);
// //   };

// //   const handlePrev = () => {
// //     setDirection(-1);
// //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// //   };

// //   const slideVariants = {
// //     enter: (direction: number) => ({
// //       x: direction > 0 ? 300 : -300,
// //       opacity: 0,
// //     }),
// //     center: {
// //       x: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.6,
// //         ease: "easeOut" as const,
// //       },
// //     },
// //     exit: (direction: number) => ({
// //       x: direction > 0 ? -300 : 300,
// //       opacity: 0,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeIn" as const,
// //       },
// //     }),
// //   };

// //   const imageVariants = {
// //     enter: {
// //       scale: 1.1,
// //       opacity: 0,
// //     },
// //     center: {
// //       scale: 1,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.7,
// //         ease: "easeOut" as const,
// //       },
// //     },
// //     exit: {
// //       scale: 0.95,
// //       opacity: 0,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeIn" as const,
// //       },
// //     },
// //   };

// //   const badgeVariants = {
// //     initial: { opacity: 0, x: -20 },
// //     animate: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } },
// //     exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
// //   };

// //   const statsVariants = {
// //     initial: { opacity: 0, y: 20 },
// //     animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
// //     exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
// //   };

// //   const CurrentCta1Icon = slides[currentSlide].cta1.icon;
// //   const CurrentCta2Icon = slides[currentSlide].cta2.icon;
// //   const CurrentBadgeIcon = slides[currentSlide].badge.icon;

// //   return (
// //     <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
// //       <div className="aurora absolute inset-0 -z-10" />
// //       <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />

// //       {/* Floating particles */}
// //       <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
// //         {[...Array(14)].map((_, i) => (
// //           <span
// //             key={i}
// //             className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
// //             style={{
// //               top: `${(i * 53) % 90 + 5}%`,
// //               left: `${(i * 37) % 95 + 2}%`,
// //               width: `${4 + (i % 4) * 2}px`,
// //               height: `${4 + (i % 4) * 2}px`,
// //               animationDelay: `${(i % 6) * 0.6}s`,
// //               animationDuration: `${5 + (i % 5)}s`,
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <div className="mx-auto max-w-7xl px-4">
// //         <div className="grid lg:grid-cols-12 gap-10 items-center">
// //           {/* Left Column - Content */}
// //           <div className="lg:col-span-7 relative min-h-[550px]">
// //             <AnimatePresence mode="wait" custom={direction}>
// //               <motion.div
// //                 key={currentSlide}
// //                 custom={direction}
// //                 variants={slideVariants}
// //                 initial="enter"
// //                 animate="center"
// //                 exit="exit"
// //                 className="absolute inset-0"
// //               >
// //                 {/* Chip */}
// //                 <div className="chip">
// //                   <span className="w-1.5 h-1.5 rounded-full bg-[--energy]" />
// //                   {slides[currentSlide].chip}
// //                 </div>

// //                 {/* Title */}
// //                 <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
// //                   {slides[currentSlide].title}
// //                   <br />
// //                   <span className="text-gradient">{slides[currentSlide].subtitle}</span>
// //                 </h1>

// //                 {/* Description */}
// //                 <p className="mt-6 text-lg text-muted-foreground max-w-xl">
// //                   {slides[currentSlide].description}
// //                 </p>

// //                 {/* CTA Buttons */}
// //                 <div className="mt-8 flex flex-wrap gap-3">
// //                   <Link 
// //                     to={slides[currentSlide].cta1.link} 
// //                     className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
// //                   >
// //                     {slides[currentSlide].cta1.text} 
// //                     <CurrentCta1Icon className="w-4 h-4" />
// //                   </Link>
// //                   <Link 
// //                     to={slides[currentSlide].cta2.link} 
// //                     className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
// //                   >
// //                     {slides[currentSlide].cta2.text} 
// //                     <CurrentCta2Icon className="w-4 h-4" />
// //                   </Link>
// //                 </div>

// //                 {/* Stats */}
// //                 <motion.div 
// //                   key={`stats-${currentSlide}`}
// //                   variants={statsVariants}
// //                   initial="initial"
// //                   animate="animate"
// //                   exit="exit"
// //                   className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
// //                 >
// //                   {slides[currentSlide].stats.map((s) => (
// //                     <div key={s.l} className="glass rounded-xl px-4 py-4">
// //                       <div className="text-2xl sm:text-3xl font-display font-bold text-[--brand-deep]">
// //                         <Counter to={s.v} suffix={s.s} />
// //                       </div>
// //                       <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
// //                     </div>
// //                   ))}
// //                 </motion.div>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>

// //           {/* Right Column - Image with Carousel */}
// //           <div className="lg:col-span-5 relative">
// //             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
// //               <AnimatePresence mode="wait">
// //                 <motion.img
// //                   key={currentSlide}
// //                   src={slides[currentSlide].image}
// //                   variants={imageVariants}
// //                   initial="enter"
// //                   animate="center"
// //                   exit="exit"
// //                   className="absolute inset-0 w-full h-full object-cover"
// //                   alt={`Slide ${currentSlide + 1}`}
// //                 />
// //               </AnimatePresence>
              
// //               <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
              
// //               {/* Floating Badge */}
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={`badge-${currentSlide}`}
// //                   variants={badgeVariants}
// //                   initial="initial"
// //                   animate="animate"
// //                   exit="exit"
// //                   className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs z-10"
// //                 >
// //                   <div className={`flex items-center gap-2 font-semibold text-[--${slides[currentSlide].badge.color}]`}>
// //                     <CurrentBadgeIcon className="w-4 h-4" />
// //                     {slides[currentSlide].badge.text}
// //                   </div>
// //                   <div className="mt-1 text-muted-foreground">{slides[currentSlide].badge.subtext}</div>
// //                 </motion.div>
// //               </AnimatePresence>

// //               {/* Navigation Arrows */}
// //               <button
// //                 onClick={handlePrev}
// //                 className="absolute left-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
// //                 aria-label="Previous slide"
// //               >
// //                 <ChevronLeft className="w-5 h-5 text-[--brand-deep]" />
// //               </button>
              
// //               <button
// //                 onClick={handleNext}
// //                 className="absolute right-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
// //                 aria-label="Next slide"
// //               >
// //                 <ChevronRightIcon className="w-5 h-5 text-[--brand-deep]" />
// //               </button>

// //               {/* Progress Bar */}
// //               <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
// //                 <motion.div
// //                   key={currentSlide}
// //                   initial={{ width: "0%" }}
// //                   animate={{ width: "100%" }}
// //                   transition={{ duration: 7, ease: "linear" }}
// //                   className="h-full bg-gradient-to-r from-[--brand] to-[--brand-sky]"
// //                 />
// //               </div>

// //               {/* Slide Indicators */}
// //               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //                 {slides.map((_, idx) => (
// //                   <button
// //                     key={idx}
// //                     onClick={() => {
// //                       setDirection(idx > currentSlide ? 1 : -1);
// //                       setCurrentSlide(idx);
// //                     }}
// //                     className={`transition-all rounded-full ${
// //                       idx === currentSlide 
// //                         ? "w-8 h-2 bg-[--brand-deep]" 
// //                         : "w-2 h-2 bg-white/50 hover:bg-white/80"
// //                     }`}
// //                     aria-label={`Go to slide ${idx + 1}`}
// //                   />
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Scroll indicator */}
// //             <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
// //               <div className="w-px h-12 bg-gradient-to-b from-[--brand] to-transparent" />
// //               Scroll
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// import { useState, useEffect } from "react";
// import { Link } from "@tanstack/react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, ChevronRight, Zap, CheckCircle2, ChevronLeft, ChevronRight as ChevronRightIcon, Factory, Globe, Shield } from "lucide-react";
// import heroImg1 from "@/assets/hero-factory.jpg";
// import heroImg2 from "@/assets/factory-aerial.jpg";
// import heroImg3 from "@/assets/project-peb.jpg";
// import { Counter } from "@/components/site/Counter";

// const slides = [
//   {
//     id: 1,
//     title: "Engineering Strength.",
//     subtitle: "Building the Future with Precision.",
//     description: "World-class steel manufacturing and civil engineering solutions driven by innovation, trust, and engineering excellence across continents.",
//     image: heroImg1,
//     chip: "Precision · Strength · Innovation",
//     chipIcon: Zap,
//     cta1: { text: "Get a Quote", link: "/contact", icon: ArrowRight },
//     cta2: { text: "Explore Projects", link: "/projects", icon: ChevronRight },
//     badge: { 
//       icon: Zap, 
//       text: "Live · Bay 4", 
//       subtext: "Robotic weld cell · 99.4% uptime",
//       color: "brand-deep"
//     },
//     stats: [
//       { v: 28, s: "+", l: "Years of Engineering" },
//       { v: 1200, s: "+", l: "Projects Delivered" },
//       { v: 65000, s: "T", l: "Annual Steel Output" },
//       { v: 42, s: "", l: "Countries Served" },
//     ]
//   },
//   {
//     id: 2,
//     title: "Industrial Evolution.",
//     subtitle: "Powered by Advanced Manufacturing.",
//     description: "State-of-the-art robotic welding, CNC plasma cutting, and automated fabrication lines delivering precision at scale with ISO-certified processes.",
//     image: heroImg2,
//     chip: "Innovation · Automation · Scale",
//     chipIcon: Factory,
//     cta1: { text: "Our Facility", link: "/manufacturing", icon: ArrowRight },
//     cta2: { text: "View Capabilities", link: "/capabilities", icon: ChevronRight },
//     badge: { 
//       icon: Factory, 
//       text: "Production Capacity", 
//       subtext: "65,000 tons annually",
//       color: "energy"
//     },
//     stats: [
//       { v: 15, s: "+", l: "Robotic Weld Cells" },
//       { v: 24, s: "/7", l: "Production Hours" },
//       { v: 99.4, s: "%", l: "Uptime Rate" },
//       { v: 420, s: "k", l: "Plant Area (sq.ft)" },
//     ]
//   },
//   {
//     id: 3,
//     title: "Global Standards.",
//     subtitle: "Engineering Trust Worldwide.",
//     description: "ISO 9001, ISO 14001 & OHSAS 18001 certified processes delivering structural solutions across 42 countries with uncompromising quality and safety.",
//     image: heroImg3,
//     chip: "Quality · Safety · Global",
//     chipIcon: Globe,
//     cta1: { text: "Our Projects", link: "/projects", icon: ArrowRight },
//     cta2: { text: "Certifications", link: "/certifications", icon: ChevronRight },
//     badge: { 
//       icon: Shield, 
//       text: "ISO 9001 · Verified", 
//       subtext: "Global quality standards",
//       color: "trust"
//     },
//     stats: [
//       { v: 28, s: "+", l: "Years of Excellence" },
//       { v: 42, s: "", l: "Countries Served" },
//       { v: 1200, s: "+", l: "Projects Delivered" },
//       { v: 100, s: "%", l: "Client Satisfaction" },
//     ]
//   },
// ];

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut" as const,
//       },
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeIn" as const,
//       },
//     }),
//   };

//   const imageVariants = {
//     enter: {
//       scale: 1.1,
//       opacity: 0,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut" as const,
//       },
//     },
//     exit: {
//       scale: 0.95,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeIn" as const,
//       },
//     },
//   };

//   const badgeVariants = {
//     initial: { opacity: 0, x: -20 },
//     animate: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } },
//     exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
//   };

//   const statsVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
//   };

//   const CurrentCta1Icon = slides[currentSlide].cta1.icon;
//   const CurrentCta2Icon = slides[currentSlide].cta2.icon;
//   const CurrentBadgeIcon = slides[currentSlide].badge.icon;

//   return (
//     <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
//       <div className="aurora absolute inset-0 -z-10" />
//       <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />

//       {/* Floating particles */}
//       <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
//         {[...Array(14)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
//             style={{
//               top: `${(i * 53) % 90 + 5}%`,
//               left: `${(i * 37) % 95 + 2}%`,
//               width: `${4 + (i % 4) * 2}px`,
//               height: `${4 + (i % 4) * 2}px`,
//               animationDelay: `${(i % 6) * 0.6}s`,
//               animationDuration: `${5 + (i % 5)}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid lg:grid-cols-12 gap-10 items-center">
//           {/* Left Column - Content */}
//           <div className="lg:col-span-7 relative min-h-[550px]">
//             {/* Left Side Arrow Button (outside content) */}
//             <button
//               onClick={handlePrev}
//               className="absolute -left-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6 text-[--brand-deep]" />
//             </button>

//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentSlide}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="absolute inset-0"
//               >
//                 {/* Chip */}
//                 <div className="chip">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[--energy]" />
//                   {slides[currentSlide].chip}
//                 </div>

//                 {/* Title */}
//                 <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
//                   {slides[currentSlide].title}
//                   <br />
//                   <span className="text-gradient">{slides[currentSlide].subtitle}</span>
//                 </h1>

//                 {/* Description */}
//                 <p className="mt-6 text-lg text-muted-foreground max-w-xl">
//                   {slides[currentSlide].description}
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className="mt-8 flex flex-wrap gap-3">
//                   <Link 
//                     to={slides[currentSlide].cta1.link} 
//                     className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
//                   >
//                     {slides[currentSlide].cta1.text} 
//                     <CurrentCta1Icon className="w-4 h-4" />
//                   </Link>
//                   <Link 
//                     to={slides[currentSlide].cta2.link} 
//                     className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
//                   >
//                     {slides[currentSlide].cta2.text} 
//                     <CurrentCta2Icon className="w-4 h-4" />
//                   </Link>
//                 </div>

//                 {/* Stats */}
//                 <motion.div 
//                   key={`stats-${currentSlide}`}
//                   variants={statsVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
//                 >
//                   {slides[currentSlide].stats.map((s) => (
//                     <div key={s.l} className="glass rounded-xl px-4 py-4">
//                       <div className="text-2xl sm:text-3xl font-display font-bold text-[--brand-deep]">
//                         <Counter to={s.v} suffix={s.s} />
//                       </div>
//                       <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right Column - Image with Carousel */}
//           <div className="lg:col-span-5 relative">
//             {/* Right Side Arrow Button (outside image) */}
//             <button
//               onClick={handleNext}
//               className="absolute -right-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
//               aria-label="Next slide"
//             >
//               <ChevronRightIcon className="w-6 h-6 text-[--brand-deep]" />
//             </button>

//             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={currentSlide}
//                   src={slides[currentSlide].image}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   className="absolute inset-0 w-full h-full object-cover"
//                   alt={`Slide ${currentSlide + 1}`}
//                 />
//               </AnimatePresence>
              
//               <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
              
//               {/* Floating Badge */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`badge-${currentSlide}`}
//                   variants={badgeVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs z-10"
//                 >
//                   <div className={`flex items-center gap-2 font-semibold text-[--${slides[currentSlide].badge.color}]`}>
//                     <CurrentBadgeIcon className="w-4 h-4" />
//                     {slides[currentSlide].badge.text}
//                   </div>
//                   <div className="mt-1 text-muted-foreground">{slides[currentSlide].badge.subtext}</div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Inner Navigation Arrows (on image for mobile) */}
//               <button
//                 onClick={handlePrev}
//                 className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5 text-[--brand-deep]" />
//               </button>
              
//               <button
//                 onClick={handleNext}
//                 className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
//                 aria-label="Next slide"
//               >
//                 <ChevronRightIcon className="w-5 h-5 text-[--brand-deep]" />
//               </button>

//               {/* Progress Bar */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 7, ease: "linear" }}
//                   className="h-full bg-gradient-to-r from-[--brand] to-[--brand-sky]"
//                 />
//               </div>

//               {/* Slide Indicators */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                 {slides.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setDirection(idx > currentSlide ? 1 : -1);
//                       setCurrentSlide(idx);
//                     }}
//                     className={`transition-all rounded-full ${
//                       idx === currentSlide 
//                         ? "w-8 h-2 bg-[--brand-deep]" 
//                         : "w-2 h-2 bg-white/50 hover:bg-white/80"
//                     }`}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Scroll indicator */}
//             {/* <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
//               <div className="w-px h-12 bg-gradient-to-b from-[--brand] to-transparent" />
//               Scroll
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import { useState, useEffect } from "react";
// import { Link } from "@tanstack/react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   ChevronRight,
//   Zap,
//   ChevronLeft,
//   ChevronRight as ChevronRightIcon,
//   Factory,
//   Globe,
//   Shield,
// } from "lucide-react";

// import heroImg1 from "@/assets/hero-factory.jpg";
// import heroImg2 from "@/assets/factory-aerial.jpg";
// import heroImg3 from "@/assets/project-peb.jpg";

// import { Counter } from "@/components/site/Counter";

// const slides = [
//   {
//     id: 1,
//     title: "Engineering Strength.",
//     subtitle: "Building the Future with Precision.",
//     description:
//       "World-class steel manufacturing and civil engineering solutions driven by innovation, trust, and engineering excellence across continents.",

//     image: heroImg1,

//     video:
//       "https://www.pexels.com/download/video/34470249/",

//     chip: "Precision · Strength · Innovation",

//     chipIcon: Zap,

//     cta1: {
//       text: "Get a Quote",
//       link: "/contact",
//       icon: ArrowRight,
//     },

//     cta2: {
//       text: "Explore Projects",
//       link: "/projects",
//       icon: ChevronRight,
//     },

//     badge: {
//       icon: Zap,
//       text: "Live · Bay 4",
//       subtext: "Robotic weld cell · 99.4% uptime",
//       color: "brand-deep",
//     },

//     stats: [
//       { v: 28, s: "+", l: "Years of Engineering" },
//       { v: 1200, s: "+", l: "Projects Delivered" },
//       { v: 65000, s: "T", l: "Annual Steel Output" },
//       { v: 42, s: "", l: "Countries Served" },
//     ],
//   },

//   {
//     id: 2,

//     title: "Industrial Evolution.",

//     subtitle: "Powered by Advanced Manufacturing.",

//     description:
//       "State-of-the-art robotic welding, CNC plasma cutting, and automated fabrication lines delivering precision at scale with ISO-certified processes.",

//     image: heroImg2,

//     video:
//       "https://www.pexels.com/download/video/35424375/",

//     chip: "Innovation · Automation · Scale",

//     chipIcon: Factory,

//     cta1: {
//       text: "Our Facility",
//       link: "/manufacturing",
//       icon: ArrowRight,
//     },

//     cta2: {
//       text: "View Capabilities",
//       link: "/capabilities",
//       icon: ChevronRight,
//     },

//     badge: {
//       icon: Factory,
//       text: "Production Capacity",
//       subtext: "65,000 tons annually",
//       color: "energy",
//     },

//     stats: [
//       { v: 15, s: "+", l: "Robotic Weld Cells" },
//       { v: 24, s: "/7", l: "Production Hours" },
//       { v: 99.4, s: "%", l: "Uptime Rate" },
//       { v: 420, s: "k", l: "Plant Area (sq.ft)" },
//     ],
//   },

//   {
//     id: 3,

//     title: "Global Standards.",

//     subtitle: "Engineering Trust Worldwide.",

//     description:
//       "Delivering Structural Solutions with un comprimising Quality and Safety",

//     image: heroImg3,

//     video:
//       "https://www.pexels.com/download/video/35552709/",

//     chip: "Quality · Safety · Global",

//     chipIcon: Globe,

//     cta1: {
//       text: "Our Projects",
//       link: "/projects",
//       icon: ArrowRight,
//     },

//     cta2: {
//       text: "Certifications",
//       link: "/certifications",
//       icon: ChevronRight,
//     },

//     badge: {
//       icon: Shield,
//       text: "ISO 9001 · Verified",
//       subtext: "Global quality standards",
//       color: "trust",
//     },

//     // stats: [
//     //   { v: 28, s: "+", l: "Years of Excellence" },
//     //   { v: 42, s: "", l: "Countries Served" },
//     //   { v: 1200, s: "+", l: "Projects Delivered" },
//     //   { v: 100, s: "%", l: "Client Satisfaction" },
//     // ],
//   },
// ];

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);

//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleNext = () => {
//     setDirection(1);

//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);

//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),

//     center: {
//       x: 0,
//       opacity: 1,

//       transition: {
//         duration: 0.6,
//         ease: "easeOut" as const,
//       },
//     },

//     exit: (direction: number) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,

//       transition: {
//         duration: 0.5,
//         ease: "easeIn" as const,
//       },
//     }),
//   };

//   const imageVariants = {
//     enter: {
//       scale: 1.1,
//       opacity: 0,
//     },

//     center: {
//       scale: 1,
//       opacity: 1,

//       transition: {
//         duration: 0.7,
//         ease: "easeOut" as const,
//       },
//     },

//     exit: {
//       scale: 0.95,
//       opacity: 0,

//       transition: {
//         duration: 0.5,
//         ease: "easeIn" as const,
//       },
//     },
//   };

//   const badgeVariants = {
//     initial: { opacity: 0, x: -20 },

//     animate: {
//       opacity: 1,
//       x: 0,

//       transition: {
//         duration: 0.4,
//         delay: 0.3,
//       },
//     },

//     exit: {
//       opacity: 0,
//       x: -20,

//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const statsVariants = {
//     initial: {
//       opacity: 0,
//       y: 20,
//     },

//     animate: {
//       opacity: 1,
//       y: 0,

//       transition: {
//         duration: 0.5,
//         delay: 0.4,
//       },
//     },

//     exit: {
//       opacity: 0,
//       y: -20,

//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const CurrentCta1Icon = slides[currentSlide].cta1.icon;
//   const CurrentCta2Icon = slides[currentSlide].cta2.icon;
//   const CurrentBadgeIcon = slides[currentSlide].badge.icon;

//   return (
//     <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
//       <div className="aurora absolute inset-0 -z-10" />

//       <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />

//       {/* Floating particles */}
//       <div
//         aria-hidden
//         className="absolute inset-0 -z-10 pointer-events-none"
//       >
//         {[...Array(14)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
//             style={{
//               top: `${(i * 53) % 90 + 5}%`,
//               left: `${(i * 37) % 95 + 2}%`,
//               width: `${4 + (i % 4) * 2}px`,
//               height: `${4 + (i % 4) * 2}px`,
//               animationDelay: `${(i % 6) * 0.6}s`,
//               animationDuration: `${5 + (i % 5)}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid lg:grid-cols-12 gap-10 items-center">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-7 relative min-h-[550px]">
//             <button
//               onClick={handlePrev}
//               className="absolute -left-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6 text-[--brand-deep]" />
//             </button>

//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentSlide}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="absolute inset-0"
//               >
//                 <div className="chip">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[--energy]" />
//                   {slides[currentSlide].chip}
//                 </div>

//                 <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
//                   {slides[currentSlide].title}

//                   <br />

//                   <span className="text-gradient">
//                     {slides[currentSlide].subtitle}
//                   </span>
//                 </h1>

//                 <p className="mt-6 text-lg text-muted-foreground max-w-xl">
//                   {slides[currentSlide].description}
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-3">
//                   <Link
//                     to={slides[currentSlide].cta1.link}
//                     className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
//                   >
//                     {slides[currentSlide].cta1.text}

//                     <CurrentCta1Icon className="w-4 h-4" />
//                   </Link>

//                   <Link
//                     to={slides[currentSlide].cta2.link}
//                     className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
//                   >
//                     {slides[currentSlide].cta2.text}

//                     <CurrentCta2Icon className="w-4 h-4" />
//                   </Link>
//                 </div>

//                 {/* <motion.div
//                   key={`stats-${currentSlide}`}
//                   variants={statsVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
//                 >
//                   {slides[currentSlide].stats.map((s) => (
//                     <div
//                       key={s.l}
//                       className="glass rounded-xl px-4 py-4"
//                     >
//                       <div className="text-2xl sm:text-3xl font-display font-bold text-[--brand-deep]">
//                         <Counter to={s.v} suffix={s.s} />
//                       </div>

//                       <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
//                         {s.l}
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div> */}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* RIGHT VIDEO */}
//           <div className="lg:col-span-5 relative">
//             <button
//               onClick={handleNext}
//               className="absolute -right-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
//               aria-label="Next slide"
//             >
//               <ChevronRightIcon className="w-6 h-6 text-[--brand-deep]" />
//             </button>

//             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
//               <AnimatePresence mode="wait">
//                 <motion.video
//                   key={currentSlide}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="absolute inset-0 w-full h-full object-cover"
//                 >
//                   <source
//                     src={slides[currentSlide].video}
//                     type="video/mp4"
//                   />
//                 </motion.video>
//               </AnimatePresence>

//               <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />

//               {/* BADGE */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`badge-${currentSlide}`}
//                   variants={badgeVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs z-10"
//                 >
//                   <div
//                     className={`flex items-center gap-2 font-semibold text-[--${slides[currentSlide].badge.color}]`}
//                   >
//                     <CurrentBadgeIcon className="w-4 h-4" />

//                     {slides[currentSlide].badge.text}
//                   </div>

//                   <div className="mt-1 text-muted-foreground">
//                     {slides[currentSlide].badge.subtext}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* MOBILE NAV */}
//               <button
//                 onClick={handlePrev}
//                 className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5 text-[--brand-deep]" />
//               </button>

//               <button
//                 onClick={handleNext}
//                 className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
//                 aria-label="Next slide"
//               >
//                 <ChevronRightIcon className="w-5 h-5 text-[--brand-deep]" />
//               </button>

//               {/* PROGRESS */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{
//                     duration: 7,
//                     ease: "linear",
//                   }}
//                   className="h-full bg-gradient-to-r from-[--brand] to-[--brand-sky]"
//                 />
//               </div>

//               {/* INDICATORS */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                 {slides.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setDirection(idx > currentSlide ? 1 : -1);

//                       setCurrentSlide(idx);
//                     }}
//                     className={`transition-all rounded-full ${
//                       idx === currentSlide
//                         ? "w-8 h-2 bg-[--brand-deep]"
//                         : "w-2 h-2 bg-white/50 hover:bg-white/80"
//                     }`}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useState, useEffect } from "react";
// import { Link } from "@tanstack/react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   ChevronRight,
//   Zap,
//   ChevronLeft,
//   ChevronRight as ChevronRightIcon,
//   Factory,
//   Globe,
//   Shield,
// } from "lucide-react";

// // Import images instead of videos
// import heroImg1 from "@/assets/hero-factory.jpg";
// import heroImg2 from "@/assets/factory-aerial.jpg";
// import heroImg3 from "@/assets/project-peb.jpg";

// import { Counter } from "@/components/site/Counter";

// const slides = [
//   {
//     id: 1,
//     title: "Engineering Strength.",
//     subtitle: "Building the Future with Precision.",
//     description:
//       "World-class steel manufacturing and civil engineering solutions driven by innovation, trust, and engineering excellence across continents.",
//     image: heroImg1, // Using image instead of video
//     chip: "Precision · Strength · Innovation",
//     chipIcon: Zap,
//     cta1: {
//       text: "Get a Quote",
//       link: "/contact",
//       icon: ArrowRight,
//     },
//     cta2: {
//       text: "Explore Projects",
//       link: "/projects",
//       icon: ChevronRight,
//     },
//     badge: {
//       icon: Zap,
//       text: "Live · Bay 4",
//       subtext: "Robotic weld cell · 99.4% uptime",
//       color: "brand-deep",
//     },
//     stats: [
//       { v: 28, s: "+", l: "Years of Engineering" },
//       { v: 1200, s: "+", l: "Projects Delivered" },
//       { v: 65000, s: "T", l: "Annual Steel Output" },
//       { v: 42, s: "", l: "Countries Served" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Industrial Evolution.",
//     subtitle: "Powered by Advanced Manufacturing.",
//     description:
//       "State-of-the-art robotic welding, CNC plasma cutting, and automated fabrication lines delivering precision at scale with ISO-certified processes.",
//     image: heroImg2, // Using image instead of video
//     chip: "Innovation · Automation · Scale",
//     chipIcon: Factory,
//     cta1: {
//       text: "Our Facility",
//       link: "/manufacturing",
//       icon: ArrowRight,
//     },
//     cta2: {
//       text: "View Capabilities",
//       link: "/capabilities",
//       icon: ChevronRight,
//     },
//     badge: {
//       icon: Factory,
//       text: "Production Capacity",
//       subtext: "65,000 tons annually",
//       color: "energy",
//     },
//     stats: [
//       { v: 15, s: "+", l: "Robotic Weld Cells" },
//       { v: 24, s: "/7", l: "Production Hours" },
//       { v: 99.4, s: "%", l: "Uptime Rate" },
//       { v: 420, s: "k", l: "Plant Area (sq.ft)" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Global Standards.",
//     subtitle: "Engineering Trust Worldwide.",
//     description:
//       "Delivering Structural Solutions with uncompromising Quality and Safety",
//     image: heroImg3, // Using image instead of video
//     chip: "Quality · Safety · Global",
//     chipIcon: Globe,
//     cta1: {
//       text: "Our Projects",
//       link: "/projects",
//       icon: ArrowRight,
//     },
//     cta2: {
//       text: "Certifications",
//       link: "/certifications",
//       icon: ChevronRight,
//     },
//     badge: {
//       icon: Shield,
//       text: "ISO 9001 · Verified",
//       subtext: "Global quality standards",
//       color: "trust",
//     },
//   },
// ];

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut" as const,
//       },
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeIn" as const,
//       },
//     }),
//   };

//   const imageVariants = {
//     enter: {
//       scale: 1.1,
//       opacity: 0,
//     },
//     center: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut" as const,
//       },
//     },
//     exit: {
//       scale: 0.95,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeIn" as const,
//       },
//     },
//   };

//   const badgeVariants = {
//     initial: { opacity: 0, x: -20 },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.4,
//         delay: 0.3,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: -20,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const CurrentCta1Icon = slides[currentSlide].cta1.icon;
//   const CurrentCta2Icon = slides[currentSlide].cta2.icon;
//   const CurrentBadgeIcon = slides[currentSlide].badge.icon;

//   return (
//     <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
//       <div className="aurora absolute inset-0 -z-10" />
//       <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />

//       {/* Floating particles */}
//       <div
//         aria-hidden
//         className="absolute inset-0 -z-10 pointer-events-none"
//       >
//         {[...Array(14)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
//             style={{
//               top: `${(i * 53) % 90 + 5}%`,
//               left: `${(i * 37) % 95 + 2}%`,
//               width: `${4 + (i % 4) * 2}px`,
//               height: `${4 + (i % 4) * 2}px`,
//               animationDelay: `${(i % 6) * 0.6}s`,
//               animationDuration: `${5 + (i % 5)}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid lg:grid-cols-12 gap-10 items-center">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-7 relative min-h-[550px]">
//             <button
//               onClick={handlePrev}
//               className="absolute -left-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6 text-[--brand-deep]" />
//             </button>

//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentSlide}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="absolute inset-0"
//               >
//                 <div className="chip">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[--energy]" />
//                   {slides[currentSlide].chip}
//                 </div>

//                 <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
//                   {slides[currentSlide].title}
//                   <br />
//                   <span className="text-gradient">
//                     {slides[currentSlide].subtitle}
//                   </span>
//                 </h1>

//                 <p className="mt-6 text-lg text-muted-foreground max-w-xl">
//                   {slides[currentSlide].description}
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-3">
//                   <Link
//                     to={slides[currentSlide].cta1.link}
//                     className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
//                   >
//                     {slides[currentSlide].cta1.text}
//                     <CurrentCta1Icon className="w-4 h-4" />
//                   </Link>

//                   <Link
//                     to={slides[currentSlide].cta2.link}
//                     className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
//                   >
//                     {slides[currentSlide].cta2.text}
//                     <CurrentCta2Icon className="w-4 h-4" />
//                   </Link>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="lg:col-span-5 relative">
//             <button
//               onClick={handleNext}
//               className="absolute -right-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
//               aria-label="Next slide"
//             >
//               <ChevronRightIcon className="w-6 h-6 text-[--brand-deep]" />
//             </button>

//             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={currentSlide}
//                   src={slides[currentSlide].image}
//                   alt={slides[currentSlide].title}
//                   variants={imageVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </AnimatePresence>

//               <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />

//               {/* BADGE */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`badge-${currentSlide}`}
//                   variants={badgeVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs z-10"
//                 >
//                   <div
//                     className={`flex items-center gap-2 font-semibold text-[--${slides[currentSlide].badge.color}]`}
//                   >
//                     <CurrentBadgeIcon className="w-4 h-4" />
//                     {slides[currentSlide].badge.text}
//                   </div>
//                   <div className="mt-1 text-muted-foreground">
//                     {slides[currentSlide].badge.subtext}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* MOBILE NAV */}
//               <button
//                 onClick={handlePrev}
//                 className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5 text-[--brand-deep]" />
//               </button>

//               <button
//                 onClick={handleNext}
//                 className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
//                 aria-label="Next slide"
//               >
//                 <ChevronRightIcon className="w-5 h-5 text-[--brand-deep]" />
//               </button>

//               {/* PROGRESS */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{
//                     duration: 7,
//                     ease: "linear",
//                   }}
//                   className="h-full bg-gradient-to-r from-[--brand] to-[--brand-sky]"
//                 />
//               </div>

//               {/* INDICATORS */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                 {slides.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setDirection(idx > currentSlide ? 1 : -1);
//                       setCurrentSlide(idx);
//                     }}
//                     className={`transition-all rounded-full ${
//                       idx === currentSlide
//                         ? "w-8 h-2 bg-[--brand-deep]"
//                         : "w-2 h-2 bg-white/50 hover:bg-white/80"
//                     }`}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Factory,
  Globe,
  Shield,
} from "lucide-react";

// Import images instead of videos
import heroImg1 from "@/assets/hero-factory.jpg";
import heroImg2 from "@/assets/factory-aerial.jpg";
import heroImg3 from "@/assets/project-peb.jpg";

import { Counter } from "@/components/site/Counter";

const slides = [
  {
    id: 1,
    title: "Engineering Strength.",
    subtitle: "Building the Future with Precision.",
    description:
      "World-class steel manufacturing and civil engineering solutions driven by innovation, trust, and engineering excellence across continents.",
    image: heroImg1, // Using image instead of video
    chip: "Precision · Strength · Innovation",
    chipIcon: Zap,
    cta1: {
      text: "Get a Quote",
      link: "/contact",
      icon: ArrowRight,
    },
    cta2: {
      text: "Explore Projects",
      link: "/projects",
      icon: ChevronRight,
    },
    badge: {
      icon: Zap,
      text: "Live · Bay 4",
      subtext: "Robotic weld cell · 99.4% uptime",
      color: "brand-deep",
    },
    stats: [
      { v: 28, s: "+", l: "Years of Engineering" },
      { v: 1200, s: "+", l: "Projects Delivered" },
      { v: 65000, s: "T", l: "Annual Steel Output" },
      { v: 42, s: "", l: "Countries Served" },
    ],
  },
  {
    id: 2,
    title: "Industrial Evolution.",
    subtitle: "Powered by Advanced Manufacturing.",
    description:
      "State-of-the-art robotic welding, CNC plasma cutting, and automated fabrication lines delivering precision at scale with ISO-certified processes.",
    image: heroImg2, // Using image instead of video
    chip: "Innovation · Automation · Scale",
    chipIcon: Factory,
    cta1: {
      text: "Our Facility",
      link: "/manufacturing",
      icon: ArrowRight,
    },
    cta2: {
      text: "View Capabilities",
      link: "/capabilities",
      icon: ChevronRight,
    },
    badge: {
      icon: Factory,
      text: "Production Capacity",
      subtext: "65,000 tons annually",
      color: "energy",
    },
    stats: [
      { v: 15, s: "+", l: "Robotic Weld Cells" },
      { v: 24, s: "/7", l: "Production Hours" },
      { v: 99.4, s: "%", l: "Uptime Rate" },
      { v: 420, s: "k", l: "Plant Area (sq.ft)" },
    ],
  },
  {
    id: 3,
    title: "Global Standards.",
    subtitle: "Engineering Trust Worldwide.",
    description:
      "Delivering Structural Solutions with uncompromising Quality and Safety",
    image: heroImg3, // Using image instead of video
    chip: "Quality · Safety · Global",
    chipIcon: Globe,
    cta1: {
      text: "Our Projects",
      link: "/projects",
      icon: ArrowRight,
    },
    cta2: {
      text: "Certifications",
      link: "/certifications",
      icon: ChevronRight,
    },
    badge: {
      icon: Shield,
      text: "ISO 9001 · Verified",
      subtext: "Global quality standards",
      color: "trust",
    },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn" as const,
      },
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.1,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn" as const,
      },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const CurrentCta1Icon = slides[currentSlide].cta1.icon;
  const CurrentCta2Icon = slides[currentSlide].cta2.icon;
  const CurrentBadgeIcon = slides[currentSlide].badge.icon;

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="aurora absolute inset-0 -z-10" />
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />

      {/* Floating particles */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[--brand-sky]/40 blur-[1px] animate-float"
            style={{
              top: `${(i * 53) % 90 + 5}%`,
              left: `${(i * 37) % 95 + 2}%`,
              width: `${4 + (i % 4) * 2}px`,
              height: `${4 + (i % 4) * 2}px`,
              animationDelay: `${(i % 6) * 0.6}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 relative min-h-[550px]">
            <button
              onClick={handlePrev}
              className="absolute -left-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[--brand-deep]" />
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="chip">
                  <span className="w-1.5 h-1.5 rounded-full bg-[--energy]" />
                  {slides[currentSlide].chip}
                </div>

                <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                  {slides[currentSlide].title}
                  <br />
                  <span className="text-gradient">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>

                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  {slides[currentSlide].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={slides[currentSlide].cta1.link}
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                  >
                    {slides[currentSlide].cta1.text}
                    <CurrentCta1Icon className="w-4 h-4" />
                  </Link>

                  <Link
                    to={slides[currentSlide].cta2.link}
                    className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                  >
                    {slides[currentSlide].cta2.text}
                    <CurrentCta2Icon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative">
            <button
              onClick={handleNext}
              className="absolute -right-16 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/80 transition-all z-20 hidden lg:flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-6 h-6 text-[--brand-deep]" />
            </button>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />

              {/* BADGE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${currentSlide}`}
                  variants={badgeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3 text-xs z-10"
                >
                  <div
                    className={`flex items-center gap-2 font-semibold text-[--${slides[currentSlide].badge.color}]`}
                  >
                    <CurrentBadgeIcon className="w-4 h-4" />
                    {slides[currentSlide].badge.text}
                  </div>
                  <div className="mt-1 text-muted-foreground">
                    {slides[currentSlide].badge.subtext}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* MOBILE NAV */}
              <button
                onClick={handlePrev}
                className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-[--brand-deep]" />
              </button>

              <button
                onClick={handleNext}
                className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 glass rounded-full p-2 hover:bg-white/80 transition-all z-20"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-5 h-5 text-[--brand-deep]" />
              </button>

              {/* PROGRESS */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
                <motion.div
                  key={currentSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 15, // 15 seconds to match the interval
                    ease: "linear",
                  }}
                  className="h-full bg-gradient-to-r from-[--brand] to-[--brand-sky]"
                />
              </div>

              {/* INDICATORS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentSlide ? 1 : -1);
                      setCurrentSlide(idx);
                    }}
                    className={`transition-all rounded-full ${
                      idx === currentSlide
                        ? "w-8 h-2 bg-[--brand-deep]"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}