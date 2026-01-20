type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6 lg:py-28">
        <h1
          className="text-center text-4xl font-extrabold text-slate-900 md:text-5xl"
        >
          {title}
        </h1>
        <p
          className="mx-auto mt-5 max-w-3xl text-center text-lg font-medium text-slate-600"
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
