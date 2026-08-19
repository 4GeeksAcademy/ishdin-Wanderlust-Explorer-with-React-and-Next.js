# Wanderlust Labs Experience Explorer

## Routes

- `/` — Home
- `/experiences` — Explorer with search/category/destination filters
- `/experiences/[id]` — Experience detail
- `/favorites` — Favorites
- `/profile` — Mock profile

## Folder placement

Copy these folders into the root of your Next.js project:

- `app/`
- `components/`
- `data/`
- `hooks/`
- `types/`

## Important behavior

- The dataset contains exactly 100 `Experience` objects.
- All experience data uses the shared `Experience` interface in `types/experience.ts`.
- Favorites are stored in a top-level React `useState` in `FavoritesProvider`.
- No localStorage or external state library is used.
- Experience cards receive favorite state and toggle callbacks through props.
- Explorer search/category/destination values are synchronized to URL query parameters.
- Search uses a case-insensitive regular expression against experience titles.
- Navbar active styles use `usePathname`.
- Detail IDs are read from `/experiences/[id]` with `useParams`.
- Navigation uses Next.js `Link`.

## Tailwind

The included `app/globals.css` uses Tailwind CSS v4 syntax:

```css
@import "tailwindcss";
```

If your existing Next.js project already has Tailwind configured, you may keep your existing
`globals.css` instead of replacing it.

## Design reference

The Wanderlust Labs interface was inspired by the following real travel and experience platforms:

1. **Airbnb Experiences**  
   https://www.airbnb.com/s/experiences  
   Inspiration: image-focused experience cards, simple discovery layout, ratings, pricing information, and clear browsing patterns.

2. **GetYourGuide**  
   https://www.getyourguide.com/  
   Inspiration: searchable experience listings, category and destination filtering, responsive card grids, and prominent activity information.

3. **Viator**  
   https://www.viator.com/  
   Inspiration: experience discovery, rating and price emphasis, travel activity cards, and easy navigation between listings and detail views.

These references were used only as visual and UX inspiration. The Wanderlust Labs interface and implementation are independently built using Next.js, React, TypeScript, HTML, and Tailwind CSS.

