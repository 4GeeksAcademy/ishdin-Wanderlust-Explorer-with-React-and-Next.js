import type { ExperienceCategory } from "../types/experience";

interface CategoryFilterProps {
  value: ExperienceCategory | "All";
  onChange: (value: string) => void;
}

const categories = [
  "All",
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const CategoryFilter = ({
  value,
  onChange,
}: CategoryFilterProps) => {
  return (
    <label className="block min-w-48">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        Category
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-600"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CategoryFilter;
