type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          New Age Group
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
