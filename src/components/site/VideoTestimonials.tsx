// VideoTestimonials.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Sharma",
    role: "Project Director, L&T",
    video:
      "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
    quote:
      " Columbia delivered exceptional quality ahead of schedule. Their engineering expertise is unmatched.",
    thumbnail:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Priya Mehta",
    role: "VP Operations, Tata Projects",
    video:
      "https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_25fps.mp4",
    quote:
      "The precision and safety standards at their facility are world-class. Highly recommended.",
    thumbnail:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function VideoTestimonials() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="chip">Client Stories</span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Our <span className="text-gradient">Partners</span> Say
          </h2>

          <p className="mt-4 text-muted-foreground">
            Hear directly from industry leaders about their experience working
            with us.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative aspect-video bg-gradient-to-br from-[--brand]/20 to-[--brand-sky]/20 group cursor-pointer overflow-hidden">
                {playingVideo === idx ? (
                  <video
                    src={t.video}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={t.thumbnail}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setPlayingVideo(idx)}
                        className="w-16 h-16 rounded-full bg-[--brand] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6">
                <Quote className="w-8 h-8 text-[--brand]/30 mb-3" />

                <p className="text-muted-foreground italic">
                  {t.quote}
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold text-[--brand-deep]">
                    {t.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}