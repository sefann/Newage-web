import PageHeader from "../components/PageHeader";

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="How New Age Group collects, uses, and protects your information."
      />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6">
          <div className="space-y-10 text-sm text-slate-600">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Overview
              </h2>
              <p className="mt-3">
                New Age Group respects your privacy and is committed to
                protecting your personal information. This policy explains what
                we collect, why we collect it, and how we safeguard it when you
                visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Information We Collect
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Contact details you submit (name, email, phone).</li>
                <li>Message content you send through our contact forms.</li>
                <li>Basic technical data such as browser type and device.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                How We Use Your Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to inquiries and provide requested services.</li>
                <li>Improve our website and service offerings.</li>
                <li>Maintain security and prevent misuse.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Sharing and Disclosure
              </h2>
              <p className="mt-3">
                We do not sell or rent your personal information. We may share
                data with trusted service providers who support our operations,
                or when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Data Security
              </h2>
              <p className="mt-3">
                We use reasonable administrative and technical safeguards to
                protect your data from loss, misuse, or unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Your Choices
              </h2>
              <p className="mt-3">
                You can request access to or correction of your personal data by
                contacting us at info@newagegroupng.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Updates to This Policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. The latest version
                will always be available on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
