import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
          Curated experiences worldwide
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Find experiences worth traveling for.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Explore food, culture, nature, wellness, and adventure experiences
          designed to make every trip more memorable.
        </p>
        <Link
          href="/experiences"
          className="mt-8 inline-flex rounded-full bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
        >
          Explore Experiences
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] shadow-xl">
        <img
          src="https://picsum.photos/seed/wanderlust-hero/1200/900"
          alt="Travel experience"
          className="h-[420px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
