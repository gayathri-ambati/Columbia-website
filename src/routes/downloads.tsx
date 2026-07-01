import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Catalogue & Downloads —  Columbia" },
      { name: "description", content: "Download product brochures, technical datasheets, and engineering manuals." },
      { property: "og:title", content: "Downloads —  Columbia" },
      { property: "og:description", content: "Brochures, datasheets and product manuals." },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

const files = [
  { t: "Company Brochure 2025", sz: "12.4 MB", k: "Corporate" },
  { t: "PEB Buildings Catalogue", sz: "8.1 MB", k: "Catalogue" },
  { t: "Structural Steel Datasheet", sz: "2.3 MB", k: "Datasheet" },
  { t: "Standing Seam Roofing Manual", sz: "5.6 MB", k: "Manual" },
  { t: "Welding Procedures (WPS) Pack", sz: "3.9 MB", k: "Technical" },
  { t: "Quality & Safety Policy", sz: "1.1 MB", k: "Policy" },
];

function DownloadsPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Catalogues, brochures & technical files." subtitle="Everything you need to specify and procure with confidence." />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {files.map((f) => (
            <div key={f.t} className="glass-card p-6 group">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-widest text-[--brand-deep] font-semibold">{f.k}</div>
                  <div className="font-display font-semibold">{f.t}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">PDF · {f.sz}</div>
                </div>
              </div>
              <button className="mt-5 w-full btn-primary px-4 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 group-hover:shadow-[0_18px_40px_-14px_rgba(37,99,235,.65)]">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
