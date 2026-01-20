import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="We partner with enterprises to design sustainable growth strategies, strengthen governance, and deliver operational excellence."
      />

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                A trusted corporate partner with a global outlook.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Newage Group is a corporate services firm dedicated to helping
                organizations navigate complexity with confidence. Our teams
                blend strategic insight, operational discipline, and deep
                industry knowledge to deliver measurable outcomes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Why organizations choose us
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Cross-functional experts aligned to your objectives.</li>
                <li>Data-driven insights with actionable execution plans.</li>
                <li>Agile delivery model to scale with your ambitions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
              <p className="mt-3 text-sm text-slate-600">
                To empower enterprises with strategic clarity, operational
                strength, and sustainable growth outcomes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
              <p className="mt-3 text-sm text-slate-600">
                To be the trusted corporate partner for organizations seeking
                modern, resilient, and ethical transformation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Values</h3>
              <p className="mt-3 text-sm text-slate-600">
                Integrity, collaboration, innovation, and results-driven
                execution in every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
