import { NavLink } from "react-router-dom";
import { BarChart3, Briefcase, ShieldCheck } from "lucide-react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

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
                Corporate clarity, operational confidence, and measurable growth.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Newage Group partners with ambitious organizations to deliver
                integrated advisory and execution across strategy, finance,
                governance, and transformation programs.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-2xl font-semibold text-primary">15+</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Years of leadership experience
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">98%</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Client retention across key accounts
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">8</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Industry sectors served
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-primary">24/7</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Enterprise support availability
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
                Integrated corporate solutions tailored to your enterprise.
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
            <ServiceCard
              title="Strategic Advisory"
              description="Board-level strategy, market positioning, and growth frameworks aligned with measurable ROI."
              icon={<BarChart3 />}
            />
            <ServiceCard
              title="Corporate Operations"
              description="Operational redesign, process optimization, and governance structures for efficiency."
              icon={<Briefcase />}
            />
            <ServiceCard
              title="Risk & Compliance"
              description="Enterprise risk management, regulatory compliance, and assurance support."
              icon={<ShieldCheck />}
            />
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
                Ready to elevate your corporate performance?
              </h2>
              <p className="mt-4 text-base text-white/80">
                Engage Newage Group for tailored solutions that drive measurable
                growth, governance excellence, and operational resilience.
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
