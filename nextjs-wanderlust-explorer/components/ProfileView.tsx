"use client";

import useFavorites from "../hooks/useFavorites";
import ProfileCard from "./ProfileCard";

const ProfileView = () => {
  const { favoriteCount } = useFavorites();

  return (
    <main className="px-4 py-16 sm:px-6">
      <ProfileCard favoriteCount={favoriteCount} />
    </main>
  );
};

export default ProfileView;
