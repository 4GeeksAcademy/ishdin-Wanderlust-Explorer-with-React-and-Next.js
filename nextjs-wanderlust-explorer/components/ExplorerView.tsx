"use client";

import { experiences } from "../data/experiences";
import useExperienceFilters from "../hooks/useExperienceFilters";
import useFavorites from "../hooks/useFavorites";
import ExperienceGrid from "./ExperienceGrid";
import FilterBar from "./FilterBar";

const ExplorerView = () => {
  const {
    search,
    category,
    destination,
    filteredExperiences,
    setSearchFilter,
    setCategoryFilter,
    setDestinationFilter,
  } = useExperienceFilters(experiences);

  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
          Experience Explorer
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
          Explore 100 unforgettable experiences
        </h1>
        <p className="mt-2 text-slate-500">
          {filteredExperiences.length} experiences match your current filters.
        </p>
      </header>

      <FilterBar
        search={search}
        category={category}
        destination={destination}
        onSearchChange={setSearchFilter}
        onCategoryChange={setCategoryFilter}
        onDestinationChange={setDestinationFilter}
      />

      <ExperienceGrid
        experiences={filteredExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </main>
  );
};

export default ExplorerView;
