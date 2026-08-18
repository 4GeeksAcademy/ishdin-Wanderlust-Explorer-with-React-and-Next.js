"use client";

import { createContext, ReactNode, useState } from "react";

export interface FavoritesContextValue {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  favoriteCount: number;
}

export const FavoritesContext = createContext<FavoritesContextValue | null>(
  null,
);

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        toggleFavorite,
        favoriteCount: favoriteIds.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
