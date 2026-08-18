import type { Metadata } from "next";
import "./globals.css";
import FavoritesProvider from "../../components/FavoritesProvider";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "Wanderlust Labs",
  description: "Discover curated travel experiences around the world.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <FavoritesProvider>
          <Navbar />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
