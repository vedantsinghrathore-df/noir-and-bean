export interface MenuItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  category: "COFFEE" | "BITES";
  description: string;
  notes?: string;
  tag?: string;
  image?: string;
}

export const menuCategories = ["COFFEE", "BITES"] as const;

export const menuItems: MenuItem[] = [
  // COFFEE
  {
    id: "espresso",
    name: "Espresso",
    price: 160,
    formattedPrice: "₹160",
    category: "COFFEE",
    description: "Extracted under 9 bars of pressure. Rich crema, notes of candied orange, dark cocoa nibs, and roasted hazelnut.",
    notes: "Attikan Estate, Biligirirangana Hills (1,400m) • Double Shot",
    tag: "Single Origin",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 220,
    formattedPrice: "₹220",
    category: "COFFEE",
    description: "Equal balance of double ristretto, sweet steamed whole milk, and dense velvety microfoam dusted with roasted cacao.",
    notes: "House Blend: 70% Arabica, 30% Peaberry • 180ml",
    tag: "House Classic",
    image: "https://images.unsplash.com/photo-1572442388796-11668ba67e53?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "flat-white",
    name: "Flat White",
    price: 230,
    formattedPrice: "₹230",
    category: "COFFEE",
    description: "Smooth double shot folded into ultra-silky steamed milk. Thinner micro-crema highlighting natural caramelized sweetness.",
    notes: "Giri Estate, Chikmagalur • Velvety Texture",
    tag: "Barista Favorite",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    price: 240,
    formattedPrice: "₹240",
    category: "COFFEE",
    description: "Slow-dripped over 18 hours in filtered cold spring water. Zero bitterness, deep fruit nuances, and clean winey body.",
    notes: "Kalledevarapura Estate • Served over crystal clear carved ice",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
  },

  // BITES
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    price: 180,
    formattedPrice: "₹180",
    category: "BITES",
    description: "Pure AOP Charentes-Poitou French cultured butter, laminated over 72 hours. Golden shattered exterior with open honeycomb interior.",
    notes: "Baked fresh daily at 7:30 AM & 2:00 PM",
    tag: "Handcrafted",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    price: 240,
    formattedPrice: "₹240",
    category: "BITES",
    description: "Twice-baked croissant infused with Madagascar vanilla syrup, filled with stone-ground almond frangipane and toasted sliced almonds.",
    notes: "Dusting of snow sugar • Warm service",
    tag: "Guest Favorite",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "chocolate-tart",
    name: "Chocolate Tart",
    price: 260,
    formattedPrice: "₹260",
    category: "BITES",
    description: "Single-origin Valrhona 70% dark chocolate silky ganache nestled in a buttery sablé breton pastry crust, finished with Maldon sea salt flakes.",
    notes: "Valrhona Guanaja • Crisp sablé base",
    tag: "Artisan Pâtisserie",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "basque-cheesecake",
    name: "Basque Cheesecake",
    price: 280,
    formattedPrice: "₹280",
    category: "BITES",
    description: "Baked at high heat to achieve an iconic deeply caramelized, bittersweet mahogany crust with an impossibly soft, molten custard heart.",
    notes: "Organic farm cream cheese, Bourbon vanilla",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
  },
];
