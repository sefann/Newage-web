import PageHeader from "../components/PageHeader";

const TermsOfService = () => {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
        subtitle="Terms and conditions for using New Age Group services."
      />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6">
          <div className="space-y-10 text-sm text-slate-600">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing or using this website, you agree to comply with
                these terms. If you do not agree, please do not use the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Use of Website
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Use the site for lawful purposes only.</li>
                <li>Do not attempt to disrupt or compromise site security.</li>
                <li>Do not misuse content or trademarks without permission.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Content and Intellectual Property
              </h2>
              <p className="mt-3">
                All website content, branding, and materials are owned by New
                Age Group or its licensors. Unauthorized use is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Service Information
              </h2>
              <p className="mt-3">
                Information on this site is provided for general purposes and
                may be updated without notice. We do not guarantee that content
                is always current or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Cookies Policy
              </h2>
              <p className="mt-3">
                We may use cookies or similar technologies to enhance your
                browsing experience, analyze site traffic, and understand how
                visitors interact with our pages. You can control cookie
                preferences through your browser settings. Disabling cookies may
                affect site functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                New Age Group is not liable for any damages arising from your
                use of the website, to the fullest extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these terms at any time. Continued use of the site
                means you accept the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
