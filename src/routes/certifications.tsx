import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, BadgeCheck, FileText, Download } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Quality — Epitome Steel" },
      { name: "description", content: "ISO 9001, ISO 14001, OHSAS 18001 certified. AWS, EN 1090 weld qualifications. Documented quality assurance." },
      { property: "og:title", content: "Certifications — Epitome Steel" },
      { property: "og:description", content: "Verified, audited and continuously improved." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertPage,
});

const certs = [
  { t: "ISO 9001:2015", d: "Quality Management System" },
  { t: "ISO 14001:2015", d: "Environmental Management" },
  { t: "ISO 45001:2018", d: "Occupational Health & Safety" },
  { t: "EN 1090-1 EXC3", d: "European structural steel execution" },
  { t: "AWS D1.1", d: "Welding qualification — structural steel" },
  { t: "ASTM A6 / A992", d: "Material & section compliance" },
];

function CertPage() {
  return (
    <>
      <PageHero eyebrow="Certifications" title="Verified, audited and improved." subtitle="Every weld, plate and process governed by internationally recognized quality frameworks." />
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div key={c.t} className="glass-card p-6 flex gap-4">
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-[--trust]/15 text-[--trust] shrink-0">
                <BadgeCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="font-display font-semibold text-lg">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
                <button className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[--brand-deep] hover:gap-2 transition-all"><Download className="w-3.5 h-3.5" /> View Certificate</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-5">
          {[
            { i: ShieldCheck, t: "Quality Assurance", d: "Documented inbound material checks, in-process inspection and final dispatch verification." },
            { i: FileText, t: "Traceability", d: "Heat numbers, weld maps, NDT reports — fully archived and exportable per project." },
            { i: BadgeCheck, t: "Continuous Improvement", d: "Monthly KPI reviews, CAPA system and external audit cycle every quarter." },
          ].map((c) => (
            <div key={c.t} className="glass-card p-7">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white"><c.i className="w-5 h-5" /></div>
              <h3 className="mt-4 font-display font-semibold text-lg">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
