import type { ExperienceCategory } from "../types/experience";
import CategoryFilter from "./CategoryFilter";
import DestinationFilter from "./DestinationFilter";
import SearchBar from "./SearchBar";

interface FilterBarProps {
  search: string;
  category: ExperienceCategory | "All";
  destination: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

const FilterBar = ({
  search,
  category,
  destination,
  onSearchChange,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) => {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <SearchBar value={search} onChange={onSearchChange} />
        <CategoryFilter value={category} onChange={onCategoryChange} />
        <DestinationFilter
          value={destination}
          onChange={onDestinationChange}
        />
      </div>
    </section>
  );
};

export default FilterBar;
