import { useEffect, useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";

const farmImages = [
  { src: "/farms/0G9A0561.JPG", alt: "New Age Farm facility" },
  { src: "/farms/0G9A0601.JPG", alt: "New Age Farm grounds" },
  { src: "/farms/cattle.png", alt: "Cattle at New Age Farm" },
  { src: "/farms/DJI_0134.jpg", alt: "Aerial view of New Age Farm" },
  { src: "/farms/poultry.png", alt: "Poultry at New Age Farm" },
];

const galleryImages = [
  { src: "/gallery/0G9A0049.jpg", alt: "Ayobo branch exterior" },
  { src: "/gallery/0G9A0095.JPG", alt: "Iwo road branch exterior" },
  { src: "/gallery/0G9A0109.JPG", alt: "Iwo road facilities" },
  { src: "/gallery/0G9A0118.JPG", alt: "Iwo road operations" },
  { src: "/gallery/0G9A0138.JPG", alt: "Iwo road site view" },
  { src: "/gallery/0G9A0153.JPG", alt: "Jericho branch exterior" },
  { src: "/gallery/0G9A0161.JPG", alt: "Jericho branch frontage" },
  { src: "/gallery/0G9A0303.JPG", alt: "Facility overview" },
  { src: "/gallery/0G9A0304.JPG", alt: "Facility operations" },
  { src: "/gallery/0G9A0314.JPG", alt: "Site interior view" },
  { src: "/gallery/0G9A0322.JPG", alt: "Site exterior view" },
  { src: "/gallery/0G9A0325.JPG", alt: "Site loading area" },
  { src: "/gallery/0G9A0326.JPG", alt: "Site operations area" },
  { src: "/gallery/0G9A0330.JPG", alt: "Facility frontage" },
  { src: "/gallery/0G9A0331.JPG", alt: "Operations overview" },
  { src: "/gallery/0G9A0348.JPG", alt: "Branch frontage" },
  { src: "/gallery/0G9A0382.JPG", alt: "Site activity view" },
  { src: "/gallery/0G9A0383.JPG", alt: "Site logistics view" },
  { src: "/gallery/0G9A0428.JPG", alt: "Branch aerial view" },
  { src: "/gallery/0G9A0504.JPG", alt: "Sagamu branch exterior" },
  { src: "/gallery/0G9A0679.JPG", alt: "Magboro branch exterior" },
  { src: "/gallery/0G9A0681.JPG", alt: "Magboro branch frontage" },
  { src: "/gallery/aboutone.png", alt: "New Age Group facility" },
  { src: "/gallery/AERIAL VIEW.jpg", alt: "Aerial view of facility" },
  { src: "/gallery/DJI_0053.jpg", alt: "Aerial facility shot" },
  { src: "/gallery/DJI_0056.jpg", alt: "Drone shot of facility" },
  { src: "/gallery/DJI_0066.jpg", alt: "Drone view of site" },
  { src: "/gallery/DJI_0160.jpg", alt: "Aerial overview of branch" },
  { src: "/gallery/DJI_0169.jpg", alt: "Aerial view of operations" },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftImages = useMemo(
    () => galleryImages.filter((_, index) => index % 2 === 0),
    []
  );
  const rightImages = useMemo(
    () => galleryImages.filter((_, index) => index % 2 === 1),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const leftIndex =
    leftImages.length === 0 ? 0 : activeIndex % leftImages.length;
  const rightIndex =
    rightImages.length === 0 ? 0 : activeIndex % rightImages.length;

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="A snapshot of the teams, environments, and partnerships we cultivate with our clients."
        imageSrc="/gallery/AERIAL VIEW.jpg"
      />

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                New Age Farm
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Farm operations and facilities.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {farmImages.map((image) => (
              <div
                key={image.src}
                className="group overflow-hidden border border-slate-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Gallery
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Facilities across our locations.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="relative h-[260px] overflow-hidden border border-slate-200 bg-white sm:h-[300px] lg:h-[340px]">
              <div
                className="flex h-full flex-col transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${leftIndex * 100}%)` }}
              >
                {leftImages.map((image) => (
                  <div key={image.src} className="h-full w-full flex-none">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[260px] overflow-hidden border border-slate-200 bg-white sm:h-[300px] lg:h-[340px]">
              <div
                className="flex h-full flex-col transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${rightIndex * 100}%)` }}
              >
                {rightImages.map((image) => (
                  <div key={image.src} className="h-full w-full flex-none">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
