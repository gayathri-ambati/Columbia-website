import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, subtitle, accent }: { eyebrow: string; title: string; subtitle: string; accent?: string }) {
  return (
    <section className="relative pt-36 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      <div className="aurora absolute inset-0 -z-10" />
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-70" />
      <div className="absolute -z-10 top-32 right-[-10%] w-[460px] h-[460px] rounded-full bg-[--brand-sky]/20 blur-3xl animate-float" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="chip"><span className="w-1.5 h-1.5 rounded-full bg-[--brand]" />{eyebrow}</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            {title.split(" ").map((w, i) => i === title.split(" ").length - 1 ? <span key={i} className="text-gradient"> {w}</span> : <span key={i}> {w}</span>)}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold">
              {accent ?? "Talk to Engineering"} <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold border border-border bg-white/70 hover:bg-white">
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
