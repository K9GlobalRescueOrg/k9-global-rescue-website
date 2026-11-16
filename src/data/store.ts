export interface StoreProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string | null;
  imageAlt: string;
  priceLabel: string | null;
  checkoutUrl: string | null;
}

// Add approved photos, prices, and product-specific hosted checkout links here.
// Configure size/color selection, inventory, shipping, and taxes in the checkout provider.
export const products: StoreProduct[] = [
  {
    id: "holiday-ornaments",
    name: "K9 Holiday Ornaments",
    category: "Holiday collection",
    description: "More than a decoration: a symbol of compassion, courage, and our commitment to saving animals in need. Every purchase helps support our rescue missions, delivering food, medical care, and hope to animals in war zones and disaster areas.",
    image: "/assets/store/holiday-ornaments-paired.jpg",
    imageAlt: "Two K9 Global Rescue ornament views with gold hanging cords: the rescue quote design and the dog beside a rescue vehicle design.",
    priceLabel: null,
    checkoutUrl: null,
  },
  {
    id: "mugs", name: "Mugs", category: "Everyday essentials",
    description: "Bring K9 Global Rescue to your daily coffee routine. Contact us for mug options.",
    image: null, imageAlt: "", priceLabel: null, checkoutUrl: null,
  },
  {
    id: "keychains", name: "Keychains", category: "Take it with you",
    description: "A small way to carry the mission. Ask about K9 Global Rescue keychains.",
    image: null, imageAlt: "", priceLabel: null, checkoutUrl: null,
  },
];

export function productAction(product: StoreProduct) {
  if (product.checkoutUrl) {
    const url = new URL(product.checkoutUrl);
    if (url.protocol !== "https:") throw new Error(`Use HTTPS checkout for ${product.id}`);
    return { href: url.href, label: "Shop now", external: true };
  }
  return {
    href: `mailto:info@k9globalrescue.org?subject=${encodeURIComponent(`Store inquiry: ${product.name}`)}&body=${encodeURIComponent(`Hello K9 Global Rescue,\n\nI’m interested in ${product.name}. Please send pricing, available options, and shipping details.\n\nQuantity:\nShipping country / postal code:\n\nThank you!`)}`,
    label: "Ask about " + (product.id === "holiday-ornaments" ? "ornaments" : product.name.toLowerCase()),
    external: false,
  };
}

export const ornamentPacks = [
  { quantity: 1, price: "$24.95", url: "https://buy.stripe.com/8x200jeqzgrm8963xses004" },
  { quantity: 2, price: "$44.95", url: "https://buy.stripe.com/5kQaEXfuD0so0GEd82es003" },
  { quantity: 3, price: "$59.95", url: "https://buy.stripe.com/eVq3cv6Y73EAfBy9VQes002" },
  { quantity: 5, price: "$99.95", url: "https://buy.stripe.com/6oU28r3LV7UQ896fgaes001" },
];

export const ornamentImages = [
  { src: "/assets/store/holiday-ornament-quote.jpg", label: "Rescue quote design", alt: "Gold-edged navy K9 Global Rescue ornament with laurel branches, a paw print, and the quote: Saving one dog won’t change the world, but for that one dog the world will change forever." },
  { src: "/assets/store/holiday-ornament-rescue.png", label: "Action · Compassion · Hope design", alt: "Gold-edged K9 Global Rescue ornament depicting a German shepherd beside a rescue vehicle in a snowy setting, with Action, Compassion, Hope lettering." },
];

// Clothing is display-only while sold out; no checkout links are rendered.
export const clothingCollections = [
  {
    "id": "hoodies",
    "title": "Hoodies",
    "model": "Gildan SF500 Softstyle hooded sweatshirt",
    "items": [
      {
        "id": "be-kind-hoodie",
        "name": "Be Kind to Every Kind Hoodie",
        "image": "/assets/store/be-kind-hoodie.jpeg",
        "imageAlt": "Back view of a black K9 Global Rescue hoodie with the gold Be Kind to Every Kind design.",
        "soldOut": true
      },
      {
        "id": "classic-logo-hoodie",
        "name": "Classic Logo Hoodie",
        "image": "/assets/store/classic-logo-hoodie.png",
        "imageAlt": "Back view of a black K9 Global Rescue hoodie with the gold Classic Logo design.",
        "soldOut": true
      },
      {
        "id": "guardian-of-the-pack-hoodie",
        "name": "Guardian of the Pack Hoodie",
        "image": "/assets/store/guardian-of-the-pack-hoodie.png",
        "imageAlt": "Back view of a black K9 Global Rescue hoodie with the gold Guardian of the Pack design.",
        "soldOut": true
      },
      {
        "id": "pointer-and-cat-hoodie",
        "name": "Pointer & Cat Hoodie",
        "image": "/assets/store/pointer-and-cat-hoodie.jpeg",
        "imageAlt": "Back view of a black K9 Global Rescue hoodie with the gold Pointer & Cat design.",
        "soldOut": true
      },
      {
        "id": "rescue-love-hoodie",
        "name": "You Can’t Buy Love Hoodie",
        "image": "/assets/store/rescue-love-hoodie.jpeg",
        "imageAlt": "Back view of a black K9 Global Rescue hoodie with the gold You Can’t Buy Love design.",
        "soldOut": true
      }
    ]
  },
  {
    "id": "shirts",
    "title": "T-shirts",
    "model": "Gildan 64000 Softstyle adult T-shirt",
    "items": [
      {
        "id": "be-kind-t-shirt",
        "name": "Be Kind to Every Kind T-shirt",
        "image": "/assets/store/be-kind-t-shirt.jpeg",
        "imageAlt": "Back view of a black K9 Global Rescue t-shirt with the gold Be Kind to Every Kind design.",
        "soldOut": true
      },
      {
        "id": "classic-logo-t-shirt",
        "name": "Classic Logo T-shirt",
        "image": "/assets/store/classic-logo-t-shirt.jpeg",
        "imageAlt": "Back view of a black K9 Global Rescue t-shirt with the gold Classic Logo design.",
        "soldOut": true
      },
      {
        "id": "pointer-and-cat-t-shirt",
        "name": "Pointer & Cat T-shirt",
        "image": "/assets/store/pointer-and-cat-t-shirt.jpeg",
        "imageAlt": "Back view of a black K9 Global Rescue t-shirt with the gold Pointer & Cat design.",
        "soldOut": true
      },
      {
        "id": "rescue-love-t-shirt",
        "name": "You Can’t Buy Love T-shirt",
        "image": "/assets/store/rescue-love-t-shirt.jpeg",
        "imageAlt": "Back view of a black K9 Global Rescue t-shirt with the gold You Can’t Buy Love design.",
        "soldOut": true
      }
    ]
  }
] as const;
