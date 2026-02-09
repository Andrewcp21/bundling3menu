export interface Course {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
  badge: string | null;
}

export const courses: Course[] = [
  {
    id: "1",
    category: "Cookies",
    name: "Cookie-Dough-Filled Soft Baked Cookie Monster",
    price: 125000,
    description: "Soft cookie dengan wangi manis vanila, tekstur bagian luar lebih kering & bagian tengah soft",
    image: "/images/products/C1.png",
    badge: null
  },
  {
    id: "2",
    category: "Cookies",
    name: "Levain Bakery Style Classic Walnut-Chocolate Chip Cookie",
    price: 125000,
    description: "BEST SELLER. Giant soft cookie, crunchy crust, gooey centers. Premium chocolate + tekstur dari walnuts.",
    image: "/images/products/C2.png",
    badge: "Best Seller"
  },
  {
    id: "3",
    category: "Cookies",
    name: "OG Brown Butter Chocolate Chunk Cookie 2 Ways",
    price: 175000,
    description: "BEST SELLER. Chewy, nutty, sweet and savory, 1 flavor 2 bentuk: classic chewy atau thin cookie",
    image: "/images/products/C3.png",
    badge: "Best Seller"
  },
  {
    id: "4",
    category: "Cookies",
    name: "Crunchy Bite-Sized Chocolate Chip Cookies",
    price: 125000,
    description: "BEST SELLER. Light, crunchy, brittle, tahan lama untuk penyimpanan jangka panjang",
    image: "/images/products/C4.png",
    badge: "Best Seller"
  },
  {
    id: "5",
    category: "Cookies",
    name: "Cream-Cheese-Filled Red Velvet Crinkle Cookie",
    price: 125000,
    description: "Tangy, tender crumbs, red velvet cake in a cookie, crunchy crinkle crust",
    image: "/images/products/C5.png",
    badge: null
  },
  {
    id: "6",
    category: "Cookies",
    name: "Caramelized White Chocolate Cookie: Matcha & Cocoa",
    price: 125000,
    description: "No-mixer recipe, soft baked cookie dengan tekstur moist chewy centers & crunchy crust",
    image: "/images/products/C6.png",
    badge: null
  },
  {
    id: "7",
    category: "Cookies",
    name: "Chocolate Peppermint Marshmallow Cookie",
    price: 125000,
    description: "Christmas Flavors. Chewy, minty flavor, brownie-like crumbs dengan isian marshmallow",
    image: "/images/products/C7.png",
    badge: null
  },
  {
    id: "8",
    category: "Cookies",
    name: "Maple-Glazed Gingerbread Crinkle Cookie",
    price: 125000,
    description: "Soft, cakey, warm, wangi rempah",
    image: "/images/products/C8.png",
    badge: null
  },
  {
    id: "9",
    category: "Cookies",
    name: "Classic Chocolate Chip Chewy Oatmeal Cookie",
    price: 125000,
    description: "Gluten-Free Series. Chewy, gluten-free, bertekstur dengan topping rolled oats",
    image: "/images/products/C9.png",
    badge: null
  },
  {
    id: "10",
    category: "Cookies",
    name: "Dark Chocolate Almond Oatmeal Bark & Brittle",
    price: 150000,
    description: "Gluten-Free Series. 2 tekstur: chewy atau crunchy brittle",
    image: "/images/products/C10.png",
    badge: null
  },
  {
    id: "11",
    category: "Cookies",
    name: "Assorted Peanut Butter Cookies",
    price: 175000,
    description: "Gluten-Free Series. Thumbprint & Crisscross: crunchy. Bars: fudgy",
    image: "/images/products/C11.png",
    badge: null
  },
  {
    id: "12",
    category: "Cookies",
    name: "Assorted Savory Cookies",
    price: 150000,
    description: "Gluten-Free Series. Eggless recipe, renyah & gurih, tahan lama",
    image: "/images/products/C12.png",
    badge: null
  },
  {
    id: "13",
    category: "Cookies",
    name: "Chewy Banana Cookie & Classic Banana Bread",
    price: 125000,
    description: "Gluten-Free Series, no-mixer recipe. Tekstur padat & chewy/moist",
    image: "/images/products/C13.png",
    badge: null
  },
  {
    id: "14",
    category: "Cookies",
    name: "Assorted Cookie Sandwiches",
    price: 125000,
    description: "No-mixer recipe. Crunchy kering dan tahan lama",
    image: "/images/products/C14.png",
    badge: null
  },
  {
    id: "15",
    category: "Cookies",
    name: "Dark Chocolate Mint Cream Cookie",
    price: 125000,
    description: "NEW. Buttery & crunchy chocolate cookie base, mint cream filling",
    image: "/images/products/C15.png",
    badge: "New"
  },
  {
    id: "16",
    category: "Bars & Brownies",
    name: "Classic Dark Chocolate Sea Salt Fudge Brownie",
    price: 75000,
    description: "Padat, fudge-like, deep chocolate, moist, crunchy top crust",
    image: "/images/products/BB1.png",
    badge: null
  },
  {
    id: "17",
    category: "Bars & Brownies",
    name: "Red Velvet Cheesecake Marbled Fudge Bars",
    price: 125000,
    description: "Padat & fudgy, manis & asam dari baked cheesecake",
    image: "/images/products/BB2.png",
    badge: null
  },
  {
    id: "18",
    category: "Bars & Brownies",
    name: "Gluten-Free Shiny Crusted Brownie",
    price: 125000,
    description: "BEST SELLER. Chewy Matcha White Chocolate & Dark Chocolate Brownie + Crunchy Brownie Brittle",
    image: "/images/products/BB3.png",
    badge: "Best Seller"
  },
  {
    id: "19",
    category: "Breads",
    name: "Classic Roti Bloeder (Poolish Method)",
    price: 150000,
    description: "BEST SELLER. Poolish starter, windowpane kneading",
    image: "/images/products/BR1.png",
    badge: "Best Seller"
  },
  {
    id: "20",
    category: "Breads",
    name: "Milk Bread 101",
    price: 250000,
    description: "Dasar-dasar pembuatan roti, 1 adonan berbagai jenis roti. Cocok untuk pemula",
    image: "/images/products/BR2.png",
    badge: null
  },
  {
    id: "21",
    category: "Breads",
    name: "Brioche Seaweed Floss Buns",
    price: 150000,
    description: "Soft & buttery, kombinasi asin dan manis",
    image: "/images/products/BR3.png",
    badge: null
  },
  {
    id: "22",
    category: "Pastries",
    name: "Assorted Scones",
    price: 150000,
    description: "Buttery, flaky, moist & doughy centers, crunchy crust. No mixer recipe",
    image: "/images/products/PA1.png",
    badge: null
  },
  {
    id: "23",
    category: "Pastries",
    name: "Crunchy Cream Puffs (Choux au Craquelin)",
    price: 150000,
    description: "Basic choux pastry, cookie topping, pastry cream + variasi Deluxe",
    image: "/images/products/PA2.png",
    badge: null
  },
  {
    id: "24",
    category: "Pastries",
    name: "Flaky Egg Tarts (Portuguese Egg Tart)",
    price: 150000,
    description: "Flaky, crispy, kulit berlapis-lapis dengan filling egg custard lembut",
    image: "/images/products/PA3.png",
    badge: null
  },
  {
    id: "25",
    category: "Others",
    name: "Red Velvet Cheesecake Pie",
    price: 200000,
    description: "Sweet & tangy, tanpa menggunakan perisa/pasta red velvet",
    image: "/images/products/OT1.png",
    badge: null
  },
  {
    id: "26",
    category: "Others",
    name: "Brown Butter Chocolate Cookie Birthday Cake",
    price: 200000,
    description: "Brown butter cookie dough, whipped dark chocolate ganache",
    image: "/images/products/OT2.png",
    badge: null
  },
  {
    id: "28",
    category: "Others",
    name: "Classic Carrot Cake",
    price: 125000,
    description: "Lengkap dengan opsi Gluten-Free dan Regular",
    image: "/images/products/OT3.png",
    badge: null
  },
  {
    id: "29",
    category: "Others",
    name: "Basque Cheesecake",
    price: 125000,
    description: "NEW. Naturally Gluten-Free, no-mixer recipe",
    image: "/images/products/OT4.png",
    badge: "New"
  },
  {
    id: "30",
    category: "Others",
    name: "Classic Tiramisu & Matchamisu",
    price: 150000,
    description: "NEW. Ladyfingers from scratch, mascarpone cream filling",
    image: "/images/products/OT5.png",
    badge: "New"
  }
];

export interface Bundle {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  items: string[];
  image: string;
  color: "gold" | "red" | "brown";
}

export const bundles: Bundle[] = [
  {
    id: "golden-crunch",
    name: "Golden Crunch Set",
    originalPrice: 450000,
    discountedPrice: 360000,
    items: [
      "Crunchy Bite-Sized Chocolate Chip Cookies",
      "Assorted Peanut Butter Cookies",
      "Assorted Savory Cookies"
    ],
    image: "/images/products/C4.png",
    color: "gold"
  },
  {
    id: "ruby-red",
    name: "Ruby Red Delight",
    originalPrice: 450000,
    discountedPrice: 360000,
    items: [
      "Red Velvet Cheesecake Pie",
      "Cream-Cheese-Filled Red Velvet Crinkle Cookie",
      "Red Velvet Cheesecake Marbled Fudge Bars"
    ],
    image: "/images/products/C5.png",
    color: "red"
  },
  {
    id: "signature-loaf",
    name: "Signature Loaf Favorites",
    originalPrice: 250000,
    discountedPrice: 220000,
    items: [
      "Classic Carrot Cake",
      "Classic Banana Bread"
    ],
    image: "/images/products/OT3.png",
    color: "brown"
  }
];

export const WHATSAPP_NUMBER = "6289522453978";
export const CUSTOM_DISCOUNT_PERCENT = 15;
export const PROMO_END_DATE = "2026-02-17T23:59:59+07:00";
