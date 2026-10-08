export interface GalleryItem {
  id: string;
  category: "Coffee" | "Interior" | "Pastry" | "Barista" | "People";
  title: string;
  subtitle: string;
  image: string;
  aspectRatio: string;
  tag: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-coffee",
    category: "Coffee",
    title: "Precision Extraction",
    subtitle: "Silky micro-foam and single-origin washed Arabica",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "3/4",
    tag: "01 / EXTRACTION",
  },
  {
    id: "gallery-interior",
    category: "Interior",
    title: "Sanctuary of Warmth",
    subtitle: "Natural white ash, hand-plastered walls, and filtered sunlight",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "4/5",
    tag: "02 / SPACE",
  },
  {
    id: "gallery-pastry",
    category: "Pastry",
    title: "Handcrafted Viennoiserie",
    subtitle: "72-hour lamination with artisanal French cultured butter",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "3/4",
    tag: "03 / BAKERY",
  },
  {
    id: "gallery-barista",
    category: "Barista",
    title: "The Art of Slow Pour",
    subtitle: "Controlled flow rate and temperature tailored for every microlot",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "4/5",
    tag: "04 / CRAFT",
  },
  {
    id: "gallery-people",
    category: "People",
    title: "Quiet Connections",
    subtitle: "Conversations that linger between morning pages and warm porcelain",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16/10",
    tag: "05 / COMMUNITY",
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: "The kind of coffee shop where one cup turns into three hours.",
    author: "Priya Nair",
    role: "Architect & Spatial Designer",
    location: "Indiranagar, Bengaluru",
  },
  {
    id: "testimonial-2",
    quote: "Beautiful space, exceptional coffee, and the almond croissant is incredible.",
    author: "Rohan Mehta",
    role: "Creative Director",
    location: "Koramangala, Bengaluru",
  },
  {
    id: "testimonial-3",
    quote: "Finally found a café that gets both the coffee and the atmosphere right.",
    author: "Ananya Sen",
    role: "Author & Journalist",
    location: "Lavelle Road, Bengaluru",
  },
];

export const experienceFeatures = [
  {
    id: "slow-mornings",
    num: "01",
    title: "Slow Mornings",
    description:
      "Before the city accelerates, the espresso machine hums softly. Sunbeams slice through sheer linen curtains onto warm oak tables, offering a rare pause to read, reflect, and begin with intention.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
    tag: "THE RITUAL",
  },
  {
    id: "good-conversations",
    num: "02",
    title: "Good Conversations",
    description:
      "Acoustics intentionally calibrated for quiet intimacy. Low jazz on vinyl, comfortable banquette seating, and an atmosphere where ideas flow as smoothly as hot water through freshly ground beans.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
    tag: "THE SPACE",
  },
  {
    id: "exceptional-coffee",
    num: "03",
    title: "Exceptional Coffee",
    description:
      "Every harvest is direct-trade sourced from heritage shade-grown plantations in the Western Ghats. Roasted in small batches, ground to microscopic tolerances, and brewed with scientific devotion.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=85",
    tag: "THE CRAFT",
  },
];
