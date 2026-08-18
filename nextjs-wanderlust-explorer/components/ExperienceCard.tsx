import Link from "next/link";
import type { Experience } from "../types/experience";
import FavoriteButton from "./FavoriteButton";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const ExperienceCard = ({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute right-3 top-3 z-10">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(experience.id)}
        />
      </div>

      <Link href={`/experiences/${experience.id}`} className="block">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
              {experience.category}
            </span>
            <span className="text-sm font-semibold">
              ★ {experience.rating.toFixed(1)}
            </span>
          </div>

          <h2 className="mt-4 text-lg font-bold text-slate-950">
            {experience.title}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {experience.destination}
          </p>
          <p className="mt-4 font-semibold text-slate-900">
            ${experience.price} <span className="font-normal">per person</span>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ExperienceCard;
