
// import { useState } from "react";
// import {
//   ArrowRight,
//   Download,
//   Building2,
//   Factory,
//   Layers3,
//   Warehouse,
//   Sheet,
//   Shield,
//   Construction,
//   PanelTop,
//   Wind,
//   Cog,
//   DoorClosed,
//   Fan,
//   LayoutGrid,
//   LucideIcon,
// } from "lucide-react";

// // Images
// import pebImg from "@/assets/project-peb.jpg";
// import steelImg from "@/assets/product-shed.jpg";
// import roofingImg from "@/assets/product-roofing.jpg";
// import fabricationImg from "@/assets/hero-factory.jpg";

// interface Product {
//   category: string;
//   title: string;
//   image: string;
//   icon: LucideIcon;
//   description: string;
// }

// const products: Product[] = [
//   {
//     category: "PEB",
//     title: "Pre-Engineered Buildings",
//     image: pebImg,
//     icon: Building2,
//     description:
//       "Cost-effective and durable steel building solutions for industrial and commercial applications.",
//   },
//   {
//     category: "Steel",
//     title: "Multi-Storey Steel Buildings",
//     image: steelImg,
//     icon: Factory,
//     description:
//       "High-strength steel structures designed for multi-level commercial and industrial projects.",
//   },
//   {
//     category: "Steel",
//     title: "Mezzanine Flooring Systems",
//     image: steelImg,
//     icon: Layers3,
//     description:
//       "Maximize usable space with custom-designed mezzanine flooring solutions.",
//   },
//   {
//     category: "Roofing",
//     title: "Color Coated Galvalume Sheets",
//     image: roofingImg,
//     icon: Sheet,
//     description:
//       "Premium-quality roofing sheets offering corrosion resistance and long-lasting performance.",
//   },
//   {
//     category: "Roofing",
//     title: "Galvanized Sheets",
//     image: roofingImg,
//     icon: Shield,
//     description:
//       "Strong and weather-resistant galvanized sheets suitable for industrial applications.",
//   },
//   {
//     category: "Roofing",
//     title: "GI Decking Sheets",
//     image: roofingImg,
//     icon: Warehouse,
//     description:
//       "High-performance decking sheets for roofing and flooring construction projects.",
//   },
//   {
//     category: "Steel",
//     title: "Steel Staircases",
//     image: steelImg,
//     icon: Construction,
//     description:
//       "Custom-engineered steel staircases designed for safety, durability, and aesthetics.",
//   },
//   {
//     category: "Roofing",
//     title: "Polycarbonate Sheets",
//     image: roofingImg,
//     icon: PanelTop,
//     description:
//       "Lightweight, impact-resistant sheets ideal for skylights and transparent roofing.",
//   },
//   {
//     category: "Fabrication",
//     title: "Customized Fabrication",
//     image: fabricationImg,
//     icon: Cog,
//     description:
//       "Tailor-made fabrication solutions meeting specific industrial and commercial requirements.",
//   },
//   {
//     category: "Steel",
//     title: "Z & C Purlins",
//     image: steelImg,
//     icon: LayoutGrid,
//     description:
//       "Precision-manufactured purlins providing superior structural support for roofing systems.",
//   },
//   {
//     category: "Roofing",
//     title: "Turbo Ventilators",
//     image: roofingImg,
//     icon: Wind,
//     description:
//       "Energy-efficient ventilation systems for maintaining healthy airflow in industrial spaces.",
//   },
//   {
//     category: "Steel",
//     title: "Steel Rolling Shutters",
//     image: steelImg,
//     icon: DoorClosed,
//     description:
//       "Heavy-duty rolling shutters offering enhanced security and operational convenience.",
//   },
//   {
//     category: "Roofing",
//     title: "Ridge Ventilators",
//     image: roofingImg,
//     icon: Fan,
//     description:
//       "Advanced ridge ventilation solutions for improved temperature control and airflow.",
//   },
//   {
//     category: "Roofing",
//     title: "Louvers",
//     image: roofingImg,
//     icon: Wind,
//     description:
//       "Durable architectural louvers designed for ventilation, aesthetics, and weather protection.",
//   },
// ];

// export default function ProductsCards() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Steel",
//     "PEB",
//     "Roofing",
//     "Fabrication",
//   ];

//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (item) => item.category === activeCategory
//         );

//   return (
//     <section className="bg-[#f5f7fb] py-24">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center mb-16">
//           <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
//             Our Products & Services
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
//             Structural Solutions
//             <span className="block text-blue-600">
//               Roofing & Sheeting Experts
//             </span>
//           </h2>

//           <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
//             We undertake fabrication job works and provide premium roofing,
//             sheeting, structural steel, ventilation systems, and industrial
//             products tailored for commercial and industrial projects.
//           </p>
//         </div>

//         {/* Category Filters */}

//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`rounded-full px-8 py-4 font-semibold transition-all duration-300
//               ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-600 shadow-lg scale-105"
//                   : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-400"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Product Cards */}

//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//   {filteredProducts.map((product, index) => (
//     <div
//       key={index}
//       className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
//     >
//       {/* Image */}
//       <div className="relative h-[220px] overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="h-full w-full object-cover transition duration-700 hover:scale-110"
//         />

//         <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
//           {product.category}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="mb-2 text-xl font-bold text-gray-900">
//           {product.title}
//         </h3>

//         <p className="mb-4 text-sm leading-relaxed text-gray-600">
//           {product.description}
//         </p>

//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white">
//             Inquire
//             <ArrowRight size={16} />
//           </button>

//           <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">
//             <Download size={16} />
//             Brochure
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
//     </div>

//       </div>
//     </section>
//   );
// }







// import { useState } from "react";
// import {
//   ArrowRight,
//   Download,
//   Building2,
//   Factory,
//   Layers3,
//   Warehouse,
//   Sheet,
//   Shield,
//   Construction,
//   PanelTop,
//   Wind,
//   Cog,
//   DoorClosed,
//   Fan,
//   LayoutGrid,
//   LucideIcon,
// } from "lucide-react";

// // Images
// import pebImg from "@/assets/project-peb.jpg";
// import steelImg from "@/assets/product-shed.jpg";
// import roofingImg from "@/assets/product-roofing.jpg";
// import fabricationImg from "@/assets/customizedheavyfabrication.jpg";
// import mezzanineImg from "@/assets/mazennineflooring.jpg";
// import galvanizedImg from "@/assets/steel1.jpg";
// import deckingImg from "@/assets/Gideckking.jpg";
// import staircaseImg from "@/assets/steel3.jpg";
// import polycarbonateImg from "@/assets/polycarbonate.jpg";
// import purlinImg from "@/assets/Z&C.jpg";
// import turboImg from "@/assets/truboventilators.jpg";
// import rollingShutterImg from "@/assets/stellrollingshutter.jpg";
// import ridgeVentilatorImg from "@/assets/ridgeventilators.jpg";
// import louversImg from "@/assets/louvers.jpg";

// interface Product {
//   category: string;
//   title: string;
//   image: string;
//   icon: LucideIcon;
//   description: string;
// }

// const products: Product[] = [
//   {
//     category: "PEB",
//     title: "Pre-Engineered Buildings",
//     image: pebImg,
//     icon: Building2,
//     description:
//       "Cost-effective and durable steel building solutions for industrial and commercial applications.",
//   },
//   {
//     category: "Steel",
//     title: "Multi-Storey Steel Buildings",
//     image: steelImg,
//     icon: Factory,
//     description:
//       "High-strength steel structures designed for multi-level commercial and industrial projects.",
//   },
//   {
//     category: "Steel",
//     title: "Mezzanine Flooring Systems",
//     image: mezzanineImg,
//     icon: Layers3,
//     description:
//       "Maximize usable space with custom-designed mezzanine flooring solutions.",
//   },
//   // {
//   //   category: "Roofing",
//   //   title: "Color Coated Galvalume Sheets",
//   //   image: roofingImg,
//   //   icon: Sheet,
//   //   description:
//   //     "Premium-quality roofing sheets offering corrosion resistance and long-lasting performance.",
//   // },
//   {
//     category: "Roofing",
//     title: "Color Coated Galvanized Sheets",
//     image: galvanizedImg,
//     icon: Shield,
//     description:
//       "Strong and weather-resistant galvanized sheets suitable for industrial applications.",
//   },
//   {
//     category: "Roofing",
//     title: "GI Decking Sheets",
//     image: deckingImg,
//     icon: Warehouse,
//     description:
//       "High-performance decking sheets for roofing and flooring construction projects.",
//   },
//   {
//     category: "Steel",
//     title: "Steel Staircases",
//     image: staircaseImg,
//     icon: Construction,
//     description:
//       "Custom-engineered steel staircases designed for safety, durability, and aesthetics.",
//   },
//   {
//     category: "Roofing",
//     title: "Polycarbonate Sheets",
//     image: polycarbonateImg,
//     icon: PanelTop,
//     description:
//       "Lightweight, impact-resistant sheets ideal for skylights and transparent roofing.",
//   },
//   {
//     category: "Fabrication",
//     title: "Customised & heavy fabrication ",
//     image: fabricationImg,
//     icon: Cog,
//     description:
//       "Tailor-made fabrication solutions meeting specific industrial and commercial requirements.",
//   },
//   {
//     category: "Steel",
//     title: "Z & C Purlins",
//     image: purlinImg,
//     icon: LayoutGrid,
//     description:
//       "Precision-manufactured purlins providing superior structural support for roofing systems.",
//   },
//   {
//     category: "Roofing",
//     title: "Turbo Ventilators",
//     image: turboImg,
//     icon: Wind,
//     description:
//       "Energy-efficient ventilation systems for maintaining healthy airflow in industrial spaces.",
//   },
//   {
//     category: "Steel",
//     title: "Steel Rolling Shutters",
//     image: rollingShutterImg,
//     icon: DoorClosed,
//     description:
//       "Heavy-duty rolling shutters offering enhanced security and operational convenience.",
//   },
//   {
//     category: "Roofing",
//     title: " Puf Panels",
//     image: ridgeVentilatorImg,
//     icon: Fan,
//     description:
//       "High-performance sandwich structures comprising a rigid insulated core bound between two protective metal or composite sheets.",
//   },
//   {
//     category: "Roofing",
//     title: "Louvers",
//     image: louversImg,
//     icon: Wind,
//     description:
//       "Durable architectural louvers designed for ventilation, aesthetics, and weather protection.",
//   },
// ];

// export default function ProductsCards() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Steel",
//     "PEB",
//     "Roofing",
//     "Fabrication",
//   ];

//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (item) => item.category === activeCategory
//         );

//   return (
//     <section className="bg-[#f5f7fb] py-24">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center mb-16">
//           <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
//             Our Products & Services
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
//             Structural Solutions
//             <span className="block text-blue-600">
//               Roofing & Sheeting Experts
//             </span>
//           </h2>

//           <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
//             We undertake fabrication job works and provide premium roofing,
//             sheeting, structural steel, ventilation systems, and industrial
//             products tailored for commercial and industrial projects.
//           </p>
//         </div>

//         {/* Category Filters */}

//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`rounded-full px-8 py-4 font-semibold transition-all duration-300
//               ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-600 shadow-lg scale-105"
//                   : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-400"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Product Cards */}

//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//   {filteredProducts.map((product, index) => (
//     <div
//       key={index}
//       className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
//     >
//       {/* Image */}
//       <div className="relative h-[220px] overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="h-full w-full object-cover transition duration-700 hover:scale-110"
//         />

//         <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
//           {product.category}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="mb-2 text-xl font-bold text-gray-900">
//           {product.title}
//         </h3>

//         <p className="mb-4 text-sm leading-relaxed text-gray-600">
//           {product.description}
//         </p>

//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white">
//             Inquire
//             <ArrowRight size={16} />
//           </button>

//           <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">
//             <Download size={16} />
//             Brochure
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
//     </div>

//       </div>
//     </section>
//   );
// }






// import { useState } from "react";
// import {
//   ArrowRight,
//   Download,
//   Building2,
//   Factory,
//   Layers3,
//   Warehouse,
//   Sheet,
//   Shield,
//   Construction,
//   PanelTop,
//   Wind,
//   Cog,
//   DoorClosed,
//   Fan,
//   LayoutGrid,
//   LucideIcon,
//   Home,
//   Trees,
// } from "lucide-react";

// // Images
// import pebImg from "@/assets/project-peb.jpg";
// import steelImg from "@/assets/product-shed.jpg";
// import roofingImg from "@/assets/product-roofing.jpg";
// import fabricationImg from "@/assets/customizedheavyfabrication.jpg";
// import mezzanineImg from "@/assets/mazennineflooring.jpg";
// import galvanizedImg from "@/assets/steel1.jpg";
// import deckingImg from "@/assets/Gideckking.jpg";
// import staircaseImg from "@/assets/steel3.jpg";
// import polycarbonateImg from "@/assets/polycarbonate.jpg";
// import purlinImg from "@/assets/Z&C.jpg";
// import turboImg from "@/assets/truboventilators2.jpg";
// import rollingShutterImg from "@/assets/stellrollingshutter.jpg";
// import ridgeVentilatorImg from "@/assets/ridgeventilators.jpg";
// import louversImg from "@/assets/louvers.jpg";
// // Import new images
// import steelBuildingImg from "@/assets/steelbulidingconstruction.jpg";
// import canopyImg from "@/assets/canopy.jpg";

// interface Product {
//   category: string;
//   title: string;
//   image: string;
//   icon: LucideIcon;
//   description: string;
// }

// const products: Product[] = [
//   {
//     category: "PEB",
//     title: "Pre-Engineered Buildings",
//     image: pebImg,
//     icon: Building2,
//     description:
//       "Cost-effective and durable steel building solutions for industrial and commercial applications.",
//   },
//   {
//     category: "Purlins",
//     title: "Multi-Storey Steel Buildings",
//     image: steelImg,
//     icon: Factory,
//     description:
//       "High-strength steel structures designed for multi-level commercial and industrial projects.",
//   },
//   {
//     category: "Purlins",
//     title: "Mezzanine Flooring Systems",
//     image: mezzanineImg,
//     icon: Layers3,
//     description:
//       "Maximize usable space with custom-designed mezzanine flooring solutions.",
//   },
//   {
//     category: "Purlins",
//     title: "Steel Building Construction",
//     image: steelBuildingImg,
//     icon: Home,
//     description:
//       "Complete steel building construction services from design to erection for warehouses, factories, and commercial spaces.",
//   },
//   {
//     category: "Purlins",
//     title: "Canopy",
//     image: canopyImg,
//     icon: Trees,
//     description:
//       "Custom-designed steel canopies for entrances, walkways, and outdoor spaces offering protection and aesthetic appeal.",
//   },
//   // {
//   //   category: "Roofing",
//   //   title: "Color Coated Galvalume Sheets",
//   //   image: roofingImg,
//   //   icon: Sheet,
//   //   description:
//   //     "Premium-quality roofing sheets offering corrosion resistance and long-lasting performance.",
//   // },
//   {
//     category: "Mazennine Floor",
//     title: "Color Coated Galvanized Sheets",
//     image: galvanizedImg,
//     icon: Shield,
//     description:
//       "Strong and weather-resistant galvanized sheets suitable for industrial applications.",
//   },
//   {
//     category: "Mazennine Floor",
//     title: "GI Decking Sheets",
//     image: deckingImg,
//     icon: Warehouse,
//     description:
//       "High-performance decking sheets for roofing and flooring construction projects.",
//   },
//   {
//     category: "Purlins",
//     title: "Steel Staircases",
//     image: staircaseImg,
//     icon: Construction,
//     description:
//       "Custom-engineered steel staircases designed for safety, durability, and aesthetics.",
//   },
//   {
//     category: "Mazennine Floor",
//     title: "Polycarbonate Sheets",
//     image: polycarbonateImg,
//     icon: PanelTop,
//     description:
//       "Lightweight, impact-resistant sheets ideal for skylights and transparent roofing.",
//   },
//   {
//     category: "Fabrication",
//     title: "Customised & heavy fabrication ",
//     image: fabricationImg,
//     icon: Cog,
//     description:
//       "Tailor-made fabrication solutions meeting specific industrial and commercial requirements.",
//   },
//   {
//     category: "Purlins",
//     title: "Z & C Purlins",
//     image: purlinImg,
//     icon: LayoutGrid,
//     description:
//       "Precision-manufactured purlins providing superior structural support for roofing systems.",
//   },
//   {
//     category: "Mazennine Floor",
//     title: "Turbo Ventilators",
//     image: turboImg,
//     icon: Wind,
//     description:
//       "Energy-efficient ventilation systems for maintaining healthy airflow in industrial spaces.",
//   },
//   {
//     category: "Purlins",
//     title: "Steel Rolling Shutters",
//     image: rollingShutterImg,
//     icon: DoorClosed,
//     description:
//       "Heavy-duty rolling shutters offering enhanced security and operational convenience.",
//   },
//   {
//     category: "Mazennine Floor",
//     title: " Puf Panels",
//     image: ridgeVentilatorImg,
//     icon: Fan,
//     description:
//       "High-performance sandwich structures comprising a rigid insulated core bound between two protective metal or composite sheets.",
//   },
//   {
//     category: "Mazennine Floor",
//     title: "Louvers",
//     image: louversImg,
//     icon: Wind,
//     description:
//       "Durable architectural louvers designed for ventilation, aesthetics, and weather protection.",
//   },
// ];

// export default function ProductsCards() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Purlins",
//     "PEB",
//     "Mazennine Floor",
//     "Fabrication",
//   ];

//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (item) => item.category === activeCategory
//         );

//   return (
//     <section className="bg-[#f5f7fb] py-24">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center mb-16">
//           <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
//             Our Products & Services
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
//             Structural Solutions
//             <span className="block text-blue-600">
//               Roofing & Sheeting Experts
//             </span>
//           </h2>

//           <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
//             We undertake fabrication job works and provide premium roofing,
//             sheeting, structural steel, ventilation systems, and industrial
//             products tailored for commercial and industrial projects.
//           </p>
//         </div>

//         {/* Category Filters */}

//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`rounded-full px-8 py-4 font-semibold transition-all duration-300
//               ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-600 shadow-lg scale-105"
//                   : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-400"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Product Cards */}

//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//   {filteredProducts.map((product, index) => (
//     <div
//       key={index}
//       className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
//     >
//       {/* Image */}
//       <div className="relative h-[220px] overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="h-full w-full object-cover transition duration-700 hover:scale-110"
//         />

//         <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
//           {product.category}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="mb-2 text-xl font-bold text-gray-900">
//           {product.title}
//         </h3>

//         <p className="mb-4 text-sm leading-relaxed text-gray-600">
//           {product.description}
//         </p>

//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white">
//             Inquire
//             <ArrowRight size={16} />
//           </button>

//           <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700">
//             <Download size={16} />
//             Brochure
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
//     </div>

//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import {
  ArrowRight,
  Download,
  Building2,
  Factory,
  Layers3,
  Warehouse,
  Sheet,
  Shield,
  Construction,
  PanelTop,
  Wind,
  Cog,
  DoorClosed,
  Fan,
  LayoutGrid,
  LucideIcon,
  Home,
  Trees,
  Package,
} from "lucide-react";

// Images
import pebImg from "@/assets/project-peb.jpg";
import steelImg from "@/assets/product-shed.jpg";
import roofingImg from "@/assets/product-roofing.jpg";
import fabricationImg from "@/assets/customizedheavyfabrication.jpg";
import mezzanineImg from "@/assets/mazennineflooring.jpg";
import galvanizedImg from "@/assets/steel1.jpg";
import deckingImg from "@/assets/Gideckking.jpg";
import staircaseImg from "@/assets/steelstaticases3.png";
import polycarbonateImg from "@/assets/polycarbonate.jpg";
import purlinImg from "@/assets/Z&C.jpg";
import turboImg from "@/assets/truboventilators2.jpg";
import rollingShutterImg from "@/assets/stellrollingshutter.jpg";
import ridgeVentilatorImg from "@/assets/ridgeventilators.jpg";
import louversImg from "@/assets/louvers.jpg";
// Import new images
import steelBuildingImg from "@/assets/steelbulidingconstruction.jpg";
import canopyImg from "@/assets/canopy.jpg";
// Import new combined image for Steel and Construction Materials
import constructionMaterialsImg from "@/assets/SteelandConstructionMaterials.jpg";

interface Product {
  category: string;
  title: string;
  image: string;
  icon: LucideIcon;
  description: string;
}

const products: Product[] = [
  {
    category: "Construction Materials",
    title: "Steel and Construction Materials",
    image: constructionMaterialsImg,
    icon: Package,
    description:
      "Premium quality steel sections, TMT bars, cement, and other essential construction materials for all types of building projects.",
  },
  {
    category: "PEB",
    title: "Pre-Engineered Buildings",
    image: pebImg,
    icon: Building2,
    description:
      "Cost-effective and durable steel building solutions for industrial and commercial applications.",
  },
  {
    category: "Purlins",
    title: "Multi-Storey Steel Buildings",
    image: steelImg,
    icon: Factory,
    description:
      "High-strength steel structures designed for multi-level commercial and industrial projects.",
  },
  {
    category: "Purlins",
    title: "Mezzanine Flooring Systems",
    image: mezzanineImg,
    icon: Layers3,
    description:
      "Maximize usable space with custom-designed mezzanine flooring solutions.",
  },
  {
    category: "Purlins",
    title: "Steel Building Construction",
    image: steelBuildingImg,
    icon: Home,
    description:
      "Complete steel building construction services from design to erection for warehouses, factories, and commercial spaces.",
  },
  {
    category: "Purlins",
    title: "Canopy",
    image: canopyImg,
    icon: Trees,
    description:
      "Custom-designed steel canopies for entrances, walkways, and outdoor spaces offering protection and aesthetic appeal.",
  },
  {
    category: "Mazennine Floor",
    title: "Color Coated Galvanized Sheets",
    image: galvanizedImg,
    icon: Shield,
    description:
      "Strong and weather-resistant galvanized sheets suitable for industrial applications.",
  },
  {
    category: "Mazennine Floor",
    title: "GI Decking Sheets",
    image: deckingImg,
    icon: Warehouse,
    description:
      "High-performance decking sheets for roofing and flooring construction projects.",
  },
  {
    category: "Purlins",
    title: "Steel Staircases",
    image: staircaseImg,
    icon: Construction,
    description:
      "Custom-engineered steel staircases designed for safety, durability, and aesthetics.",
  },
  {
    category: "Mazennine Floor",
    title: "Polycarbonate Sheets",
    image: polycarbonateImg,
    icon: PanelTop,
    description:
      "Lightweight, impact-resistant sheets ideal for skylights and transparent roofing.",
  },
  {
    category: "Fabrication",
    title: "Customised & Heavy Fabrication",
    image: fabricationImg,
    icon: Cog,
    description:
      "Tailor-made fabrication solutions meeting specific industrial and commercial requirements.",
  },
  {
    category: "Purlins",
    title: "Z & C Purlins",
    image: purlinImg,
    icon: LayoutGrid,
    description:
      "Precision-manufactured purlins providing superior structural support for roofing systems.",
  },
  {
    category: "Ventilators",
    title: "Turbo Ventilators",
    image: turboImg,
    icon: Wind,
    description:
      "Energy-efficient ventilation systems for maintaining healthy airflow in industrial spaces.",
  },
  {
    category: "Purlins",
    title: "Steel Rolling Shutters",
    image: rollingShutterImg,
    icon: DoorClosed,
    description:
      "Heavy-duty rolling shutters offering enhanced security and operational convenience.",
  },
  {
    category: "Mazennine Floor",
    title: "Puf Panels",
    image: ridgeVentilatorImg,
    icon: Fan,
    description:
      "High-performance sandwich structures comprising a rigid insulated core bound between two protective metal or composite sheets.",
  },
  {
    category: "Mazennine Floor",
    title: "Louvers",
    image: louversImg,
    icon: Wind,
    description:
      "Durable architectural louvers designed for ventilation, aesthetics, and weather protection.",
  },
];

export default function ProductsCards() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Construction Materials",
    "Purlins",
    "PEB",
    "Mazennine Floor",
    "Fabrication",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="bg-[#f5f7fb] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Products & Services
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Structural Solutions
            <span className="block text-blue-600">
              Roofing & Sheeting Experts
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
            We undertake fabrication job works and provide premium roofing,
            sheeting, structural steel, ventilation systems, and industrial
            products tailored for commercial and industrial projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-8 py-4 font-semibold transition-all duration-300
              ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-600 shadow-lg scale-105"
                  : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {product.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
                    Inquire
                    <ArrowRight size={16} />
                  </button>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400">
                    <Download size={16} />
                    Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}