import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 200 * 100,
    nickname: "Starter Plan",
    offers: [
      "- Logo design and branding basics",
      "- Printing: 1000 business cards",
      "- Social media management: 2 platforms, 15 posts/month",
      "- Video sessions will be added as needed, Extra",

    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 300 * 100,
    nickname: "Growth Plan",
    offers: [
      "- Logo and social media kit",
      "- Printing: 1000 business cards + 100 posters",
      "- Social media management: 2 platforms, 20 posts/month",
      "- Photography: Product photoshoot (up to 10 photos)",
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: 800 * 100,
    nickname: "Premium Plan",
    offers: [
      "- Full branding suite (logos, animations, social media kit)",
      "- Printing: 1000 high quality business cards + 100 posters",
      "- Social media management: 2 platforms, 30 posts/month",
      "- Ads: Online ad campaign setup",
      "- Photography: Product photoshoot (up to 20 photos) + one videography session",
    ],
  },
];
