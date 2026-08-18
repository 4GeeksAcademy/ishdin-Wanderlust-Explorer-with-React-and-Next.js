"use client";

import Link from "next/link";
import { experiences } from "../data/experiences";
import useFavorites from "../hooks/useFavorites";
import ExperienceGrid from "./ExperienceGrid";

const FavoritesView = () => {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favorites = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-950">Your Favorites</h1>
        <p className="mt-2 text-slate-500">
          {favorites.length} saved experience{favorites.length === 1 ? "" : "s"}.
        </p>
      </header>

      {favorites.length > 0 ? (
        <ExperienceGrid
          experiences={favorites}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />
      ) : (
        <section className="rounded-2xl bg-slate-50 px-6 py-20 text-center">
          <h2 className="text-xl font-bold">No favorites yet</h2>
          <p className="mt-2 text-slate-500">
            Save experiences with the heart icon and they will appear here.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex rounded-full bg-teal-700 px-5 py-3 font-semibold text-white"
          >
            Explore experiences
          </Link>
        </section>
      )}
    </main>
  );
};

export default FavoritesView;
