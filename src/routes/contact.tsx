import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Epitome Steel" },
      { name: "description", content: "Talk to our project engineers. Get a quote within 48 hours for steel structures, PEB buildings and industrial construction." },
      { property: "og:title", content: "Contact — Epitome Steel" },
      { property: "og:description", content: "Start your next steel project with us." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's engineer something exceptional." subtitle="Tell us about your project. A senior engineer will respond within one business day." />
      <section className="pb-24 mt-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            {[
              { i: MapPin, t: "Head Office", d: "Plot 24, Industrial Estate, Pune 411019, Maharashtra, India" },
              { i: Phone, t: "Phone", d: "+91 98765 43210 · +91 20 4000 1234" },
              { i: Mail, t: "Email", d: "hello@epitomesteel.com · projects@epitomesteel.com" },
              { i: MessageCircle, t: "WhatsApp", d: "Chat instantly with our engineering desk" },
            ].map((c) => (
              <div key={c.t} className="glass-card p-5 flex gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white shrink-0"><c.i className="w-5 h-5" /></div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[--brand-deep] font-semibold">{c.t}</div>
                  <div className="text-sm mt-1">{c.d}</div>
                </div>
              </div>
            ))}
            <div className="glass-card overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Pune+Industrial+Area&output=embed"
                className="w-full h-64 grayscale-[20%] contrast-90"
                loading="lazy"
              />
            </div>
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-7 sm:p-9"
          >
            <h2 className="text-2xl font-display font-semibold">Project inquiry</h2>
            <p className="text-sm text-muted-foreground mt-1">Share a few details — we'll come back with scope, schedule and a quote.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { l: "Full name", t: "text", p: "Jane Engineer" },
                { l: "Company", t: "text", p: "Acme Industries" },
                { l: "Email", t: "email", p: "jane@acme.com" },
                { l: "Phone", t: "tel", p: "+91 …" },
              ].map((f) => (
                <label key={f.l} className="block">
                  <span className="text-xs font-semibold text-foreground/70">{f.l}</span>
                  <input required type={f.t} placeholder={f.p} className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm transition" />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-foreground/70">Project type</span>
                <select className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm">
                  <option>PEB Building</option><option>Structural Steel</option><option>Industrial Shed</option><option>Roofing System</option><option>Civil Structural</option><option>Other</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-foreground/70">Tell us more</span>
                <textarea rows={5} placeholder="Scope, location, timeline…" className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm resize-none" />
              </label>
            </div>

            <button type="submit" className="mt-6 btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              {sent ? (<><CheckCircle2 className="w-4 h-4" /> Sent — we'll be in touch</>) : (<>Send inquiry <Send className="w-4 h-4" /></>)}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
