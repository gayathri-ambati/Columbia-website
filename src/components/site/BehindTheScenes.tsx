// BehindTheScenes.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";

const brollVideos = [
  {
    title: "Morning Shift",
    duration: "1:23",
    views: "1.2K",
    thumbnail:
      "https://i.pinimg.com/1200x/4a/3f/6d/4a3f6d0c3a6b4ad06f2a31e600362842.jpg",
    video:
      "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Welding Workshop",
    duration: "2:45",
    views: "892",
    thumbnail:
      "https://i.pinimg.com/webp/1200x/0d/e3/ee/0de3ee1c6d2b7645f8c2e3c7dc87f5e5.webp",
    video:
      "https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Quality Check",
    duration: "1:56",
    views: "634",
    thumbnail:
      "https://i.pinimg.com/webp/1200x/e9/76/c0/e976c0382530a130dc5107b4b1c39614.webp",
    video:
      "https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Team Meeting",
    duration: "0:58",
    views: "421",
    thumbnail:
      "https://i.pinimg.com/736x/33/6c/45/336c456c21164b952d347d6b859e6ac3.jpg",
    video:
      "https://videos.pexels.com/video-files/5532762/5532762-hd_1920_1080_25fps.mp4",
  },
];

export default function BehindTheScenes() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
          <div>
            <span className="chip bg-white/10 text-white">
              Behind the Scenes
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Life at <span className="text-gradient"> Columbia</span>
            </h2>

            <p className="mt-4 text-gray-300 max-w-2xl">
              Get an exclusive look at our people, processes, and the passion
              behind every structure.
            </p>
          </div>

          <button className="glass text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-white/10 transition">
            View All →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {brollVideos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-[--brand]/20 to-[--brand-sky]/20">
                {playingVideo === idx ? (
                  <video
                    src={video.video}
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
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setPlayingVideo(idx)}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-[--brand]"
                      >
                        <Play
                          className="w-5 h-5 ml-0.5"
                          fill="currentColor"
                        />
                      </button>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-2 left-2 glass rounded px-2 py-1 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>

                    {/* Views */}
                    <div className="absolute bottom-2 right-2 glass rounded px-2 py-1 text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </div>
                  </>
                )}
              </div>

              <h3 className="mt-2 font-semibold text-sm">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}