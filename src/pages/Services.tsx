import {
  BarChart3,
  Briefcase,
  Building2,
  Handshake,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Strategic Advisory",
    description:
      "Corporate strategy, portfolio optimization, and growth roadmaps tailored to market dynamics.",
    icon: <BarChart3 />,
  },
  {
    title: "Operational Excellence",
    description:
      "Process redesign, performance management, and continuous improvement programs.",
    icon: <Briefcase />,
  },
  {
    title: "Risk & Compliance",
    description:
      "Enterprise risk frameworks, regulatory readiness, and governance advisory services.",
    icon: <ShieldCheck />,
  },
  {
    title: "Corporate Finance",
    description:
      "Capital structure advisory, financial modeling, and investment analysis support.",
    icon: <LineChart />,
  },
  {
    title: "Infrastructure & Projects",
    description:
      "Project management, infrastructure advisory, and multi-stakeholder coordination.",
    icon: <Building2 />,
  },
  {
    title: "Partnership Enablement",
    description:
      "Partner ecosystem design, stakeholder alignment, and strategic alliance support.",
    icon: <Handshake />,
  },
];

const Services = () => {
  return (
    <div>
      <PageHeader
        title="Services"
        subtitle="Our corporate service portfolio is designed to support leadership teams with clarity, control, and confidence."
      />

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
