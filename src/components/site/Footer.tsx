// import { Link } from "@tanstack/react-router";
// import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="relative mt-24">
//       <div className="aurora absolute inset-0 -z-10" />
//       <div className="blueprint-grid absolute inset-0 -z-10 opacity-60" />
//       <div className="mx-auto max-w-7xl px-4 pt-20 pb-10">
//         <div className="grid lg:grid-cols-12 gap-10">
//           <div className="lg:col-span-4">
//             <div className="flex items-center gap-2.5">
//               <span className="relative grid place-items-center w-10 h-10 rounded-lg overflow-hidden">
//                 <span className="absolute inset-0 bg-gradient-to-br from-[--brand-deep] via-[--brand] to-[--brand-sky]" />
//                 <span className="relative font-display font-bold text-white tracking-tight">ES</span>
//               </span>
//               <div className="leading-tight">
//                 <div className="font-display font-semibold tracking-tight">Epitome Steel Pvt Ltd</div>
//                 <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Engineering The Future</div>
//               </div>
//             </div>
//             <p className="mt-5 text-sm text-muted-foreground max-w-sm">
//               A precision-driven manufacturer of steel structures, PEB systems and civil
//               fabrication solutions for industrial leaders worldwide.
//             </p>
//             <div className="mt-6 flex gap-2">
//               {[Linkedin, Facebook, Instagram].map((Icon, i) => (
//                 <a key={i} href="#" aria-label="social" className="grid place-items-center w-10 h-10 rounded-lg border border-border bg-white/70 hover:bg-white hover:border-[--brand-sky] transition">
//                   <Icon className="w-4 h-4 text-[--brand-deep]" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="lg:col-span-2">
//             <div className="text-xs uppercase tracking-widest text-[--brand-deep] font-semibold">Explore</div>
//             <ul className="mt-4 space-y-2 text-sm">
//               {[["/about","About"],["/products","Products"],["/services","Services"],["/projects","Projects"],["/industries","Industries"]].map(([to,l]) => (
//                 <li key={to}><Link to={to} className="text-foreground/70 hover:text-[--brand-deep] transition">{l}</Link></li>
//               ))}
//             </ul>
//           </div>

//           <div className="lg:col-span-2">
//             <div className="text-xs uppercase tracking-widest text-[--brand-deep] font-semibold">Company</div>
//             <ul className="mt-4 space-y-2 text-sm">
//               {[["/manufacturing","Manufacturing"],["/certifications","Certifications"],["/blog","Insights"],["/downloads","Downloads"],["/careers","Careers"]].map(([to,l]) => (
//                 <li key={to}><Link to={to} className="text-foreground/70 hover:text-[--brand-deep] transition">{l}</Link></li>
//               ))}
//             </ul>
//           </div>

//           <div className="lg:col-span-4">
//             <div className="text-xs uppercase tracking-widest text-[--brand-deep] font-semibold">Contact</div>
//             <ul className="mt-4 space-y-3 text-sm text-foreground/80">
//               <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[--brand] mt-0.5" /> Plot 24, Industrial Estate, Pune, Maharashtra, India</li>
//               <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[--brand]" /> +91 98765 43210</li>
//               <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[--brand]" /> hello@epitomesteel.com</li>
//             </ul>
//             <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 btn-orange px-4 py-2 rounded-xl text-[13px] font-semibold">
//               Start a Project <ArrowUpRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </div>

//         <div className="divider-line my-10" />
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
//           <div>© {new Date().getFullYear()} Epitome Steel Pvt Ltd. All rights reserved.</div>
//           <div className="flex gap-5">
//             <a href="#" className="hover:text-[--brand-deep]">Privacy</a>
//             <a href="#" className="hover:text-[--brand-deep]">Terms</a>
//             <a href="#" className="hover:text-[--brand-deep]">Sitemap</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="aurora absolute inset-0 -z-10" />
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="relative grid place-items-center w-10 h-10 rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-[--brand-deep] via-[--brand] to-[--brand-sky]" />
                <span className="relative font-display font-bold text-white tracking-tight">ES</span>
              </span>
              <div className="leading-tight">
                <div className="font-display font-semibold tracking-tight">Epitome Steel Pvt Ltd</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Engineering The Future</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              A precision-driven manufacturer of steel structures, PEB systems and civil
              fabrication solutions for industrial leaders worldwide.
            </p>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid place-items-center w-10 h-10 rounded-lg border border-border bg-white/70 hover:bg-white hover:border-[--brand-sky] transition">
                  <Icon className="w-4 h-4 text-[--brand-deep]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-[--brand-deep] font-semibold">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[["/about","About"],["/products","Products"],["/services","Services"],["/projects","Projects"],["/industries","Industries"]].map(([to,l]) => (
                <li key={to}><Link to={to} className="text-foreground/70 hover:text-[--brand-deep] transition">{l}</Link></li>
              ))}
            </ul>
          </div>

         <div className="lg:col-span-2">
  <div className="text-xs uppercase tracking-widest text-[--brand-deep] font-semibold">
    Company
  </div>

  <ul className="mt-4 space-y-2 text-sm">
    {[
      ["/manufacturing", "Manufacturing"],
      ["/certifications", "Certifications"],
      ["/blog", "Insights"],
      ["/careers", "Careers"],
      ["/contact", "Contact"],
    ].map(([to, l]) => (
      <li key={to}>
        <Link
          to={to}
          className="text-foreground/70 hover:text-[--brand-deep] transition"
        >
          {l}
        </Link>
      </li>
    ))}
  </ul>
</div>
          

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-[--brand-deep] font-semibold">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[--brand] mt-0.5" /> Plot 24, Industrial Estate, Pune, Maharashtra, India</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[--brand]" /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[--brand]" /> hello@epitomesteel.com</li>
            </ul>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 btn-orange px-4 py-2 rounded-xl text-[13px] font-semibold">
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="divider-line my-10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Epitome Steel Pvt Ltd. All rights reserved.</div>
         <div className="flex gap-5">
     <Link
    to="/PrivacyPolicy"
    className="hover:text-[--brand-deep] transition"
  >
    Privacy Policy
      </Link>

     <Link
    to="/TermsConditions"
    className="hover:text-[--brand-deep] transition"
  >
    Terms & Conditions
    </Link>

      {/* <Link
    to="/sitemap"
    className="hover:text-[--brand-deep] transition"
  >
    Sitemap
     </Link> */}
        </div>
        </div>
      </div>
    </footer>
  );
}
