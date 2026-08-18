import type { Experience } from "../types/experience";
import ExperienceCard from "./ExperienceCard";
import NoResults from "./NoResults";

interface ExperienceGridProps {
  experiences: Experience[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

const ExperienceGrid = ({
  experiences,
  favoriteIds,
  onToggleFavorite,
}: ExperienceGridProps) => {
  if (experiences.length === 0) {
    return <NoResults />;
  }

  return (
    <section
      aria-label="Experience results"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          isFavorite={favoriteIds.includes(experience.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
};

export default ExperienceGrid;
