import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Briefcase, MapPin, ArrowUpRight, Sparkles, TrendingUp, Users } from "lucide-react";
import eng from "@/assets/engineer.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Epitome Steel" },
      { name: "description", content: "Build your career at Epitome Steel. Open roles in engineering, manufacturing, project management and quality." },
      { property: "og:title", content: "Careers — Epitome Steel" },
      { property: "og:description", content: "Work with one of the region's most respected steel manufacturers." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const jobs = [
  { t: "Senior Structural Engineer", l: "Pune, IN", k: "Full-time" },
  { t: "Robotic Welding Specialist", l: "Pune, IN", k: "Full-time" },
  { t: "Project Manager — EPC", l: "Dubai, AE", k: "Full-time" },
  { t: "QA/QC Inspector (NDT Level II)", l: "Chennai, IN", k: "Full-time" },
  { t: "BIM Coordinator", l: "Remote", k: "Contract" },
  { t: "Site Safety Officer", l: "Gujarat, IN", k: "Full-time" },
];

function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Engineer your career with us." subtitle="Join a team that's redefining industrial construction across continents — with the tools, training and trust to do your best work." />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-5">
          {[
            { i: Sparkles, t: "Modern Tools", d: "BIM, robotics, automation — work with the latest." },
            { i: TrendingUp, t: "Growth Path", d: "Structured L&D, certifications and global mobility." },
            { i: Users, t: "Strong Culture", d: "Safety-first, learning-driven, deeply collaborative." },
          ].map((c) => (
            <div key={c.t} className="glass-card p-6">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white"><c.i className="w-5 h-5" /></div>
              <h3 className="mt-4 font-display font-semibold text-lg">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="glass-card overflow-hidden"><img src={eng} alt="Team" loading="lazy" className="w-full h-full object-cover" /></div>
          </div>
          <div className="lg:col-span-7">
            <span className="chip">Open Roles</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">We're hiring engineers, makers and leaders.</h2>
            <div className="mt-6 space-y-3">
              {jobs.map((j) => (
                <div key={j.t} className="glass-card p-5 flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-4">
                    <div className="grid place-items-center w-11 h-11 rounded-lg bg-[--accent] text-[--brand-deep]"><Briefcase className="w-5 h-5" /></div>
                    <div>
                      <div className="font-display font-semibold">{j.t}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5"><MapPin className="w-3 h-3" /> {j.l} · {j.k}</div>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] group-hover:gap-2 transition-all">Apply <ArrowUpRight className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
