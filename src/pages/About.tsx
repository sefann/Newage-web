import type { ReactNode } from "react";
import { Mail, Play } from "lucide-react";
import PageHeader from "../components/PageHeader";

const femalePlaceholderSvg = `
  <svg width="600" height="720" viewBox="0 0 600 720" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="720" rx="48" fill="#f1f5f9" />
    <circle cx="300" cy="260" r="120" fill="#cbd5e1" />
    <path d="M120 640c0-120 80-200 180-200s180 80 180 200v40H120v-40z" fill="#cbd5e1" />
  </svg>
`;
const femalePlaceholder = `data:image/svg+xml;utf8,${encodeURIComponent(
  femalePlaceholderSvg
)}`;

type SectionProps = {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundImageClassName?: string;
};

const Section = ({
  children,
  className = "",
  backgroundImage,
  backgroundImageClassName = "opacity-25",
}: SectionProps) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={backgroundImage}
            alt=""
            className={`h-full w-full object-cover ${backgroundImageClassName}`}
            loading="lazy"
          />
        </div>
      )}
      <div className="relative">{children}</div>
    </section>
  );
};

const BlueBackdrop = () => (
  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,47,109,0.55),transparent_60%)]" />
    <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-blue-400/25 blur-3xl animate-pulse" />
    <div className="absolute -right-10 bottom-10 h-60 w-60 rounded-full bg-blue-500/25 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-800/30" />
  </div>
);

const About = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="A private limited liability company incorporated in November 2009, delivering essential services across Nigeria."
        imageSrc="/aboutone.png"
      />

      <Section className="bg-white" backgroundImage="/temp4.png">
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
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl bg-primary p-6 text-white shadow-sm">
                <h3 className="text-lg font-semibold text-white">
                  Building prosperity & self-sufficiency
                </h3>
                <p className="mt-3 text-sm text-white/90">
                  At Newage Group, our approach to sustainability goes beyond
                  compliance with regulatory expectations. We are driven by a
                  desire to contribute to, and positively impact the development
                  of our host communities and society at large.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Chairman's welcome video
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Watch a short message from the Group Chairman about our
                  journey, values, and commitment to service excellence.
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-52 items-center justify-center bg-slate-100">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Play size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="h-40 w-full">
                <img
                  src="/vision.png"
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
                  src="/mission.png"
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
      </Section>

      <Section className="bg-primary text-white">
        <BlueBackdrop />
        <div
          className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Core Values
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Guiding our success.
              </h2>
              <p className="mt-4 max-w-3xl text-base text-white/80">
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
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white" backgroundImage="/temp4.png">
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
                bio: "Introducing Mr. Sulaimon A. Ajishafe, a visionary entrepreneur and the Founder and current CEO of NEW AGE ENERGY LTD. With his unwavering dedication, infectious energy, and strategic acumen, Mr. Ajishafe has transformed the company into a diversified conglomerate spanning the Oil and Gas, Seafood Trading and poultry, farming, chicken and meat processing industries.",
                image: "/images/ajishafe.png",
                email: "s.ajishafe@newagegroupng.com",
              },
              {
                name: "Alhaja Simiat Jimoh",
                role: "Director",
                bio: "Alhaja Simiat Jimoh has over forty (40) years’ experience in the frozen seafood business and was elected to the Board of NEW AGE in September 2015. She is the Chief Executive Officer of M/S. Progress Seafood Nigeria Ltd, a household name and one of the biggest distributors of frozen fish in Nigeria.",
                image: femalePlaceholder,
                email: "simiat.jimoh@newagegroupng.com",
              },
              {
                name: "Aisha Abdullahi Adamu",
                role: "Executive Director",
                bio: "Aisha Yasmin Abdullahi Adamu serves as Executive Director of New Age Group, where she oversees the Group’s multi-sector operations in agriculture, oil & gas, and trade. With a background in business development and experience at Microsoft, she brings deep expertise in strategy, branding, and stakeholder engagement. Aisha holds a BSc in Microbiology, an Executive MBA from the London School of Business and Finance, and executive training in Global Business from Harvard University. She is known for driving innovation, fostering impactful partnerships, and leading with a vision rooted in growth and sustainability.",
                image: "/images/aisha.jpg",
                email: "aisha@newagegroupng.com",
              },
              {
                name: "Mr. Tammesh Singh",
                role: "Head, Sales & Marketing",
                bio: "Tammesh has over 17 years’ experience and expertise in Business Development (Exports), International Marketing, Merchant Export and Domestic Marketing (Retail and Channel Sales). His responsibilities in NEW AGE include the following among others......",
                image: "/images/tammish.jpeg",
                email: "Tammesh@newagegroupng.com",
              },
              {
                name: "Mr. Ashmit",
                role: "Sales and Marketing",
                bio: "Ashmit is a sales and marketing professional with experience in local market engagement and customer acquisition. With a strong understanding of regional market dynamics, Ashmit supports brand visibility and revenue growth through effective sales strategies and on-ground marketing efforts.",
                image: "/images/ashmit.png",
                email: "ashmit@newagegroupng.com",
              },
            ].map((leader) => (
              <article
                key={leader.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                  <div className="h-64 overflow-hidden rounded-2xl bg-slate-100 lg:h-full lg:min-h-[260px]">
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
      </Section>

      <Section className="bg-primary text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,47,109,0.55),transparent_60%)]" />
          <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-blue-400/25 blur-3xl animate-pulse" />
          <div className="absolute -right-10 bottom-10 h-60 w-60 rounded-full bg-blue-500/25 blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-800/30" />
        </div>
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Sustainability and community impact.
              </h2>
              <p className="mt-4 text-base text-white/80">
                Our approach to sustainability goes beyond compliance. We are
                committed to empowering local economies, fostering inclusive
                partnerships, and driving transformative impact across the
                communities we serve.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <h3 className="text-lg font-semibold text-white">
                Building prosperity and self-sufficiency
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Through responsible business practices and innovation, we aim
                to create resilient, future-ready industries that strengthen
                Nigeria's growth.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
