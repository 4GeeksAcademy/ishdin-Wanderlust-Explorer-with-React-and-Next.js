"use client";

import { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesProvider";

const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider.");
  }

  return context;
};

export default useFavorites;
