import PageHeader from "../components/PageHeader";

const opportunities = [
  {
    title: "Operations & Logistics",
    description:
      "Support our transport and warehousing teams with route planning, fleet coordination, and logistics excellence.",
    location: "Magboro, Ogun State",
  },
  {
    title: "Energy Retail & Stations",
    description:
      "Deliver safe, compliant service across our petroleum product stations and LPG rollout initiatives.",
    location: "Lagos & Nationwide",
  },
  {
    title: "Foods & Cold Chain",
    description:
      "Maintain quality, safety, and efficient distribution of frozen foods across strategic outlets.",
    location: "Nationwide",
  },
  {
    title: "Agriculture & Farm Operations",
    description:
      "Join our commercial farms supporting fish, poultry, cattle, and cash crop production.",
    location: "Multiple States",
  },
];

const Careers = () => {
  return (
    <div>
      <PageHeader
        title="Careers"
        subtitle="Build the future with New Age Group. We are committed to developing people, building local capacity, and creating lasting impact."
        imageSrc="/career-banner.png"
      />

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Grow with a diversified Nigerian group.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                From energy and foods to agriculture, transport, and exports, we
                offer opportunities to learn, lead, and contribute to essential
                services that power communities across Nigeria.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Our workplace promise
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>Safety-first culture across all operations.</li>
                  <li>People development through mentoring and training.</li>
                  <li>Purpose-driven work that creates social impact.</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Apply or make enquiries
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Send your CV and a short cover letter to:
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">
                info@newagegroupng.com
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Include the role title and preferred location in your subject
                line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Open roles
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Current career opportunities
              </h2>
            </div>
            <a
              href="/contact"
              className="text-sm font-semibold text-white/80 hover:text-white"
            >
              Contact recruitment team
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {opportunities.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{role.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {role.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
