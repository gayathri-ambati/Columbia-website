import steelImage from "@/assets/steel5.jpg"; // Replace with your image

export default function AboutEpitome() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              About Epitome Steel
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Building Stronger Structures
              </span>
              <br />
              <span className="text-gray-900">With Engineering Excellence</span>
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                Epitome Steel Private Limited is a specialized Pre-Engineered
                Building (PEB) and structural steel construction company
                delivering high-quality steel infrastructure solutions across
                industrial, commercial, and institutional sectors.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                We provide end-to-end services including design, fabrication,
                supply, and installation of customized steel buildings and
                structural components.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                With advanced manufacturing capabilities and skilled technical
                expertise, we ensure precision, durability, and efficiency in
                every project.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Our solutions are designed to meet modern construction demands
                while ensuring cost-effectiveness, faster execution, and
                superior structural performance.
              </p>

              
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl"></div>

            <img
              src={steelImage}
              alt="Epitome Steel"
              className="relative h-[500px] w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
              <h4 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
                End-to-End Steel Solutions
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Design • Fabrication • Supply • Installation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}