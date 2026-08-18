"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useFavorites from "../hooks/useFavorites";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { favoriteCount } = useFavorites();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-teal-700">
          Wanderlust Labs
        </Link>

        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium ${
                isActive(item.href)
                  ? "bg-teal-700 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {item.label}
              {item.href === "/favorites" && ` (${favoriteCount})`}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
