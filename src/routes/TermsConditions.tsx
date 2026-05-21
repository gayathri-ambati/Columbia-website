import { createFileRoute } from "@tanstack/react-router";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-4">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 leading-8 mb-6">
          These Terms & Conditions govern your use of the Epitome Steel website
          and services. By accessing this website, you agree to comply with these terms.
        </p>

        <div className="space-y-8">

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Website Usage
            </h2>

            <p className="text-gray-600 leading-8">
              You agree to use this website only for lawful purposes and
              must not attempt unauthorized access or misuse the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Intellectual Property
            </h2>

            <p className="text-gray-600 leading-8">
              All website content including text, graphics, logos, and product
              information belongs to Epitome Steel unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. Product Information
            </h2>

            <p className="text-gray-600 leading-8">
              Product specifications and availability may change without notice.
              We strive to keep all information accurate and updated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Quotations & Pricing
            </h2>

            <p className="text-gray-600 leading-8">
              All quotations are subject to market conditions and final confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Limitation of Liability
            </h2>

            <p className="text-gray-600 leading-8">
              Epitome Steel shall not be held liable for indirect damages,
              technical interruptions, or data loss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. External Links
            </h2>

            <p className="text-gray-600 leading-8">
              Our website may contain links to external websites.
              We are not responsible for third-party content or policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Governing Law
            </h2>

            <p className="text-gray-600 leading-8">
              These terms are governed by the laws of India and subject
              to the jurisdiction of Chennai courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              8. Contact Information
            </h2>

            <div className="text-gray-600 leading-8">
              <p>Epitome Steel</p>
              <p>Email: info@epitomesteel.com</p>
              <p>Phone: +91 XXXXX XXXXX</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/TermsConditions")({
  component: TermsConditions,
});

export default TermsConditions;