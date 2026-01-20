import { Mail } from "lucide-react";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="A private limited liability company incorporated in November 2009, delivering essential services across Nigeria."
        align="center"
      />

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Welcome to New Age Group.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Welcome to New Age Group! We are a private limited liability
                company that was incorporated in November 2009, and our
                operations officially began in 2013. We take pride in
                specializing in the distribution of various products, including
                frozen foods, seafood, poultry, crop trading, and petroleum
                products in the downstream market segment.
              </p>
              <p className="mt-4 text-base text-slate-600">
                At New Age Group, we are committed to providing our esteemed
                customers with top-notch quality services. Our dedication to
                excellence has solidified our position as one of the key players
                in the market. We understand the importance of catering to our
                customers’ needs and strive to deliver exceptional products and
                services that meet and exceed their expectations.
              </p>
              <p className="mt-4 text-base text-slate-600">
                With a focus on authenticity and human connection, we prioritize
                building strong relationships with our customers. We value the
                trust they place in us and aim to humanize every interaction,
                ensuring that each customer feels valued and understood.
              </p>
              <p className="mt-4 text-base text-slate-600">
                Our team of dedicated professionals works tirelessly to deliver
                the best possible experience for our customers. We believe in
                the power of collaboration and constantly seek innovative ways
                to enhance our operations, ensuring that we provide even greater
                value to our customers.
              </p>
              <p className="mt-4 text-base text-slate-600">
                Join us on our journey as we redefine industry standards in
                quality and service. At New Age Group, we are proud to be part
                of a dynamic business landscape, and we look forward to a future
                filled with growth, success, and continued excellence.
              </p>
              <p className="mt-4 text-base text-slate-600">
                Discover the difference that New Age Group brings to the
                market. Experience our exceptional services and become part of
                our valued customer community.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Talk to us
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Why organizations choose us
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Consistent quality standards across every business arm.</li>
                <li>Strategic outlets and logistics built close to markets.</li>
                <li>People-first partnerships with a focus on reliability.</li>
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
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="h-40 w-full">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
                  alt="New Age Group vision"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Our vision is the guiding framework that shapes every aspect
                  of our business towards sustainable, efficient, and effective
                  growth.
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  We envision a future where our work meaningfully uplifts lives,
                  empowers communities, and strengthens local economies. By
                  creating opportunities, fostering sustainable development, and
                  prioritizing people-first initiatives, we aim to be a force
                  for positive change within the societies we serve.
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  At the same time, we strive to build a diversified, globally
                  respected portfolio that leads innovation across energy,
                  agriculture, seafood, international trade, and logistics.
                  Through strategic growth, operational excellence, and
                  cross-border partnerships, Newage Group aspires to become a
                  benchmark for enterprise excellence across both emerging and
                  established markets.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="h-40 w-full">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="New Age Group mission"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
                <p className="mt-3 text-sm text-slate-600">
                  At Newage Group, our mission is to deliver world-class
                  services across energy, agriculture, seafoods, international
                  trade, and logistics. We are driven by a commitment to
                  excellence, integrity, and innovation creating long-term value
                  for our clients, customers, partners, and communities. By
                  leveraging local expertise and global standards, we aim to be
                  a trusted partner in advancing sustainable growth across
                  industries and borders.
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  We are committed to empowering local economies, fostering
                  inclusive partnerships, and driving transformative impact
                  through every service we provide. At Newage Group, we believe
                  in purposeful growth where responsible business practices,
                  social responsibility, and cutting-edge innovation come
                  together to shape resilient, future-ready industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Core Values
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Guiding our success.
              </h2>
              <p className="mt-4 max-w-3xl text-base text-slate-600">
                Our values serve as a moral compass, guiding our actions and
                defining our behavior in the world.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Leadership",
                description:
                  "We embrace the courage to shape a better future, leading with purpose and vision.",
              },
              {
                title: "Collaboration",
                description:
                  "We leverage the collective genius of our diverse team, fostering collaboration and innovation.",
              },
              {
                title: "Integrity",
                description:
                  "We value authenticity, being genuine and true to ourselves and others.",
              },
              {
                title: "Accountability",
                description:
                  "We take ownership of our actions, understanding that our success depends on our individual and collective efforts.",
              },
              {
                title: "Passion",
                description:
                  "We are deeply committed in heart and mind, fueling our drive for excellence and success.",
              },
              {
                title: "Diversity",
                description:
                  "We embrace inclusivity, celebrating the unique perspectives and strengths that diversity brings.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Leadership
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Meet our management team.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                name: "Mr. Sulaimon A. Ajishafe",
                role: "Group Chairman",
                bio: "Founder and CEO of New Age Energy Ltd, he has transformed the company into a diversified conglomerate spanning oil and gas, seafood trading, farming, and processing industries.",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
                email: "sulaimon.ajishafe@newagegroupng.com",
              },
              {
                name: "Alhaja Simiat Jimoh",
                role: "Director",
                bio: "With over 40 years in frozen seafood, she is CEO of Progress Seafood Nigeria Ltd and brings deep industry leadership to the board.",
                image:
                  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
                email: "simiat.jimoh@newagegroupng.com",
              },
              {
                name: "Aisha Yasmin Abdullahi Adamu",
                role: "Executive Director",
                bio: "Oversees multi-sector operations with expertise in business development, strategy, and stakeholder engagement. Formerly with Microsoft and holds an Executive MBA from the London School of Business and Finance with Harvard executive training.",
                image:
                  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
                email: "aisha.adamu@newagegroupng.com",
              },
              {
                name: "Mr. Tammesh Singh",
                role: "Head, Sales & Marketing",
                bio: "Brings 17+ years of experience in business development, exports, and international marketing to expand the group's reach and partnerships.",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
                email: "tammesh.singh@newagegroupng.com",
              },
              {
                name: "Leadership Appointment",
                role: "Management Team",
                bio: "Additional profile coming soon as the group continues to expand leadership capacity across its business arms.",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
                email: "leadership@newagegroupng.com",
              },
            ].map((leader) => (
              <article
                key={leader.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500">
                      {leader.role}
                    </p>
                    <p className="mt-4 text-sm text-slate-600">{leader.bio}</p>
                    <a
                      href={`mailto:${leader.email}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                    >
                      <Mail size={16} />
                      {leader.email}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Sustainability and community impact.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Our approach to sustainability goes beyond compliance. We are
                committed to empowering local economies, fostering inclusive
                partnerships, and driving transformative impact across the
                communities we serve.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Building prosperity and self-sufficiency
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Through responsible business practices and innovation, we aim
                to create resilient, future-ready industries that strengthen
                Nigeria's growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
