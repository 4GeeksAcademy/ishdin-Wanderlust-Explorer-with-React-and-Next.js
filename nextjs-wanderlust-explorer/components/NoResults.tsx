const NoResults = () => {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 px-6 py-20 text-center">
      <p className="text-xl font-bold text-slate-900">No results found</p>
      <p className="mt-2 text-slate-500">
        Try changing your search term, category, or destination.
      </p>
    </section>
  );
};

export default NoResults;
