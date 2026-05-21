import { createFileRoute } from "@tanstack/react-router";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-600 leading-8 mb-6">
          Welcome to Epitome Steel. Your privacy is important to us.
          This Privacy Policy explains how we collect, use, and protect
          your information when you visit our website or interact with our services.
        </p>

        <div className="space-y-8">

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Information We Collect
            </h2>

            <ul className="list-disc pl-6 text-gray-600 leading-8">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Inquiry Details</li>
              <li>Browser & IP Information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 text-gray-600 leading-8">
              <li>Respond to inquiries and quotations</li>
              <li>Improve our products and services</li>
              <li>Provide customer support</li>
              <li>Send updates and notifications</li>
              <li>Maintain website security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. Data Protection
            </h2>

            <p className="text-gray-600 leading-8">
              We implement appropriate security measures to protect your
              personal information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Cookies Policy
            </h2>

            <p className="text-gray-600 leading-8">
              Our website may use cookies to enhance user experience
              and improve website performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Third-Party Services
            </h2>

            <p className="text-gray-600 leading-8">
              We may use trusted third-party services for analytics,
              hosting, and communication purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. Sharing Information
            </h2>

            <p className="text-gray-600 leading-8">
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Your Rights
            </h2>

            <p className="text-gray-600 leading-8">
              You may request access, correction, or deletion of your
              personal data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              8. Contact Us
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

export const Route = createFileRoute("/PrivacyPolicy")({
  component: PrivacyPolicy,
});

export default PrivacyPolicy;