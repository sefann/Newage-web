type PageHeaderProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
};

const PageHeader = ({ title, subtitle, imageSrc }: PageHeaderProps) => {
  const hasBanner = Boolean(imageSrc);

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {hasBanner && (
        <>
          <div className="absolute inset-0">
            <img
              src={imageSrc}
              alt={`${title} banner`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/60" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 lg:px-6 lg:py-28">
        <h1
          className={`text-center text-4xl font-extrabold md:text-5xl ${
            hasBanner ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mx-auto mt-5 max-w-3xl text-center text-lg font-medium ${
            hasBanner ? "text-white/80" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
