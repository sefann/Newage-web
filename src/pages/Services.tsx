import { Fish, Fuel, Globe2, Leaf, Truck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Energy",
    description:
      "Quality petroleum products and services with strategic station development and a growing focus on cleaner LPG.",
    icon: <Fuel />,
  },
  {
    title: "Foods",
    description:
      "Importation and distribution of frozen foods including fish, poultry, and meat with ethical sourcing and cold-chain infrastructure.",
    icon: <Fish />,
  },
  {
    title: "Transport",
    description:
      "Haulage, logistics, and route management backed by safety training, fleet maintenance, and secure warehousing support.",
    icon: <Truck />,
  },
  {
    title: "Agriculture",
    description:
      "Commercial farming across fish, poultry, cattle, and cash crops with international production standards and local market reach.",
    icon: <Leaf />,
  },
  {
    title: "Exports",
    description:
      "International trading of agricultural produce and commodities including sesame seed, charcoal, cashew nuts, and dragon fruit.",
    icon: <Globe2 />,
  },
];

const Services = () => {
  return (
    <div>
      <PageHeader
        title="Services"
        subtitle="A diversified portfolio delivering energy, food supply, agriculture, transport, and export services across Nigeria."
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
