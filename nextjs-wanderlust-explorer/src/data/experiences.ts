export type ExperienceCategory =
  | "Adventure"
  | "Culture"
  | "Food"
  | "Wellness"
  | "Nature";

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-001",
    title: "Adventure Escape in Bangkok",
    description:
      "An active outdoor experience around Bangkok, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Bangkok, Thailand",
    price: 138,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/bangkok-adventure-1/1200/800",
  },
  {
    id: "exp-002",
    title: "Cultural Highlights of Bangkok",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Bangkok unique.",
    category: "Culture",
    destination: "Bangkok, Thailand",
    price: 81,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/bangkok-culture-2/1200/800",
  },
  {
    id: "exp-003",
    title: "Bangkok Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Bangkok with a knowledgeable guide.",
    category: "Food",
    destination: "Bangkok, Thailand",
    price: 65,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/bangkok-food-3/1200/800",
  },
  {
    id: "exp-004",
    title: "Wellness Retreat in Bangkok",
    description:
      "Slow down with a restorative wellness experience in Bangkok, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Bangkok, Thailand",
    price: 107,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/bangkok-wellness-4/1200/800",
  },
  {
    id: "exp-005",
    title: "Nature Experience near Bangkok",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Bangkok in a relaxed guided experience.",
    category: "Nature",
    destination: "Bangkok, Thailand",
    price: 94,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/bangkok-nature-5/1200/800",
  },
  {
    id: "exp-006",
    title: "Adventure Escape in Kyoto",
    description:
      "An active outdoor experience around Kyoto, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Kyoto, Japan",
    price: 146,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/kyoto-adventure-6/1200/800",
  },
  {
    id: "exp-007",
    title: "Cultural Highlights of Kyoto",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Kyoto unique.",
    category: "Culture",
    destination: "Kyoto, Japan",
    price: 89,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/kyoto-culture-7/1200/800",
  },
  {
    id: "exp-008",
    title: "Kyoto Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Kyoto with a knowledgeable guide.",
    category: "Food",
    destination: "Kyoto, Japan",
    price: 73,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/kyoto-food-8/1200/800",
  },
  {
    id: "exp-009",
    title: "Wellness Retreat in Kyoto",
    description:
      "Slow down with a restorative wellness experience in Kyoto, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Kyoto, Japan",
    price: 115,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/kyoto-wellness-9/1200/800",
  },
  {
    id: "exp-010",
    title: "Nature Experience near Kyoto",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Kyoto in a relaxed guided experience.",
    category: "Nature",
    destination: "Kyoto, Japan",
    price: 102,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/kyoto-nature-10/1200/800",
  },
  {
    id: "exp-011",
    title: "Adventure Escape in Bali",
    description:
      "An active outdoor experience around Bali, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Bali, Indonesia",
    price: 154,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/bali-adventure-11/1200/800",
  },
  {
    id: "exp-012",
    title: "Cultural Highlights of Bali",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Bali unique.",
    category: "Culture",
    destination: "Bali, Indonesia",
    price: 97,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/bali-culture-12/1200/800",
  },
  {
    id: "exp-013",
    title: "Bali Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Bali with a knowledgeable guide.",
    category: "Food",
    destination: "Bali, Indonesia",
    price: 81,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/bali-food-13/1200/800",
  },
  {
    id: "exp-014",
    title: "Wellness Retreat in Bali",
    description:
      "Slow down with a restorative wellness experience in Bali, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Bali, Indonesia",
    price: 123,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/bali-wellness-14/1200/800",
  },
  {
    id: "exp-015",
    title: "Nature Experience near Bali",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Bali in a relaxed guided experience.",
    category: "Nature",
    destination: "Bali, Indonesia",
    price: 110,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/bali-nature-15/1200/800",
  },
  {
    id: "exp-016",
    title: "Adventure Escape in Reykjavik",
    description:
      "An active outdoor experience around Reykjavik, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Reykjavik, Iceland",
    price: 162,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/reykjavik-adventure-16/1200/800",
  },
  {
    id: "exp-017",
    title: "Cultural Highlights of Reykjavik",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Reykjavik unique.",
    category: "Culture",
    destination: "Reykjavik, Iceland",
    price: 105,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/reykjavik-culture-17/1200/800",
  },
  {
    id: "exp-018",
    title: "Reykjavik Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Reykjavik with a knowledgeable guide.",
    category: "Food",
    destination: "Reykjavik, Iceland",
    price: 89,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/reykjavik-food-18/1200/800",
  },
  {
    id: "exp-019",
    title: "Wellness Retreat in Reykjavik",
    description:
      "Slow down with a restorative wellness experience in Reykjavik, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Reykjavik, Iceland",
    price: 131,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/reykjavik-wellness-19/1200/800",
  },
  {
    id: "exp-020",
    title: "Nature Experience near Reykjavik",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Reykjavik in a relaxed guided experience.",
    category: "Nature",
    destination: "Reykjavik, Iceland",
    price: 118,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/reykjavik-nature-20/1200/800",
  },
  {
    id: "exp-021",
    title: "Adventure Escape in Lisbon",
    description:
      "An active outdoor experience around Lisbon, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Lisbon, Portugal",
    price: 170,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/lisbon-adventure-21/1200/800",
  },
  {
    id: "exp-022",
    title: "Cultural Highlights of Lisbon",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Lisbon unique.",
    category: "Culture",
    destination: "Lisbon, Portugal",
    price: 113,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/lisbon-culture-22/1200/800",
  },
  {
    id: "exp-023",
    title: "Lisbon Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Lisbon with a knowledgeable guide.",
    category: "Food",
    destination: "Lisbon, Portugal",
    price: 97,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/lisbon-food-23/1200/800",
  },
  {
    id: "exp-024",
    title: "Wellness Retreat in Lisbon",
    description:
      "Slow down with a restorative wellness experience in Lisbon, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Lisbon, Portugal",
    price: 139,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/lisbon-wellness-24/1200/800",
  },
  {
    id: "exp-025",
    title: "Nature Experience near Lisbon",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Lisbon in a relaxed guided experience.",
    category: "Nature",
    destination: "Lisbon, Portugal",
    price: 126,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/lisbon-nature-25/1200/800",
  },
  {
    id: "exp-026",
    title: "Adventure Escape in Barcelona",
    description:
      "An active outdoor experience around Barcelona, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Barcelona, Spain",
    price: 178,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/barcelona-adventure-26/1200/800",
  },
  {
    id: "exp-027",
    title: "Cultural Highlights of Barcelona",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Barcelona unique.",
    category: "Culture",
    destination: "Barcelona, Spain",
    price: 121,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/barcelona-culture-27/1200/800",
  },
  {
    id: "exp-028",
    title: "Barcelona Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Barcelona with a knowledgeable guide.",
    category: "Food",
    destination: "Barcelona, Spain",
    price: 105,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/barcelona-food-28/1200/800",
  },
  {
    id: "exp-029",
    title: "Wellness Retreat in Barcelona",
    description:
      "Slow down with a restorative wellness experience in Barcelona, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Barcelona, Spain",
    price: 147,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/barcelona-wellness-29/1200/800",
  },
  {
    id: "exp-030",
    title: "Nature Experience near Barcelona",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Barcelona in a relaxed guided experience.",
    category: "Nature",
    destination: "Barcelona, Spain",
    price: 134,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/barcelona-nature-30/1200/800",
  },
  {
    id: "exp-031",
    title: "Adventure Escape in Marrakech",
    description:
      "An active outdoor experience around Marrakech, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Marrakech, Morocco",
    price: 186,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/marrakech-adventure-31/1200/800",
  },
  {
    id: "exp-032",
    title: "Cultural Highlights of Marrakech",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Marrakech unique.",
    category: "Culture",
    destination: "Marrakech, Morocco",
    price: 129,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/marrakech-culture-32/1200/800",
  },
  {
    id: "exp-033",
    title: "Marrakech Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Marrakech with a knowledgeable guide.",
    category: "Food",
    destination: "Marrakech, Morocco",
    price: 113,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/marrakech-food-33/1200/800",
  },
  {
    id: "exp-034",
    title: "Wellness Retreat in Marrakech",
    description:
      "Slow down with a restorative wellness experience in Marrakech, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Marrakech, Morocco",
    price: 155,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/marrakech-wellness-34/1200/800",
  },
  {
    id: "exp-035",
    title: "Nature Experience near Marrakech",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Marrakech in a relaxed guided experience.",
    category: "Nature",
    destination: "Marrakech, Morocco",
    price: 142,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/marrakech-nature-35/1200/800",
  },
  {
    id: "exp-036",
    title: "Adventure Escape in Cape Town",
    description:
      "An active outdoor experience around Cape Town, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Cape Town, South Africa",
    price: 138,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/cape-town-adventure-36/1200/800",
  },
  {
    id: "exp-037",
    title: "Cultural Highlights of Cape Town",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Cape Town unique.",
    category: "Culture",
    destination: "Cape Town, South Africa",
    price: 81,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/cape-town-culture-37/1200/800",
  },
  {
    id: "exp-038",
    title: "Cape Town Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Cape Town with a knowledgeable guide.",
    category: "Food",
    destination: "Cape Town, South Africa",
    price: 65,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/cape-town-food-38/1200/800",
  },
  {
    id: "exp-039",
    title: "Wellness Retreat in Cape Town",
    description:
      "Slow down with a restorative wellness experience in Cape Town, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Cape Town, South Africa",
    price: 107,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/cape-town-wellness-39/1200/800",
  },
  {
    id: "exp-040",
    title: "Nature Experience near Cape Town",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Cape Town in a relaxed guided experience.",
    category: "Nature",
    destination: "Cape Town, South Africa",
    price: 94,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/cape-town-nature-40/1200/800",
  },
  {
    id: "exp-041",
    title: "Adventure Escape in Queenstown",
    description:
      "An active outdoor experience around Queenstown, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Queenstown, New Zealand",
    price: 146,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/queenstown-adventure-41/1200/800",
  },
  {
    id: "exp-042",
    title: "Cultural Highlights of Queenstown",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Queenstown unique.",
    category: "Culture",
    destination: "Queenstown, New Zealand",
    price: 89,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/queenstown-culture-42/1200/800",
  },
  {
    id: "exp-043",
    title: "Queenstown Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Queenstown with a knowledgeable guide.",
    category: "Food",
    destination: "Queenstown, New Zealand",
    price: 73,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/queenstown-food-43/1200/800",
  },
  {
    id: "exp-044",
    title: "Wellness Retreat in Queenstown",
    description:
      "Slow down with a restorative wellness experience in Queenstown, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Queenstown, New Zealand",
    price: 115,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/queenstown-wellness-44/1200/800",
  },
  {
    id: "exp-045",
    title: "Nature Experience near Queenstown",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Queenstown in a relaxed guided experience.",
    category: "Nature",
    destination: "Queenstown, New Zealand",
    price: 102,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/queenstown-nature-45/1200/800",
  },
  {
    id: "exp-046",
    title: "Adventure Escape in Cusco",
    description:
      "An active outdoor experience around Cusco, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Cusco, Peru",
    price: 154,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/cusco-adventure-46/1200/800",
  },
  {
    id: "exp-047",
    title: "Cultural Highlights of Cusco",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Cusco unique.",
    category: "Culture",
    destination: "Cusco, Peru",
    price: 97,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/cusco-culture-47/1200/800",
  },
  {
    id: "exp-048",
    title: "Cusco Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Cusco with a knowledgeable guide.",
    category: "Food",
    destination: "Cusco, Peru",
    price: 81,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/cusco-food-48/1200/800",
  },
  {
    id: "exp-049",
    title: "Wellness Retreat in Cusco",
    description:
      "Slow down with a restorative wellness experience in Cusco, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Cusco, Peru",
    price: 123,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/cusco-wellness-49/1200/800",
  },
  {
    id: "exp-050",
    title: "Nature Experience near Cusco",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Cusco in a relaxed guided experience.",
    category: "Nature",
    destination: "Cusco, Peru",
    price: 110,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/cusco-nature-50/1200/800",
  },
  {
    id: "exp-051",
    title: "Adventure Escape in Rome",
    description:
      "An active outdoor experience around Rome, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Rome, Italy",
    price: 162,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/rome-adventure-51/1200/800",
  },
  {
    id: "exp-052",
    title: "Cultural Highlights of Rome",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Rome unique.",
    category: "Culture",
    destination: "Rome, Italy",
    price: 105,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/rome-culture-52/1200/800",
  },
  {
    id: "exp-053",
    title: "Rome Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Rome with a knowledgeable guide.",
    category: "Food",
    destination: "Rome, Italy",
    price: 89,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/rome-food-53/1200/800",
  },
  {
    id: "exp-054",
    title: "Wellness Retreat in Rome",
    description:
      "Slow down with a restorative wellness experience in Rome, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Rome, Italy",
    price: 131,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/rome-wellness-54/1200/800",
  },
  {
    id: "exp-055",
    title: "Nature Experience near Rome",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Rome in a relaxed guided experience.",
    category: "Nature",
    destination: "Rome, Italy",
    price: 118,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/rome-nature-55/1200/800",
  },
  {
    id: "exp-056",
    title: "Adventure Escape in Paris",
    description:
      "An active outdoor experience around Paris, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Paris, France",
    price: 170,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/paris-adventure-56/1200/800",
  },
  {
    id: "exp-057",
    title: "Cultural Highlights of Paris",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Paris unique.",
    category: "Culture",
    destination: "Paris, France",
    price: 113,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/paris-culture-57/1200/800",
  },
  {
    id: "exp-058",
    title: "Paris Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Paris with a knowledgeable guide.",
    category: "Food",
    destination: "Paris, France",
    price: 97,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/paris-food-58/1200/800",
  },
  {
    id: "exp-059",
    title: "Wellness Retreat in Paris",
    description:
      "Slow down with a restorative wellness experience in Paris, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Paris, France",
    price: 139,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/paris-wellness-59/1200/800",
  },
  {
    id: "exp-060",
    title: "Nature Experience near Paris",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Paris in a relaxed guided experience.",
    category: "Nature",
    destination: "Paris, France",
    price: 126,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/paris-nature-60/1200/800",
  },
  {
    id: "exp-061",
    title: "Adventure Escape in Dubrovnik",
    description:
      "An active outdoor experience around Dubrovnik, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Dubrovnik, Croatia",
    price: 178,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/dubrovnik-adventure-61/1200/800",
  },
  {
    id: "exp-062",
    title: "Cultural Highlights of Dubrovnik",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Dubrovnik unique.",
    category: "Culture",
    destination: "Dubrovnik, Croatia",
    price: 121,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/dubrovnik-culture-62/1200/800",
  },
  {
    id: "exp-063",
    title: "Dubrovnik Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Dubrovnik with a knowledgeable guide.",
    category: "Food",
    destination: "Dubrovnik, Croatia",
    price: 105,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/dubrovnik-food-63/1200/800",
  },
  {
    id: "exp-064",
    title: "Wellness Retreat in Dubrovnik",
    description:
      "Slow down with a restorative wellness experience in Dubrovnik, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Dubrovnik, Croatia",
    price: 147,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/dubrovnik-wellness-64/1200/800",
  },
  {
    id: "exp-065",
    title: "Nature Experience near Dubrovnik",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Dubrovnik in a relaxed guided experience.",
    category: "Nature",
    destination: "Dubrovnik, Croatia",
    price: 134,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/dubrovnik-nature-65/1200/800",
  },
  {
    id: "exp-066",
    title: "Adventure Escape in Vancouver",
    description:
      "An active outdoor experience around Vancouver, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Vancouver, Canada",
    price: 186,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/vancouver-adventure-66/1200/800",
  },
  {
    id: "exp-067",
    title: "Cultural Highlights of Vancouver",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Vancouver unique.",
    category: "Culture",
    destination: "Vancouver, Canada",
    price: 129,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/vancouver-culture-67/1200/800",
  },
  {
    id: "exp-068",
    title: "Vancouver Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Vancouver with a knowledgeable guide.",
    category: "Food",
    destination: "Vancouver, Canada",
    price: 113,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/vancouver-food-68/1200/800",
  },
  {
    id: "exp-069",
    title: "Wellness Retreat in Vancouver",
    description:
      "Slow down with a restorative wellness experience in Vancouver, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Vancouver, Canada",
    price: 155,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/vancouver-wellness-69/1200/800",
  },
  {
    id: "exp-070",
    title: "Nature Experience near Vancouver",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Vancouver in a relaxed guided experience.",
    category: "Nature",
    destination: "Vancouver, Canada",
    price: 142,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/vancouver-nature-70/1200/800",
  },
  {
    id: "exp-071",
    title: "Adventure Escape in San José",
    description:
      "An active outdoor experience around San José, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "San José, Costa Rica",
    price: 138,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/san-jos-adventure-71/1200/800",
  },
  {
    id: "exp-072",
    title: "Cultural Highlights of San José",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make San José unique.",
    category: "Culture",
    destination: "San José, Costa Rica",
    price: 81,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/san-jos-culture-72/1200/800",
  },
  {
    id: "exp-073",
    title: "San José Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of San José with a knowledgeable guide.",
    category: "Food",
    destination: "San José, Costa Rica",
    price: 65,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/san-jos-food-73/1200/800",
  },
  {
    id: "exp-074",
    title: "Wellness Retreat in San José",
    description:
      "Slow down with a restorative wellness experience in San José, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "San José, Costa Rica",
    price: 107,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/san-jos-wellness-74/1200/800",
  },
  {
    id: "exp-075",
    title: "Nature Experience near San José",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around San José in a relaxed guided experience.",
    category: "Nature",
    destination: "San José, Costa Rica",
    price: 94,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/san-jos-nature-75/1200/800",
  },
  {
    id: "exp-076",
    title: "Adventure Escape in Istanbul",
    description:
      "An active outdoor experience around Istanbul, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Istanbul, Turkey",
    price: 146,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/istanbul-adventure-76/1200/800",
  },
  {
    id: "exp-077",
    title: "Cultural Highlights of Istanbul",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Istanbul unique.",
    category: "Culture",
    destination: "Istanbul, Turkey",
    price: 89,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/istanbul-culture-77/1200/800",
  },
  {
    id: "exp-078",
    title: "Istanbul Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Istanbul with a knowledgeable guide.",
    category: "Food",
    destination: "Istanbul, Turkey",
    price: 73,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/istanbul-food-78/1200/800",
  },
  {
    id: "exp-079",
    title: "Wellness Retreat in Istanbul",
    description:
      "Slow down with a restorative wellness experience in Istanbul, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Istanbul, Turkey",
    price: 115,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/istanbul-wellness-79/1200/800",
  },
  {
    id: "exp-080",
    title: "Nature Experience near Istanbul",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Istanbul in a relaxed guided experience.",
    category: "Nature",
    destination: "Istanbul, Turkey",
    price: 102,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/istanbul-nature-80/1200/800",
  },
  {
    id: "exp-081",
    title: "Adventure Escape in Seoul",
    description:
      "An active outdoor experience around Seoul, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Seoul, South Korea",
    price: 154,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/seoul-adventure-81/1200/800",
  },
  {
    id: "exp-082",
    title: "Cultural Highlights of Seoul",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Seoul unique.",
    category: "Culture",
    destination: "Seoul, South Korea",
    price: 97,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/seoul-culture-82/1200/800",
  },
  {
    id: "exp-083",
    title: "Seoul Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Seoul with a knowledgeable guide.",
    category: "Food",
    destination: "Seoul, South Korea",
    price: 81,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/seoul-food-83/1200/800",
  },
  {
    id: "exp-084",
    title: "Wellness Retreat in Seoul",
    description:
      "Slow down with a restorative wellness experience in Seoul, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Seoul, South Korea",
    price: 123,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/seoul-wellness-84/1200/800",
  },
  {
    id: "exp-085",
    title: "Nature Experience near Seoul",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Seoul in a relaxed guided experience.",
    category: "Nature",
    destination: "Seoul, South Korea",
    price: 110,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/seoul-nature-85/1200/800",
  },
  {
    id: "exp-086",
    title: "Adventure Escape in Mexico City",
    description:
      "An active outdoor experience around Mexico City, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Mexico City, Mexico",
    price: 162,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/mexico-city-adventure-86/1200/800",
  },
  {
    id: "exp-087",
    title: "Cultural Highlights of Mexico City",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Mexico City unique.",
    category: "Culture",
    destination: "Mexico City, Mexico",
    price: 105,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/mexico-city-culture-87/1200/800",
  },
  {
    id: "exp-088",
    title: "Mexico City Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Mexico City with a knowledgeable guide.",
    category: "Food",
    destination: "Mexico City, Mexico",
    price: 89,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/mexico-city-food-88/1200/800",
  },
  {
    id: "exp-089",
    title: "Wellness Retreat in Mexico City",
    description:
      "Slow down with a restorative wellness experience in Mexico City, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Mexico City, Mexico",
    price: 131,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/mexico-city-wellness-89/1200/800",
  },
  {
    id: "exp-090",
    title: "Nature Experience near Mexico City",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Mexico City in a relaxed guided experience.",
    category: "Nature",
    destination: "Mexico City, Mexico",
    price: 118,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/mexico-city-nature-90/1200/800",
  },
  {
    id: "exp-091",
    title: "Adventure Escape in Sydney",
    description:
      "An active outdoor experience around Sydney, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Sydney, Australia",
    price: 170,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/sydney-adventure-91/1200/800",
  },
  {
    id: "exp-092",
    title: "Cultural Highlights of Sydney",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Sydney unique.",
    category: "Culture",
    destination: "Sydney, Australia",
    price: 113,
    rating: 4.7,
    imageUrl:
      "https://picsum.photos/seed/sydney-culture-92/1200/800",
  },
  {
    id: "exp-093",
    title: "Sydney Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Sydney with a knowledgeable guide.",
    category: "Food",
    destination: "Sydney, Australia",
    price: 97,
    rating: 4.5,
    imageUrl:
      "https://picsum.photos/seed/sydney-food-93/1200/800",
  },
  {
    id: "exp-094",
    title: "Wellness Retreat in Sydney",
    description:
      "Slow down with a restorative wellness experience in Sydney, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Sydney, Australia",
    price: 139,
    rating: 4.3,
    imageUrl:
      "https://picsum.photos/seed/sydney-wellness-94/1200/800",
  },
  {
    id: "exp-095",
    title: "Nature Experience near Sydney",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Sydney in a relaxed guided experience.",
    category: "Nature",
    destination: "Sydney, Australia",
    price: 126,
    rating: 5.0,
    imageUrl:
      "https://picsum.photos/seed/sydney-nature-95/1200/800",
  },
  {
    id: "exp-096",
    title: "Adventure Escape in Athens",
    description:
      "An active outdoor experience around Athens, combining scenic routes, local guides, and a memorable dose of adventure.",
    category: "Adventure",
    destination: "Athens, Greece",
    price: 178,
    rating: 4.8,
    imageUrl:
      "https://picsum.photos/seed/athens-adventure-96/1200/800",
  },
  {
    id: "exp-097",
    title: "Cultural Highlights of Athens",
    description:
      "Discover the history, traditions, neighborhoods, and local stories that make Athens unique.",
    category: "Culture",
    destination: "Athens, Greece",
    price: 121,
    rating: 4.6,
    imageUrl:
      "https://picsum.photos/seed/athens-culture-97/1200/800",
  },
  {
    id: "exp-098",
    title: "Athens Food Discovery",
    description:
      "Taste signature dishes and local favorites while exploring the food culture of Athens with a knowledgeable guide.",
    category: "Food",
    destination: "Athens, Greece",
    price: 105,
    rating: 4.4,
    imageUrl:
      "https://picsum.photos/seed/athens-food-98/1200/800",
  },
  {
    id: "exp-099",
    title: "Wellness Retreat in Athens",
    description:
      "Slow down with a restorative wellness experience in Athens, featuring mindful activities and time to recharge.",
    category: "Wellness",
    destination: "Athens, Greece",
    price: 147,
    rating: 4.2,
    imageUrl:
      "https://picsum.photos/seed/athens-wellness-99/1200/800",
  },
  {
    id: "exp-100",
    title: "Nature Experience near Athens",
    description:
      "Explore beautiful landscapes, wildlife, and natural scenery around Athens in a relaxed guided experience.",
    category: "Nature",
    destination: "Athens, Greece",
    price: 134,
    rating: 4.9,
    imageUrl:
      "https://picsum.photos/seed/athens-nature-100/1200/800",
  }
];
