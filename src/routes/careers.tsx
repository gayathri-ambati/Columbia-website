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
  <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-8 items-center">

    {/* Left Image + Content */}
    <div className="lg:col-span-5">
     {/* Image */}
      <div className="relative overflow-hidden">
  <img
    src={eng}
    alt="Team"
    loading="lazy"
    className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* Floating Badge */}
  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
    Join Our Team
  </div>

  {/* Bottom Content */}
  <div className="absolute bottom-0 left-0 p-6 text-white">
    <h3 className="text-3xl font-bold leading-tight">
      Build Your Future <br />
      With Industry Leaders
    </h3>

    <p className="mt-3 text-sm leading-7 text-slate-200 max-w-md">
      Work alongside experienced engineers, innovators and project
      leaders delivering world-class steel infrastructure solutions.
    </p>
  </div>
      </div>

{/* GAP BETWEEN IMAGE & CONTENT */}
<div className="h-6 bg-gradient-to-b from-slate-50 to-white" />

{/* Extra Content */}
      <div className="p-6 bg-white">
  <div className="grid grid-cols-3 gap-4">

    <div className="text-center rounded-2xl bg-slate-50 p-4 border border-slate-100">
      <h4 className="text-2xl font-bold text-[--brand-deep]">
        500+
      </h4>
      <p className="mt-1 text-xs text-muted-foreground">
        Team Members
      </p>
    </div>

    <div className="text-center rounded-2xl bg-slate-50 p-4 border border-slate-100">
      <h4 className="text-2xl font-bold text-[--brand-deep]">
        25+
      </h4>
      <p className="mt-1 text-xs text-muted-foreground">
        Global Projects
      </p>
    </div>

    <div className="text-center rounded-2xl bg-slate-50 p-4 border border-slate-100">
      <h4 className="text-2xl font-bold text-[--brand-deep]">
        12+
      </h4>
      <p className="mt-1 text-xs text-muted-foreground">
        Years Experience
      </p>
    </div>
  </div>

  {/* Quote */}
  <div className="mt-6 relative rounded-2xl bg-gradient-to-r from-[--brand-deep] to-[--brand] p-5 text-black shadow-xl">
    <span className="absolute top-2 left-3 text-5xl opacity-20">
      “
    </span>

    <p className="relative text-sm leading-7 italic text-gradient">
      We believe great engineering begins with great people. Join a
      culture focused on innovation, growth and excellence.
    </p>
  </div>
  
      </div>
    </div>

    {/* Right Side Jobs */}
    <div className="lg:col-span-7">
      <span className="chip">Open Roles</span>

      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        We're hiring engineers, makers and leaders.
      </h2>

      <p className="mt-4 text-muted-foreground leading-7 max-w-2xl">
        Explore exciting career opportunities across engineering,
        fabrication, project execution and leadership roles.
      </p>

      <div className="mt-6 space-y-4">
        {jobs.map((j) => (
          <div
            key={j.t}
            className="glass-card p-5 flex items-center justify-between gap-4 group rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--accent] to-cyan-100 text-[--brand-deep] shadow-md">
                <Briefcase className="w-5 h-5" />
              </div>

              <div>
                <div className="font-display font-semibold text-lg">
                  {j.t}
                </div>

                <div className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="w-3 h-3" />
                  {j.l} · {j.k}
                </div>
              </div>
            </div>

            <button className="inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] group-hover:gap-2 transition-all">
              Apply
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
    </section>

      
    </>
  );
}
