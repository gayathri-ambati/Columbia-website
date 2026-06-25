// // ProjectVideoShowcase.tsx
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, Maximize, Calendar, MapPin, Building2 } from "lucide-react";
// import projectVideo1 from "@/assets/project-completion.mp4";
// import projectVideo2 from "@/assets/peb-erection.mp4";
// import projectVideo3 from "@/assets/factory-construction.mp4";

// const projects = [
//   {
//     title: "50MW Solar Structure",
//     client: "Adani Green Energy",
//     location: "Gujarat, India",
//     year: "2024",
//     video: "https://media.istockphoto.com/id/1067393466/video/under-construction-3d-animation.mp4?s=mp4-640x640-is&k=20&c=1fc93JyBA9nS2WxEy4bw3qf6lbG6uxE8w5WXOCuc71E=",
//     thumbnail: "/thumbnails/solar-project.jpg",
//     stats: { duration: "6 months", steel: "12,500T", area: "250 acres" }
//   },
//   {
//     title: "Automotive Plant",
//     client: "Tata Motors",
//     location: "Pune, India",
//     year: "2023",
//     video: "https://media.istockphoto.com/id/1335862361/video/car-factory-3d-concept-automated-robot-arm-assembly-line-manufacturing-advanced-high-tech.mp4?s=mp4-640x640-is&k=20&c=LxudHmzkhDnWdTp3KRwrmyGrDcSacPI-eI9E31IVIdc=",
//     thumbnail: "/thumbnails/auto-plant.jpg",
//     stats: { duration: "8 months", steel: "18,000T", area: "500,000 sq.ft" }
//   },
//   {
//     title: "Warehouse Complex",
//     client: "Amazon India",
//     location: "Chennai, India",
//     year: "2024",
//     video: "https://media.istockphoto.com/id/2272617013/video/drone-ascending-above-large-agricultural-farm-complex.mp4?s=mp4-640x640-is&k=20&c=pinpt07XFVxf__idfle4xdxB5ria0OTo3_CY6qD6HaU=",
//     thumbnail: "/thumbnails/warehouse.jpg",
//     stats: { duration: "5 months", steel: "8,500T", area: "350,000 sq.ft" }
//   }
// ];

// export default function ProjectVideoShowcase() {
//   const [activeProject, setActiveProject] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
//           {/* Left Content */}
//           <div className="lg:col-span-5">
//             <span className="chip bg-white/10 text-white">Featured Projects</span>
//             <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//               Engineering <span className="text-gradient">Impact</span> Worldwide
//             </h2>
//             <p className="mt-4 text-gray-300">
//               Watch how we transform raw steel into industrial landmarks across the globe.
//             </p>

//             {/* Project Selector */}
//             <div className="mt-8 space-y-3">
//               {projects.map((project, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     setActiveProject(idx);
//                     setIsPlaying(true);
//                   }}
//                   className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
//                     activeProject === idx
//                       ? "bg-gradient-to-r from-[--brand]/20 to-[--brand-sky]/20 border-l-4 border-[--brand]"
//                       : "hover:bg-white/5"
//                   }`}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-semibold text-lg">{project.title}</h3>
//                       <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
//                         <span className="flex items-center gap-1">
//                           <Building2 className="w-3 h-3" /> {project.client}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <MapPin className="w-3 h-3" /> {project.location}
//                         </span>
//                       </div>
//                     </div>
//                     <span className="text-sm text-gray-400">{project.year}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>

//             {/* Project Stats */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeProject}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
//               >
//                 {Object.entries(projects[activeProject].stats).map(([key, value]) => (
//                   <div key={key}>
//                     <div className="text-2xl font-bold text-[--brand-sky]">{value}</div>
//                     <div className="text-xs text-gray-400 uppercase mt-1">{key}</div>
//                   </div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right Video Player */}
//           <div className="lg:col-span-7">
//             <div className="relative rounded-2xl overflow-hidden bg-black/50">
//               <AnimatePresence mode="wait">
//                 <motion.video
//                   key={activeProject}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   src={projects[activeProject].video}
//                   autoPlay={isPlaying}
//                   loop
//                   muted
//                   playsInline
//                   className="w-full aspect-video object-cover"
//                 />
//               </AnimatePresence>

//               {/* Video Controls Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                   <button
//                     onClick={() => setIsPlaying(!isPlaying)}
//                     className="glass rounded-full p-2 hover:bg-white/20 transition"
//                   >
//                     {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//                   </button>
//                   <div className="text-sm text-white">{projects[activeProject].title}</div>
//                   <button className="glass rounded-full p-2 hover:bg-white/20 transition">
//                     <Maximize className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// // ProjectVideoShowcase.tsx
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, Maximize, Building2 } from "lucide-react";
// import projectVideo1 from "@/assets/project-completion.mp4";
// import projectVideo2 from "@/assets/peb-erection.mp4";
// import projectVideo3 from "@/assets/factory-construction.mp4";

// const projects = [
//   {
//     title: "50MW Solar Structure",
//     client: "Adani Green Energy",
//     video: "https://media.istockphoto.com/id/1067393466/video/under-construction-3d-animation.mp4?s=mp4-640x640-is&k=20&c=1fc93JyBA9nS2WxEy4bw3qf6lbG6uxE8w5WXOCuc71E=",
//     thumbnail: "/thumbnails/solar-project.jpg",
//   },
//   {
//     title: "Automotive Plant",
//     client: "Tata Motors",
//     video: "https://media.istockphoto.com/id/1335862361/video/car-factory-3d-concept-automated-robot-arm-assembly-line-manufacturing-advanced-high-tech.mp4?s=mp4-640x640-is&k=20&c=LxudHmzkhDnWdTp3KRwrmyGrDcSacPI-eI9E31IVIdc=",
//     thumbnail: "/thumbnails/auto-plant.jpg",
//   },
//   {
//     title: "Warehouse Complex",
//     client: "Amazon India",
//     video: "https://media.istockphoto.com/id/2272617013/video/drone-ascending-above-large-agricultural-farm-complex.mp4?s=mp4-640x640-is&k=20&c=pinpt07XFVxf__idfle4xdxB5ria0OTo3_CY6qD6HaU=",
//     thumbnail: "/thumbnails/warehouse.jpg",
//   }
// ];

// export default function ProjectVideoShowcase() {
//   const [activeProject, setActiveProject] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
//           {/* Left Content */}
//           <div className="lg:col-span-5">
//             <span className="chip bg-white/10 text-white">Featured Projects</span>
//             <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//               Engineering <span className="text-gradient">Impact</span> Worldwide
//             </h2>
//             <p className="mt-4 text-gray-300">
//               Watch how we transform raw steel into industrial landmarks across the globe.
//             </p>

//             {/* Project Selector */}
//             <div className="mt-8 space-y-3">
//               {projects.map((project, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     setActiveProject(idx);
//                     setIsPlaying(true);
//                   }}
//                   className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
//                     activeProject === idx
//                       ? "bg-gradient-to-r from-[--brand]/20 to-[--brand-sky]/20 border-l-4 border-[--brand]"
//                       : "hover:bg-white/5"
//                   }`}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-semibold text-lg">{project.title}</h3>
//                       <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
//                         <span className="flex items-center gap-1">
//                           <Building2 className="w-3 h-3" /> {project.client}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right Video Player */}
//           <div className="lg:col-span-7">
//             <div className="relative rounded-2xl overflow-hidden bg-black/50">
//               <AnimatePresence mode="wait">
//                 <motion.video
//                   key={activeProject}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   src={projects[activeProject].video}
//                   autoPlay={isPlaying}
//                   loop
//                   muted
//                   playsInline
//                   className="w-full aspect-video object-cover"
//                 />
//               </AnimatePresence>

//               {/* Video Controls Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                   <button
//                     onClick={() => setIsPlaying(!isPlaying)}
//                     className="glass rounded-full p-2 hover:bg-white/20 transition"
//                   >
//                     {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//                   </button>
//                   <div className="text-sm text-white">{projects[activeProject].title}</div>
//                   <button className="glass rounded-full p-2 hover:bg-white/20 transition">
//                     <Maximize className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// ProjectVideoShowcase.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const projects = [
  {
    video: "https://media.istockphoto.com/id/1067393466/video/under-construction-3d-animation.mp4?s=mp4-640x640-is&k=20&c=1fc93JyBA9nS2WxEy4bw3qf6lbG6uxE8w5WXOCuc71E=",
  },
  {
    video: "https://media.istockphoto.com/id/1335862361/video/car-factory-3d-concept-automated-robot-arm-assembly-line-manufacturing-advanced-high-tech.mp4?s=mp4-640x640-is&k=20&c=LxudHmzkhDnWdTp3KRwrmyGrDcSacPI-eI9E31IVIdc=",
  },
  {
    video: "https://media.istockphoto.com/id/2272617013/video/drone-ascending-above-large-agricultural-farm-complex.mp4?s=mp4-640x640-is&k=20&c=pinpt07XFVxf__idfle4xdxB5ria0OTo3_CY6qD6HaU=",
  }
];

export default function ProjectVideoShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play next video when current one ends
  const handleVideoEnd = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setProgress(0);
    setIsPlaying(true);
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      setProgress((currentTime / duration) * 100);
    }
  };

  // Auto-advance every 15 seconds (fallback)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveProject((current) => (current + 1) % projects.length);
          setProgress(0);
          setIsPlaying(true);
          return 0;
        }
        return prev + 1;
      });
    }, 150); // 150ms * 100 = 15 seconds

    return () => clearInterval(interval);
  }, [activeProject]);

  // Reset video when project changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [activeProject]);

  const nextVideo = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const prevVideo = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                Featured Projects
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Impact</span> Worldwide
              </h2>
              <p className="mt-4 text-gray-300 text-lg">
                Watch how we transform raw steel into industrial landmarks across the globe.
              </p>
            </motion.div>

            {/* Navigation Buttons (Mobile) */}
            <div className="flex gap-4 mt-6 lg:hidden">
              <button
                onClick={prevVideo}
                className="flex-1 px-6 py-3 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition"
              >
                Previous
              </button>
              <button
                onClick={nextVideo}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition"
              >
                Next
              </button>
            </div>
          </div>

          {/* Right Video Player */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-black/50 shadow-2xl shadow-cyan-500/10"
            >
              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={activeProject}
                    ref={videoRef}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    src={projects[activeProject].video}
                    autoPlay={isPlaying}
                    loop={false}
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Project Counter */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-sm font-medium border border-white/10">
                  {activeProject + 1} / {projects.length}
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevVideo}
                    className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-500/40 transition-all hover:scale-110 border border-white/10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-cyan-500/40 transition-all hover:scale-110 border border-white/10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Bottom Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition hover:scale-110"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        if (videoRef.current?.requestFullscreen) {
                          videoRef.current.requestFullscreen();
                        }
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition hover:scale-110"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}