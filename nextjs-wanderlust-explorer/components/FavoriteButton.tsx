interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoriteButton = ({
  isFavorite,
  onToggle,
}: FavoriteButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorite}
      className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white text-xl shadow-sm transition ${
        isFavorite
          ? "border-rose-200 text-rose-600"
          : "border-slate-200 text-slate-500 hover:text-rose-600"
      }`}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
};

export default FavoriteButton;
