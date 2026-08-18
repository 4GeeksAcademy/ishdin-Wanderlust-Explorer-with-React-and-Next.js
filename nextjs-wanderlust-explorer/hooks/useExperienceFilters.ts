"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Experience, ExperienceCategory } from "../types/experience";

const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const useExperienceFilters = (items: Experience[]) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [category, setCategory] = useState(
    searchParams.get("category") ?? "All",
  );
  const [destination, setDestination] = useState(
    searchParams.get("destination") ?? "",
  );

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
    setCategory(searchParams.get("category") ?? "All");
    setDestination(searchParams.get("destination") ?? "");
  }, [searchParams]);

  const updateUrl = (
    nextSearch: string,
    nextCategory: string,
    nextDestination: string,
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    nextSearch ? params.set("search", nextSearch) : params.delete("search");
    nextCategory !== "All"
      ? params.set("category", nextCategory)
      : params.delete("category");
    nextDestination
      ? params.set("destination", nextDestination)
      : params.delete("destination");

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const setSearchFilter = (value: string) => {
    setSearch(value);
    updateUrl(value, category, destination);
  };

  const setCategoryFilter = (value: string) => {
    setCategory(value);
    updateUrl(search, value, destination);
  };

  const setDestinationFilter = (value: string) => {
    setDestination(value);
    updateUrl(search, category, value);
  };

  const filteredExperiences = useMemo(() => {
    const titleRegex = new RegExp(escapeRegex(search), "i");
    const destinationTerm = destination.trim().toLowerCase();

    return items.filter((experience) => {
      const matchesTitle = titleRegex.test(experience.title);
      const matchesCategory =
        category === "All" || experience.category === category;
      const matchesDestination =
        !destinationTerm ||
        experience.destination.toLowerCase().includes(destinationTerm);

      return matchesTitle && matchesCategory && matchesDestination;
    });
  }, [items, search, category, destination]);

  return {
    search,
    category: category as ExperienceCategory | "All",
    destination,
    filteredExperiences,
    setSearchFilter,
    setCategoryFilter,
    setDestinationFilter,
  };
};

export default useExperienceFilters;
