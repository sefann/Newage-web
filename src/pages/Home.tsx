import { NavLink } from "react-router-dom";
import { Fish, Fuel, Globe2, Leaf, Truck } from "lucide-react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

const serviceHighlights = [
  {
    title: "Energy",
    description:
      "Quality petroleum products and services with a growing focus on cleaner LPG solutions.",
    icon: <Fuel />,
    href: "/services#energy",
  },
  {
    title: "Foods",
    description:
      "Importation, distribution, and sales of frozen foods backed by ethical sourcing.",
    icon: <Fish />,
    href: "/services#foods",
  },
  {
    title: "Transport",
    description:
      "Bespoke haulage, logistics, and warehousing support for internal and external clients.",
    icon: <Truck />,
    href: "/services#transport",
  },
  {
    title: "Agriculture",
    description:
      "Commercial farming across fish, poultry, cattle, and cash crops with international production standards.",
    icon: <Leaf />,
    href: "/services#agriculture",
  },
  {
    title: "Exports",
    description:
      "International trading of agricultural produce and commodities across global markets.",
    icon: <Globe2 />,
    href: "/services#exports",
  },
];

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Who we are
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Empowering progress with essential services across Nigeria.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                New Age Group is a private limited liability company established
                in 2009 with operations commencing in 2013. We specialize in
                energy, foods, agriculture, transport, and commodity exports,
                delivering dependable products and services to individuals,
                corporate partners, and communities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-2xl font-semibold text-primary">2009</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Incorporated in Lagos, Nigeria
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">2013</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Operations officially commenced
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">5</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Core business arms
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">
                    Nationwide
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Strategic outlets and offices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div data-aos="fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Diversified services delivering basic needs at scale.
              </h2>
            </div>
            <NavLink
              to="/services"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              View all services
            </NavLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                actionLabel="Read more"
                actionHref={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                New Age Group
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Want to learn more about us?
              </h2>
            </div>
            <a
              href="/company-profile.pdf"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              download
            >
              Download our company profile
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Ready to build resilient supply and service partnerships?
              </h2>
              <p className="mt-4 text-base text-white/80">
                Engage New Age Group for reliable energy, food supply, logistics,
                and commodity export services designed for sustainable growth.
              </p>
            </div>
            <NavLink
              to="/contact"
              className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-105"
            >
              Schedule a consultation
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
