import { motion } from "framer-motion";
import { CheckCircle, Building2, Factory, Warehouse } from "lucide-react";

import IndustrialBuilding from "@/assets/preengineeredbulidingschematic.jpg"; 

export default function EngineeringStructureSection() {
  const features = [
    "Pre-Engineered Building (PEB) Solutions",
    "Industrial & Manufacturing Facilities",
    "Structural Steel Design & Fabrication",
    "Warehouse & Logistics Infrastructure",
    "Mezzanine Floors & Crane Systems",
    "High-Quality Engineering Standards",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />

            <img
              src={IndustrialBuilding}
              alt="Industrial Structure"
              className="w-full rounded-3xl shadow-2xl border border-gray-200"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5">
              Engineering Excellence
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Advanced Industrial &
              <span className="text-blue-600"> Structural Building Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We specialize in designing and constructing high-performance
              industrial structures that combine durability, efficiency, and
              innovation. From warehouses and manufacturing plants to large-scale
              commercial facilities, our engineering solutions ensure optimal
              space utilization, safety, and long-term operational excellence.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-5">
              {/* <div className="bg-blue-50 rounded-2xl p-5 text-center">
                <Building2 className="mx-auto text-blue-600 mb-3" size={32} />
                <h4 className="text-2xl font-bold text-gray-900">500+</h4>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div> */}

              <div className="bg-orange-50 rounded-2xl p-5 text-center">
                <Factory className="mx-auto text-orange-600 mb-3" size={32} />
                <h4 className="text-2xl font-bold text-gray-900">20+</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 text-center">
                <Warehouse className="mx-auto text-green-600 mb-3" size={32} />
                <h4 className="text-2xl font-bold text-gray-900">100%</h4>
                <p className="text-sm text-gray-600">Quality Assurance</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


