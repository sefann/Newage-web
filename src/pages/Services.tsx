import PageHeader from "../components/PageHeader";

const services = [
  {
    id: "energy",
    title: "Energy",
    image:
      "/images/energy.jpeg",
    body: [
      "New Age Company Limited established its energy arm in 2009 to provide top-notch quality petroleum products and services to both individual and corporate clients in Nigeria.",
      "The company invested in constructing, developing, and acquiring niche petroleum products dispensing and service stations at strategic locations across the country.",
      "The energy arm is committed to providing the best customer service practices and adhering to safety rules in all procedures.",
      "The company recently commenced the strategic inclusion of liquefied petroleum gas (LPG) as one of its commodities for sale in response to the inter-governmental consensus for the use of cleaner and renewable energy sources.",
    ],
  },
  {
    id: "foods",
    title: "Frozen Foods",
    image:
      "/images/seafood.jpeg",
    body: [
      "The foods arm of the company is engaged in the importation, distribution, and sales of frozen foods, majorly consisting of fish and fish products, poultry, and meat.",
      "The company plans to include other sea food products like shellfish, lobster, prawns, king prawns, crabs, and calamari to its product offerings.",
      "The company sources its products from international ethical and eco-friendly sources, but recent expansion strategies have yielded fruit as more products are now sourced from the ranches, large fish and poultry farms owned by the company but operated by another business arm.",
      "The foods arm is utilizing a nearness to market policy to ensure its firm presence in the market, which involves situating outlets and operational offices strategically round the country and using state of the art cold storage and transportation infrastructure.",
    ],
  },
  {
    id: "transport",
    title: "Transport",
    image:
      "/images/transport.jpeg",
    body: [
      "The transport arm of the company specializes in the haulage and transportation of various types of commodities. The company has made huge investments in personnel, logistics infrastructure, bespoke haulage fleet, and an efficient route management system.",
      "The transport arm primarily caters to the haulage requirements of the other business arms in the company.",
      "In addition to these efforts, the company also places great emphasis on safety and security measures in its operations. The haulage fleet is regularly serviced and maintained to ensure that they are roadworthy and in excellent condition.",
      "Drivers undergo rigorous training and certification programs to ensure that they are competent and capable of handling the vehicles and the commodities they transport.",
      "The company also invests in advanced security measures to ensure that the commodities being transported are safe and secure from theft or damage.",
      "The transport arm of New Age Company Limited also provides logistics support services to other companies in the Nigerian economy. These services include warehousing, inventory management, and distribution of goods.",
      "The company operates state-of-the-art warehouses and storage facilities equipped with modern inventory management systems to ensure that customers’ goods are stored in a safe, secure and organized manner.",
      "The company’s logistics team also provides customized distribution services to clients, ensuring that their goods are transported to their designated locations in a timely and efficient manner.",
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture",
    image:
      "/images/agric.jpeg",
    body: [
      "Agriculture plays a significant role in the Nigerian economy, contributing around 21% to GDP and maintaining positive growth even during economic downturns.",
      "The sector has excellent potential for export revenue earning, with cocoa, groundnuts, sorghum, and millet historically contributing to Nigeria’s foreign exchange earnings.",
      "In 2015, the agriculture business arm of New Age Company Limited was established to tap into the numerous opportunities available in the agricultural sector.",
      "The company acquired large areas of land in several states in Nigeria to establish commercial farms that produce a range of products, including fish, poultry, cattle, and cash crops such as cashew nuts, sesame seeds, and dragon fruit.",
      "The company adheres to international standards in the production of food crops, poultry, and animal husbandry, and locally grown farm produce is marketed alongside externally sourced products by the company’s food arm.",
      "Additionally, the company is making charcoal from the timber found on a significant portion of the land purchased for the farms.",
      "Overall, the agriculture sector remains a profitable business venture in Nigeria, especially with the ever-increasing population and demand for food.",
    ],
  },
  {
    id: "exports",
    title: "Exports",
    image:
      "/images/export.jpeg",
    body: [
      "The Nigerian economy heavily relies on commodity exports, which consist of raw materials such as agricultural products, minerals, ores, and metals.",
      "Unfortunately, Nigeria’s economy is dominated by crude oil, which accounts for 96% of the country’s export revenue. As a result, the Nigerian government is encouraging private companies to participate in the commodities export business in order to diversify the economy.",
      "New Age Company Limited has established a separate arm dedicated to the international trading of agricultural produce and other commodity products, such as Sesame Seed, Charcoal, Cashew Nuts, and Dragon Fruit.",
      "This arm is responsible for negotiating contracts with various commodities exchanges and international buyers in adherence to agreed-upon terms and conditions.",
      "Despite being the newest arm of the company, it has great potential as Nigeria has historically earned export revenue from the global sale of Cocoa, Cassava, Tin, Bauxite, and other iron ore deposits in the Jos Plateau region.",
      "The Commodities Export arm of New Age Company Limited is rapidly growing and is helping to diversify Nigeria’s economy by increasing the country’s export revenue sources.",
    ],
  },
];

const Services = () => {
  return (
    <div>
      <PageHeader
        title="Services"
        subtitle="A diversified portfolio delivering energy, food supply, agriculture, transport, and export services across Nigeria."
        imageSrc="/service-banner.png"
      />

      <section className="bg-slate-50">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="space-y-12">
            {services.map((service, index) => {
              const hasBlueBackdrop =
                service.id === "foods" || service.id === "agriculture";

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-28 rounded-3xl border border-slate-200 p-6 lg:p-10 ${
                    hasBlueBackdrop
                      ? "relative overflow-hidden bg-primary text-white"
                      : "bg-white"
                  }`}
                  data-aos="fade-up"
                >
                  {hasBlueBackdrop && (
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,47,109,0.55),transparent_60%)]" />
                      <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-blue-400/25 blur-3xl animate-pulse" />
                      <div className="absolute -right-10 bottom-10 h-60 w-60 rounded-full bg-blue-500/25 blur-3xl animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-blue-800/30" />
                    </div>
                  )}
                <div
                  className={`relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${
                    index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                        hasBlueBackdrop ? "text-accent" : "text-accent"
                      }`}
                    >
                      {service.title}
                    </p>
                    <h2
                      className={`mt-4 text-2xl font-semibold ${
                        hasBlueBackdrop ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {service.title} Services
                    </h2>
                    <div
                      className={`mt-4 space-y-4 text-sm ${
                        hasBlueBackdrop ? "text-white/80" : "text-slate-600"
                      }`}
                    >
                      {service.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden rounded-2xl border ${
                      hasBlueBackdrop ? "border-white/20" : "border-slate-200"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} operations`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
