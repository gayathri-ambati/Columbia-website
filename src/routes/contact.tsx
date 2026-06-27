// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Epitome Steel" },
//       { name: "description", content: "Talk to our project engineers. Get a quote within 48 hours for steel structures, PEB buildings and industrial construction." },
//       { property: "og:title", content: "Contact — Epitome Steel" },
//       { property: "og:description", content: "Start your next steel project with us." },
//       { property: "og:url", content: "/contact" },
//     ],
//     links: [{ rel: "canonical", href: "/contact" }],
//   }),
//   component: ContactPage,
// });

// function ContactPage() {
//   const [sent, setSent] = useState(false);
//   return (
//     <>
//       <PageHero eyebrow="Contact" title="Let's engineer something exceptional." subtitle="Tell us about your project. A senior engineer will respond within one business day." />
//       <section className="pb-24 mt-12">
//         <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-6">
//           <div className="lg:col-span-5 space-y-4">
//             {[
//               { i: MapPin, t: "Head Office", d: "Plot 24, Industrial Estate, Pune 411019, Maharashtra, India" },
//               { i: Phone, t: "Phone", d: "+91 98765 43210 · +91 20 4000 1234" },
//               { i: Mail, t: "Email", d: "hello@epitomesteel.com · projects@epitomesteel.com" },
//               { i: MessageCircle, t: "WhatsApp", d: "Chat instantly with our engineering desk" },
//             ].map((c) => (
//               <div key={c.t} className="glass-card p-5 flex gap-4">
//                 <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white shrink-0"><c.i className="w-5 h-5" /></div>
//                 <div>
//                   <div className="text-[11px] uppercase tracking-widest text-[--brand-deep] font-semibold">{c.t}</div>
//                   <div className="text-sm mt-1">{c.d}</div>
//                 </div>
//               </div>
//             ))}
//             <div className="glass-card overflow-hidden">
//               <iframe
//                 title="Map"
//                 src="https://www.google.com/maps?q=Pune+Industrial+Area&output=embed"
//                 className="w-full h-64 grayscale-[20%] contrast-90"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           <motion.form
//             onSubmit={(e) => { e.preventDefault(); setSent(true); }}
//             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="lg:col-span-7 glass-card p-7 sm:p-9"
//           >
//             <h2 className="text-2xl font-display font-semibold">Project inquiry</h2>
//             <p className="text-sm text-muted-foreground mt-1">Share a few details — we'll come back with scope, schedule and a quote.</p>

//             <div className="mt-6 grid sm:grid-cols-2 gap-4">
//               {[
//                 { l: "Full name", t: "text", p: "Jane Engineer" },
//                 { l: "Company", t: "text", p: "Acme Industries" },
//                 { l: "Email", t: "email", p: "jane@acme.com" },
//                 { l: "Phone", t: "tel", p: "+91 …" },
//               ].map((f) => (
//                 <label key={f.l} className="block">
//                   <span className="text-xs font-semibold text-foreground/70">{f.l}</span>
//                   <input required type={f.t} placeholder={f.p} className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm transition" />
//                 </label>
//               ))}
//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-foreground/70">Project type</span>
//                 <select className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm">
//                   <option>PEB Building</option><option>Structural Steel</option><option>Industrial Shed</option><option>Roofing System</option><option>Civil Structural</option><option>Other</option>
//                 </select>
//               </label>
//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-foreground/70">Tell us more</span>
//                 <textarea rows={5} placeholder="Scope, location, timeline…" className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm resize-none" />
//               </label>
//             </div>

//             <button type="submit" className="mt-6 btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
//               {sent ? (<><CheckCircle2 className="w-4 h-4" /> Sent — we'll be in touch</>) : (<>Send inquiry <Send className="w-4 h-4" /></>)}
//             </button>
//           </motion.form>
//         </div>
//       </section>
//     </>
//   );
// }




// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Epitome Steel" },
//       { name: "description", content: "Talk to our project engineers. Get a quote within 48 hours for steel structures, PEB buildings and industrial construction." },
//       { property: "og:title", content: "Contact — Epitome Steel" },
//       { property: "og:description", content: "Start your next steel project with us." },
//       { property: "og:url", content: "/contact" },
//     ],
//     links: [{ rel: "canonical", href: "/contact" }],
//   }),
//   component: ContactPage,
// });

// function ContactPage() {
//   const [sent, setSent] = useState(false);
//   return (
//     <>
//       <PageHero eyebrow="Contact" title="Let's engineer something exceptional." subtitle="Tell us about your project. A senior engineer will respond within one business day." />
//       <section className="pb-24 mt-12">
//         <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-6">
//           <div className="lg:col-span-5 space-y-4">
//             {[
//               { i: MapPin, t: "Head Office", d: "EPITOME STEEL PRIVATE LIMITED, 11, 3rd Floor, Astitva Building, Railway Parallel Road, Nehru Nagar, Seshadripuram, Bengaluru – 560020" },
//               { i: Phone, t: "Phone", d: "+91 9538204699" },
//               { i: Mail, t: "Email", d: "epitomesteelpvtltd@gmail.com" },
//               { i: MessageCircle, t: "WhatsApp", d: "+91 9538204699 — Chat instantly with our engineering desk" },
//             ].map((c) => (
//               <div key={c.t} className="glass-card p-5 flex gap-4">
//                 <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white shrink-0"><c.i className="w-5 h-5" /></div>
//                 <div>
//                   <div className="text-[11px] uppercase tracking-widest text-[--brand-deep] font-semibold">{c.t}</div>
//                   <div className="text-sm mt-1">{c.d}</div>
//                 </div>
//               </div>
//             ))}
//             <div className="glass-card overflow-hidden">
//               <iframe
//                 title="Map"
//                 src="https://www.google.com/maps?q=Seshadripuram+Bengaluru+560020&output=embed"
//                 className="w-full h-64 grayscale-[20%] contrast-90"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           <motion.form
//             onSubmit={(e) => { e.preventDefault(); setSent(true); }}
//             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             className="lg:col-span-7 glass-card p-7 sm:p-9"
//           >
//             <h2 className="text-2xl font-display font-semibold">Project inquiry</h2>
//             <p className="text-sm text-muted-foreground mt-1">Share a few details — we'll come back with scope, schedule and a quote.</p>

//             <div className="mt-6 grid sm:grid-cols-2 gap-4">
//               {[
//                 { l: "Full name", t: "text", p: "Jane Engineer" },
//                 { l: "Company", t: "text", p: "Acme Industries" },
//                 { l: "Email", t: "email", p: "jane@acme.com" },
//                 { l: "Phone", t: "tel", p: "+91 …" },
//               ].map((f) => (
//                 <label key={f.l} className="block">
//                   <span className="text-xs font-semibold text-foreground/70">{f.l}</span>
//                   <input required type={f.t} placeholder={f.p} className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm transition" />
//                 </label>
//               ))}
//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-foreground/70">Project type</span>
//                 <select className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm">
//                   <option>PEB Building</option><option>Structural Steel</option><option>Industrial Shed</option><option>Roofing System</option><option>Civil Structural</option><option>Other</option>
//                 </select>
//               </label>
//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-foreground/70">Tell us more</span>
//                 <textarea rows={5} placeholder="Scope, location, timeline…" className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm resize-none" />
//               </label>
//             </div>

//             <button type="submit" className="mt-6 btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
//               {sent ? (<><CheckCircle2 className="w-4 h-4" /> Sent — we'll be in touch</>) : (<>Send inquiry <Send className="w-4 h-4" /></>)}
//             </button>
//           </motion.form>
//         </div>
//       </section>
//     </>
//   );
// }





// // frontend/src/routes/contact.tsx
// import { createFileRoute } from "@tanstack/react-router";
// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

// interface ContactForm {
//     full_name: string;
//     company: string;
//     email: string;
//     phone: string;
//     project_type: string;
//     message: string;
// }

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Epitome Steel" },
//       { name: "description", content: "Talk to our project engineers. Get a quote within 48 hours for steel structures, PEB buildings and industrial construction." },
//       { property: "og:title", content: "Contact — Epitome Steel" },
//       { property: "og:description", content: "Start your next steel project with us." },
//       { property: "og:url", content: "/contact" },
//     ],
//     links: [{ rel: "canonical", href: "/contact" }],
//   }),
//   component: ContactPage,
// });

// function ContactPage() {
//   const [formData, setFormData] = useState<ContactForm>({
//     full_name: '',
//     company: '',
//     email: '',
//     phone: '',
//     project_type: 'PEB Building',
//     message: ''
//   });
//   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
//   const [errorMessage, setErrorMessage] = useState('');
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('submitting');
//     setErrorMessage('');

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to submit');
//       }

//       setStatus('success');
//       if (formRef.current) {
//         formRef.current.reset();
//       }
//       // Reset form data
//       setFormData({
//         full_name: '',
//         company: '',
//         email: '',
//         phone: '',
//         project_type: 'PEB Building',
//         message: ''
//       });
//     } catch (error) {
//       setStatus('error');
//       setErrorMessage(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
//     }
//   };

//   return (
//     <>
//       <PageHero eyebrow="Contact" title="Let's engineer something exceptional." subtitle="Tell us about your project. A senior engineer will respond within one business day." />
//       <section className="pb-24 mt-12">
//         <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-6">
//           {/* Contact Info */}
//           <div className="lg:col-span-5 space-y-4">
//             {[
//               { i: MapPin, t: "Head Office", d: "EPITOME STEEL PRIVATE LIMITED, 11, 3rd Floor, Astitva Building, Railway Parallel Road, Nehru Nagar, Seshadripuram, Bengaluru – 560020" },
//               { i: Phone, t: "Phone", d: "+91 9538204699" },
//               { i: Mail, t: "Email", d: "epitomesteelpvtltd@gmail.com" },
//               { i: MessageCircle, t: "WhatsApp", d: "+91 9538204699 — Chat instantly with our engineering desk" },
//             ].map((c) => (
//               <div key={c.t} className="glass-card p-5 flex gap-4">
//                 <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[--brand] to-[--brand-sky] text-white shrink-0"><c.i className="w-5 h-5" /></div>
//                 <div>
//                   <div className="text-[11px] uppercase tracking-widest text-[--brand-deep] font-semibold">{c.t}</div>
//                   <div className="text-sm mt-1">{c.d}</div>
//                 </div>
//               </div>
//             ))}
//             <div className="glass-card overflow-hidden">
//               <iframe
//                 title="Map"
//                 src="https://www.google.com/maps?q=Seshadripuram+Bengaluru+560020&output=embed"
//                 className="w-full h-64 grayscale-[20%] contrast-90"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* Contact Form */}
//           <motion.form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, y: 20 }} 
//             whileInView={{ opacity: 1, y: 0 }} 
//             viewport={{ once: true }}
//             className="lg:col-span-7 glass-card p-7 sm:p-9"
//           >
//             <h2 className="text-2xl font-display font-semibold">Project inquiry</h2>
//             <p className="text-sm text-muted-foreground mt-1">Share a few details — we'll come back with scope, schedule and a quote.</p>

//             {status === 'error' && (
//               <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2">
//                 <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
//                 <p className="text-sm text-red-700">{errorMessage}</p>
//               </div>
//             )}

//             {status === 'success' && (
//               <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-2">
//                 <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
//                 <p className="text-sm text-green-700">Thank you! Our team will get back to you within 24 hours.</p>
//               </div>
//             )}

//             <div className="mt-6 grid sm:grid-cols-2 gap-4">
//               <label className="block">
//                 <span className="text-xs font-semibold text-foreground/70">Full name *</span>
//                 <input 
//                   required 
//                   type="text" 
//                   name="full_name"
//                   value={formData.full_name}
//                   onChange={handleChange}
//                   placeholder="Jane Engineer" 
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm transition" 
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-xs font-semibold text-foreground/70">Company</span>
//                 <input 
//                   type="text" 
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   placeholder="Acme Industries" 
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm transition"
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-xs font-semibold text-foreground/70">Email *</span>
//                 <input 
//                   required 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="jane@acme.com" 
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm transition"
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-xs font-semibold text-foreground/70">Phone</span>
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+91 …" 
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm transition"
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//               </label>
//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-foreground/70">Project type</span>
//                 <select 
//                   name="project_type"
//                   value={formData.project_type}
//                   onChange={handleChange}
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm"
//                   disabled={status === 'submitting' || status === 'success'}
//                 >
//                   <option value="PEB Building">PEB Building</option>
//                   <option value="Structural Steel">Structural Steel</option>
//                   <option value="Industrial Shed">Industrial Shed</option>
//                   <option value="Roofing System">Roofing System</option>
//                   <option value="Civil Structural">Civil Structural</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </label>
//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-foreground/70">Tell us more *</span>
//                 <textarea 
//                   required 
//                   rows={5} 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Scope, location, timeline…" 
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-border focus:border-[--brand] outline-none text-sm resize-none"
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//               </label>
//             </div>

//             <button 
//               type="submit" 
//               className="mt-6 btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
//               disabled={status === 'submitting' || status === 'success'}
//             >
//               {status === 'submitting' ? (
//                 <>Submitting...</>
//               ) : status === 'success' ? (
//                 <><CheckCircle2 className="w-4 h-4" /> Sent successfully</>
//               ) : (
//                 <>Send inquiry <Send className="w-4 h-4" /></>
//               )}
//             </button>
//           </motion.form>
//         </div>
//       </section>
//     </>
//   );
// }


// // frontend/src/routes/contact.tsx
// import { createFileRoute } from "@tanstack/react-router";
// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { PageHero } from "@/components/site/PageHero";
// import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// // API URL - make sure this matches your backend
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// interface ContactForm {
//     full_name: string;
//     company: string;
//     email: string;
//     phone: string;
//     project_type: string;
//     message: string;
// }

// interface ValidationError {
//     msg: string;
//     param: string;
//     location: string;
// }

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Epitome Steel" },
//       { name: "description", content: "Talk to our project engineers. Get a quote within 48 hours for steel structures, PEB buildings and industrial construction." },
//       { property: "og:title", content: "Contact — Epitome Steel" },
//       { property: "og:description", content: "Start your next steel project with us." },
//       { property: "og:url", content: "/contact" },
//     ],
//     links: [{ rel: "canonical", href: "/contact" }],
//   }),
//   component: ContactPage,
// });

// function ContactPage() {
//   const [formData, setFormData] = useState<ContactForm>({
//     full_name: '',
//     company: '',
//     email: '',
//     phone: '',
//     project_type: 'PEB Building',
//     message: ''
//   });
//   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (validationErrors.length > 0) {
//       setValidationErrors(prev => prev.filter(err => err.param !== name));
//     }
//   };

//  const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('submitting');
//     setErrorMessage('');
//     setValidationErrors([]);

//     try {
//       console.log('📤 Submitting form to:', `${API_URL}/api/contact`);
//       console.log('📝 Form data:', formData);

//       // Add timeout to fetch
//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

//       const response = await fetch(`${API_URL}/api/contact`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(formData),
//         signal: controller.signal
//       });

//       clearTimeout(timeoutId);

//       console.log('📥 Response status:', response.status);
//       console.log('📥 Response headers:', response.headers);

//       const contentType = response.headers.get('content-type');
//       console.log('📥 Content-Type:', contentType);

//       if (!response.ok) {
//         // Try to get error message from response
//         let errorMessage = 'Failed to submit. Please try again.';
//         try {
//           const errorData = await response.json();
//           console.log('📥 Error data:', errorData);
//           if (errorData.error) {
//             errorMessage = errorData.error;
//           }
//           if (errorData.details && Array.isArray(errorData.details)) {
//             setValidationErrors(errorData.details);
//             const errorMessages = errorData.details.map((err: ValidationError) => err.msg).join(', ');
//             errorMessage = errorMessages;
//           }
//         } catch (e) {
//           // If response is not JSON, try to get text
//           try {
//             const text = await response.text();
//             console.log('📥 Error text:', text);
//             errorMessage = text || errorMessage;
//           } catch (textError) {
//             console.error('Could not parse error response');
//           }
//         }
//         throw new Error(errorMessage);
//       }

//       // Parse successful response
//       let data;
//       try {
//         data = await response.json();
//         console.log('📦 Response data:', data);
//       } catch (parseError) {
//         console.error('❌ Failed to parse JSON response:', parseError);
//         throw new Error('Server returned an invalid response. Please try again.');
//       }

//       setStatus('success');
//       if (formRef.current) {
//         formRef.current.reset();
//       }
//       setFormData({
//         full_name: '',
//         company: '',
//         email: '',
//         phone: '',
//         project_type: 'PEB Building',
//         message: ''
//       });

//       setTimeout(() => {
//         setStatus('idle');
//       }, 10000);

//     } catch (error) {
//       console.error('❌ Submit error:', error);
      
//       // Handle abort error
//       if (error instanceof Error && error.name === 'AbortError') {
//         setErrorMessage('Request timed out. Please try again.');
//       } else {
//         setErrorMessage(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
//       }
      
//       setStatus('error');
      
//       setTimeout(() => {
//         setStatus('idle');
//         setErrorMessage('');
//       }, 10000);
//     }
//   };
//   const getFieldError = (fieldName: string) => {
//     const error = validationErrors.find(err => err.param === fieldName);
//     return error ? error.msg : null;
//   };

//   return (
//     <>
//       <PageHero eyebrow="Contact" title="Let's engineer something exceptional." subtitle="Tell us about your project. A senior engineer will respond within one business day." />
//       <section className="pb-24 mt-12">
//         <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-6">
//           {/* Contact Info */}
//           <div className="lg:col-span-5 space-y-4">
//             {[
//               { i: MapPin, t: "Head Office", d: "EPITOME STEEL PRIVATE LIMITED, 11, 3rd Floor, Astitva Building, Railway Parallel Road, Nehru Nagar, Seshadripuram, Bengaluru – 560020" },
//               { i: Phone, t: "Phone", d: "+91 9538204699" },
//               { i: Mail, t: "Email", d: "epitomesteelpvtltd@gmail.com" },
//               { i: MessageCircle, t: "WhatsApp", d: "+91 9538204699 — Chat instantly with our engineering desk" },
//             ].map((c) => (
//               <div key={c.t} className="glass-card p-5 flex gap-4">
//                 <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shrink-0">
//                   <c.i className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <div className="text-[11px] uppercase tracking-widest text-blue-700 font-semibold">{c.t}</div>
//                   <div className="text-sm mt-1">{c.d}</div>
//                 </div>
//               </div>
//             ))}
//             <div className="glass-card overflow-hidden">
//               <iframe
//                 title="Map"
//                 src="https://www.google.com/maps?q=Seshadripuram+Bengaluru+560020&output=embed"
//                 className="w-full h-64 grayscale-[20%] contrast-90"
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </div>
//           </div>

//           {/* Contact Form */}
//           <motion.form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, y: 20 }} 
//             whileInView={{ opacity: 1, y: 0 }} 
//             viewport={{ once: true }}
//             className="lg:col-span-7 glass-card p-7 sm:p-9"
//             noValidate
//           >
//             <h2 className="text-2xl font-display font-semibold">Project inquiry</h2>
//             <p className="text-sm text-gray-500 mt-1">Share a few details — we'll come back with scope, schedule and a quote.</p>

//             {/* Error Message */}
//             {status === 'error' && errorMessage && (
//               <motion.div 
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2"
//               >
//                 <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-sm text-red-700">{errorMessage}</p>
//                   {validationErrors.length > 0 && (
//                     <ul className="mt-2 text-xs text-red-600 list-disc list-inside">
//                       {validationErrors.map((err, index) => (
//                         <li key={index}>{err.msg}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </motion.div>
//             )}

//             {/* Success Message */}
//             {status === 'success' && (
//               <motion.div 
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-2"
//               >
//                 <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-sm text-green-700">Thank you! Our team will get back to you within 24 hours.</p>
//                   <p className="text-xs text-green-600 mt-1">We've received your inquiry and will respond shortly.</p>
//                 </div>
//               </motion.div>
//             )}

//             <div className="mt-6 grid sm:grid-cols-2 gap-4">
//               <label className="block">
//                 <span className="text-xs font-semibold text-gray-700">
//                   Full name <span className="text-red-500">*</span>
//                 </span>
//                 <input 
//                   required 
//                   type="text" 
//                   name="full_name"
//                   value={formData.full_name}
//                   onChange={handleChange}
//                   placeholder="Jane Engineer" 
//                   className={`mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border ${
//                     getFieldError('full_name') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
//                   } outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed`}
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//                 {getFieldError('full_name') && (
//                   <p className="mt-1 text-xs text-red-500">{getFieldError('full_name')}</p>
//                 )}
//               </label>

//               <label className="block">
//                 <span className="text-xs font-semibold text-gray-700">Company</span>
//                 <input 
//                   type="text" 
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   placeholder="Acme Industries" 
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//               </label>

//               <label className="block">
//                 <span className="text-xs font-semibold text-gray-700">
//                   Email <span className="text-red-500">*</span>
//                 </span>
//                 <input 
//                   required 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="jane@acme.com" 
//                   className={`mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border ${
//                     getFieldError('email') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
//                   } outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed`}
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//                 {getFieldError('email') && (
//                   <p className="mt-1 text-xs text-red-500">{getFieldError('email')}</p>
//                 )}
//               </label>

//               <label className="block">
//                 <span className="text-xs font-semibold text-gray-700">Phone</span>
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+91 …" 
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//               </label>

//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-gray-700">Project type</span>
//                 <select 
//                   name="project_type"
//                   value={formData.project_type}
//                   onChange={handleChange}
//                   className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 outline-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
//                   disabled={status === 'submitting' || status === 'success'}
//                 >
//                   <option value="PEB Building">PEB Building</option>
//                   <option value="Structural Steel">Structural Steel</option>
//                   <option value="Industrial Shed">Industrial Shed</option>
//                   <option value="Roofing System">Roofing System</option>
//                   <option value="Civil Structural">Civil Structural</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </label>

//               <label className="block sm:col-span-2">
//                 <span className="text-xs font-semibold text-gray-700">
//                   Tell us more <span className="text-red-500">*</span>
//                 </span>
//                 <textarea 
//                   required 
//                   rows={5} 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Scope, location, timeline…" 
//                   className={`mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border ${
//                     getFieldError('message') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
//                   } outline-none text-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
//                   disabled={status === 'submitting' || status === 'success'}
//                 />
//                 {getFieldError('message') && (
//                   <p className="mt-1 text-xs text-red-500">{getFieldError('message')}</p>
//                 )}
//               </label>
//             </div>

//             {/* ✅ FIXED Submit Button - Always visible with proper styling */}
//             <button 
//               type="submit" 
//               className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//               disabled={status === 'submitting' || status === 'success'}
//             >
//               {status === 'submitting' ? (
//                 <>
//                   <Loader2 className="w-4 h-4 animate-spin" />
//                   Submitting...
//                 </>
//               ) : status === 'success' ? (
//                 <>
//                   <CheckCircle2 className="w-4 h-4" />
//                   Sent successfully
//                 </>
//               ) : (
//                 <>
//                   Send inquiry
//                   <Send className="w-4 h-4" />
//                 </>
//               )}
//             </button>

//             <p className="mt-4 text-xs text-gray-500">
//               <span className="text-red-500">*</span> Required fields. Your information is secure and will not be shared.
//             </p>
//           </motion.form>
//         </div>
//       </section>
//     </>
//   );
// }






// frontend/src/routes/contact.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import baseurl from "@/BaseUrl/BaseUrl";
import { API_ENDPOINTS } from "@/lib/api";

interface ContactForm {
    full_name: string;
    company: string;
    email: string;
    phone: string;
    project_type: string;
    message: string;
}

interface ValidationError {
    msg: string;
    param: string;
    location: string;
}

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
  const [formData, setFormData] = useState<ContactForm>({
    full_name: '',
    company: '',
    email: '',
    phone: '',
    project_type: 'PEB Building',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationErrors.length > 0) {
      setValidationErrors(prev => prev.filter(err => err.param !== name));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setValidationErrors([]);

    try {
      const apiUrl = `${baseurl}${API_ENDPOINTS.CONTACT}`;
      console.log('📤 Submitting form to:', apiUrl);
      console.log('📝 Form data:', formData);

      // Add timeout to fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', response.headers);

      const contentType = response.headers.get('content-type');
      console.log('📥 Content-Type:', contentType);

      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = 'Failed to submit. Please try again.';
        try {
          const errorData = await response.json();
          console.log('📥 Error data:', errorData);
          if (errorData.error) {
            errorMessage = errorData.error;
          }
          if (errorData.details && Array.isArray(errorData.details)) {
            setValidationErrors(errorData.details);
            const errorMessages = errorData.details.map((err: ValidationError) => err.msg).join(', ');
            errorMessage = errorMessages;
          }
        } catch (e) {
          // If response is not JSON, try to get text
          try {
            const text = await response.text();
            console.log('📥 Error text:', text);
            errorMessage = text || errorMessage;
          } catch (textError) {
            console.error('Could not parse error response');
          }
        }
        throw new Error(errorMessage);
      }

      // Parse successful response
      let data;
      try {
        data = await response.json();
        console.log('📦 Response data:', data);
      } catch (parseError) {
        console.error('❌ Failed to parse JSON response:', parseError);
        throw new Error('Server returned an invalid response. Please try again.');
      }

      setStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({
        full_name: '',
        company: '',
        email: '',
        phone: '',
        project_type: 'PEB Building',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
      }, 10000);

    } catch (error) {
      console.error('❌ Submit error:', error);
      
      // Handle abort error
      if (error instanceof Error && error.name === 'AbortError') {
        setErrorMessage('Request timed out. Please try again.');
      } else {
        setErrorMessage(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
      }
      
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 10000);
    }
  };

  const getFieldError = (fieldName: string) => {
    const error = validationErrors.find(err => err.param === fieldName);
    return error ? error.msg : null;
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's engineer something exceptional." subtitle="Tell us about your project. A senior engineer will respond within one business day." />
      <section className="pb-24 mt-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
  i: MapPin,
  t: "Head Office",
  d: (
    <>
      <span className="font-semibold">
        EPITOME STEEL PRIVATE LIMITED
      </span>
      <br />
      11, 3rd Floor, Astitva Building, Railway Parallel Road, Nehru Nagar,
      Seshadripuram, Bengaluru – 560020
    </>
  ),
},
              { i: Phone, t: "Phone", d: "+91 9538204699" },
              { i: Mail, t: "Email", d: "epitomesteelpvtltd@gmail.com" },
              { i: MessageCircle, t: "WhatsApp", d: "+91 9538204699 — Chat instantly with our engineering desk" },
            ].map((c) => (
              <div key={c.t} className="glass-card p-5 flex gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shrink-0">
                  <c.i className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-blue-700 font-semibold">{c.t}</div>
                  <div className="text-sm mt-1">{c.d}</div>
                </div>
              </div>
            ))}
            <div className="glass-card overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Seshadripuram+Bengaluru+560020&output=embed"
                className="w-full h-64 grayscale-[20%] contrast-90"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-7 sm:p-9"
            noValidate
          >
            <h2 className="text-2xl font-display font-semibold">Project inquiry</h2>
            <p className="text-sm text-gray-500 mt-1">Share a few details — we'll come back with scope, schedule and a quote.</p>

            {/* Error Message */}
            {status === 'error' && errorMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2"
              >
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-red-700">{errorMessage}</p>
                  {validationErrors.length > 0 && (
                    <ul className="mt-2 text-xs text-red-600 list-disc list-inside">
                      {validationErrors.map((err, index) => (
                        <li key={index}>{err.msg}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}

            {/* Success Message */}
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-700">Thank you! Our team will get back to you within 24 hours.</p>
                  <p className="text-xs text-green-600 mt-1">We've received your inquiry and will respond shortly.</p>
                </div>
              </motion.div>
            )}

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-semibold text-gray-700">
                  Full name <span className="text-red-500">*</span>
                </span>
                <input 
                  required 
                  type="text" 
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Jane Engineer" 
                  className={`mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                    getFieldError('full_name') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  } outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled={status === 'submitting' || status === 'success'}
                />
                {getFieldError('full_name') && (
                  <p className="mt-1 text-xs text-red-500">{getFieldError('full_name')}</p>
                )}
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-gray-700">Company</span>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Industries" 
                  className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'submitting' || status === 'success'}
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-gray-700">
                  Email <span className="text-red-500">*</span>
                </span>
                <input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@acme.com" 
                  className={`mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                    getFieldError('email') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  } outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled={status === 'submitting' || status === 'success'}
                />
                {getFieldError('email') && (
                  <p className="mt-1 text-xs text-red-500">{getFieldError('email')}</p>
                )}
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-gray-700">Phone</span>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 …" 
                  className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 outline-none text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'submitting' || status === 'success'}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-gray-700">Project type</span>
                <select 
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  className="mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 focus:border-blue-500 outline-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'submitting' || status === 'success'}
                >
                  <option value="PEB Building">PEB Building</option>
                  <option value="Structural Steel">Structural Steel</option>
                  <option value="Industrial Shed">Industrial Shed</option>
                  <option value="Roofing System">Roofing System</option>
                  <option value="Civil Structural">Civil Structural</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-gray-700">
                  Tell us more <span className="text-red-500">*</span>
                </span>
                <textarea 
                  required 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Scope, location, timeline…" 
                  className={`mt-1.5 w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                    getFieldError('message') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  } outline-none text-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled={status === 'submitting' || status === 'success'}
                />
                {getFieldError('message') && (
                  <p className="mt-1 text-xs text-red-500">{getFieldError('message')}</p>
                )}
              </label>
            </div>

            <button 
              type="submit" 
              className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={status === 'submitting' || status === 'success'}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Sent successfully
                </>
              ) : (
                <>
                  Send inquiry
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="mt-4 text-xs text-gray-500">
              <span className="text-red-500">*</span> Required fields. Your information is secure and will not be shared.
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
}