type PageHeaderProps = {
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

const PageHeader = ({ title, subtitle, align = "left" }: PageHeaderProps) => {
  const isCentered = align === "center";
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6">
        <p
          className={`text-sm font-semibold uppercase tracking-[0.2em] text-accent ${
            isCentered ? "text-center" : ""
          }`}
        >
          New Age Group
        </p>
        <h1
          className={`mt-4 text-3xl font-semibold text-slate-900 md:text-4xl ${
            isCentered ? "text-center text-4xl md:text-5xl" : ""
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-4 max-w-2xl text-base text-slate-600 ${
            isCentered ? "mx-auto text-center text-lg" : ""
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
