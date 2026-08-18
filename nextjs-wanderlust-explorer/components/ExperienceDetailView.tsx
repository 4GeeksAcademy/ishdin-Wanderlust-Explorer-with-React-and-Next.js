"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { experiences } from "../data/experiences";
import useFavorites from "../hooks/useFavorites";
import FavoriteButton from "./FavoriteButton";

const ExperienceDetailView = () => {
  const params = useParams<{ id: string }>();
  const experience = experiences.find((item) => item.id === params.id);
  const { favoriteIds, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} | Wanderlust Labs`;
    }
  }, [experience]);

  if (!experience) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Experience not found</h1>
        <Link href="/experiences" className="mt-6 inline-block text-teal-700">
          Back to experiences
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/experiences" className="font-medium text-teal-700">
        ← Back to experiences
      </Link>

      <div className="mt-6 overflow-hidden rounded-3xl">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-[320px] w-full object-cover sm:h-[480px]"
        />
      </div>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="font-semibold text-teal-700">{experience.category}</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
            {experience.title}
          </h1>
          <p className="mt-3 text-slate-500">{experience.destination}</p>
          <p className="mt-3 font-semibold">★ {experience.rating.toFixed(1)}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {experience.description}
          </p>
          <p className="mt-6 text-2xl font-bold">${experience.price}</p>
          <p className="text-sm text-slate-500">per person</p>
        </div>

        <FavoriteButton
          isFavorite={favoriteIds.includes(experience.id)}
          onToggle={() => toggleFavorite(experience.id)}
        />
      </section>
    </main>
  );
};

export default ExperienceDetailView;
