interface DestinationFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const DestinationFilter = ({
  value,
  onChange,
}: DestinationFilterProps) => {
  return (
    <label className="block flex-1">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        Destination
      </span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="City or country"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
      />
    </label>
  );
};

export default DestinationFilter;
