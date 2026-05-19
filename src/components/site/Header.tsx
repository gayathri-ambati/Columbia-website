// import { Link, useRouterState } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Menu, X, ChevronRight } from "lucide-react";

// const NAV = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/products", label: "Products" },
//   { to: "/services", label: "Services" },
//   { to: "/projects", label: "Projects" },
//   { to: "/industries", label: "Industries" },
//   { to: "/manufacturing", label: "Manufacturing" },
//   { to: "/certifications", label: "Quality" },
//   { to: "/blog", label: "Insights" },
//   { to: "/careers", label: "Careers" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// export function Header() {
//   const path = useRouterState({ select: (s) => s.location.pathname });
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => { setOpen(false); }, [path]);

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
//       <div className="mx-auto max-w-7xl px-4">
//         <div className={`glass rounded-2xl flex items-center justify-between gap-4 px-4 sm:px-5 py-3 transition-all duration-500 ${scrolled ? "shadow-[0_10px_30px_-12px_rgba(29,78,216,0.25)]" : ""}`}>
//           <Link to="/" className="flex items-center gap-2.5 group">
//             <span className="relative grid place-items-center w-9 h-9 rounded-lg overflow-hidden">
//               <span className="absolute inset-0 bg-gradient-to-br from-[--brand-deep] via-[--brand] to-[--brand-sky]" />
//               <span className="absolute inset-[2px] rounded-md bg-white/10 backdrop-blur" />
//               <span className="relative font-display font-bold text-white text-sm tracking-tight">ES</span>
//             </span>
//             <span className="hidden sm:flex flex-col leading-tight">
//               <span className="font-display font-semibold text-[15px] tracking-tight">Epitome Steel</span>
//               <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Steel · Civil · Structures</span>
//             </span>
//           </Link>

//           <nav className="hidden xl:flex items-center gap-1">
//             {NAV.slice(0, 9).map((n) => {
//               const active = path === n.to;
//               return (
//                 <Link
//                   key={n.to}
//                   to={n.to}
//                   className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition ${active ? "text-[--brand-deep]" : "text-foreground/70 hover:text-foreground"}`}
//                 >
//                   {n.label}
//                   {active && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[--brand] to-transparent" />}
//                 </Link>
//               );
//             })}
//           </nav>

//           <div className="flex items-center gap-2">
//             <Link to="/contact" className="hidden sm:inline-flex items-center gap-1.5 btn-primary px-4 py-2 rounded-xl text-[13px] font-semibold">
//               Get a Quote <ChevronRight className="w-4 h-4" />
//             </Link>
//             <button
//               aria-label="Menu"
//               onClick={() => setOpen((v) => !v)}
//               className="xl:hidden grid place-items-center w-10 h-10 rounded-lg border border-border bg-white/70 hover:bg-white"
//             >
//               {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {open && (
//           <div className="xl:hidden mt-2 glass rounded-2xl p-3 animate-fade-up">
//             <div className="grid grid-cols-2 gap-1">
//               {NAV.map((n) => {
//                 const active = path === n.to;
//                 return (
//                   <Link
//                     key={n.to}
//                     to={n.to}
//                     className={`px-3 py-2.5 rounded-lg text-sm font-medium ${active ? "bg-[--accent] text-[--brand-deep]" : "hover:bg-[--accent]"}`}
//                   >
//                     {n.label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }






import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Home, Info, Package, Settings, FolderKanban, Building2, Factory, Award, Newspaper, Briefcase, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/products", label: "Products", icon: Package },
  { to: "/services", label: "Services", icon: Settings },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/industries", label: "Industries", icon: Building2 },
  { to: "/manufacturing", label: "Manufacturing", icon: Factory },
  { to: "/certifications", label: "Quality", icon: Award },
  { to: "/blog", label: "Insights", icon: Newspaper },
  { to: "/careers", label: "Careers", icon: Briefcase },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`glass rounded-2xl flex items-center justify-between gap-4 px-4 sm:px-5 py-2 transition-all duration-500 ${scrolled ? "shadow-[0_10px_30px_-12px_rgba(29,78,216,0.25)]" : ""}`}>
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <span className="relative grid place-items-center w-8 h-8 rounded-lg overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-br from-[--brand-deep] via-[--brand] to-[--brand-sky]" />
              <span className="absolute inset-[2px] rounded-md bg-white/10 backdrop-blur" />
              <span className="relative font-display font-bold text-white text-xs tracking-tight">ES</span>
            </span>
            <span className="hidden lg:flex flex-col leading-tight">
              <span className="font-display font-semibold text-[13px] tracking-tight">Epitome Steel</span>
              <span className="text-[8px] uppercase tracking-[0.18em] text-muted-foreground">Steel · Civil · Structures</span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV.map((n) => {
              const active = path === n.to;
              const Icon = n.icon;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-2.5 py-1.5 text-[12px] font-medium rounded-lg transition flex items-center gap-1 whitespace-nowrap ${
                    active 
                      ? "text-[--brand-deep] bg-[--accent]" 
                      : "text-foreground/70 hover:text-foreground hover:bg-[--accent]/50"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {n.label}
                  {active && <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[--brand] to-transparent" />}
                </Link>
              );
            })}
          </nav>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden grid place-items-center w-8 h-8 rounded-lg border border-border bg-white/70 hover:bg-white"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden mt-2 glass rounded-2xl p-3 animate-fade-up">
            <div className="grid grid-cols-2 gap-1">
              {NAV.map((n) => {
                const active = path === n.to;
                const Icon = n.icon;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
                      active 
                        ? "bg-[--accent] text-[--brand-deep]" 
                        : "hover:bg-[--accent]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {n.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

