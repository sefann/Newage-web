import PageHeader from "../components/PageHeader";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate leadership meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    alt: "Modern office building exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Team collaborating around a table",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    alt: "Strategic planning session",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate headquarters lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Executive strategy review",
  },
];

const Gallery = () => {
  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="A snapshot of the teams, environments, and partnerships we cultivate with our clients."
      />

      <section className="bg-white">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                className="group overflow-hidden rounded-2xl border border-slate-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
