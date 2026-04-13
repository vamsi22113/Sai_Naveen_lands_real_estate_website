import placeLambasingi from "@/assets/place-lambasingi.webp";
import placePaderu from "@/assets/place-paderu.webp";
import placeMadugula from "@/assets/place-madugula.webp";
import placeHukumpeta from "@/assets/place-hukumpeta.webp";
import placeAruku from "@/assets/place-aurku.webp"

export interface Place {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  shortDescription: string;
  price: string;
  location: string;
  highlights: string[];
}

export const places: Place[] = [
  {
    id: "1",
    name: "Lambasingi",
    slug: "lambasingi",
    image: placeLambasingi,
    shortDescription: "Known as the Kashmir of Andhra Pradesh, offering misty hilltop plots with breathtaking views.",
    description: "Lambasingi is a serene hill destination known for its sub-zero temperatures and misty landscapes. Our premium plots here offer panoramic valley views, lush greenery, and an ideal climate for farmhouses and weekend retreats. Invest in a slice of paradise where nature meets luxury.",
    price: "₹15L – ₹45L",
    location: "Visakhapatnam District",
    highlights: ["Misty hill views", "Sub-zero climate", "Premium farmland", "Road connectivity"],
  },
  {
    id: "2",
    name: "Paderu",
    slug: "paderu",
    image: placePaderu,
    shortDescription: "Terraced green hills with vibrant tribal culture and coffee plantations.",
    description: "Paderu sits at the heart of the Eastern Ghats, surrounded by terraced hills, coffee estates, and vibrant tribal heritage. Our land offerings here combine natural beauty with excellent growth potential. Perfect for eco-resorts, organic farms, and nature-inspired living.",
    price: "₹10L – ₹35L",
    location: "Alluri Sitharama Raju District",
    highlights: ["Coffee plantations", "Tribal culture", "Eco-tourism hub", "Growing infrastructure"],
  },
  {
    id: "3",
    name: "G. Madugula",
    slug: "g-madugula",
    image: placeMadugula,
    shortDescription: "Dense forest valleys with pristine rivers — an untouched investment paradise.",
    description: "G. Madugula is a hidden gem nestled among dense forests and winding rivers of the Eastern Ghats. This emerging destination offers unmatched natural beauty at accessible price points. Ideal for early investors looking to capitalise on the next big hill destination.",
    price: "₹8L – ₹28L",
    location: "Alluri Sitharama Raju District",
    highlights: ["River-side plots", "Dense forest cover", "Emerging destination", "High ROI potential"],
  },
  {
    id: "4",
    name: "Hukumpeta",
    slug: "hukumpeta",
    image: placeHukumpeta,
    shortDescription: "Panoramic hilltop views above the clouds — the crown jewel of our portfolio.",
    description: "Hukumpeta offers some of the most spectacular panoramic views in the Eastern Ghats, with plots situated above the cloud line. This exclusive location is perfect for luxury retreats and premium farmhouses. Limited availability makes this a rare and prestigious investment.",
    price:"8L-10L",
    location: "Alluri Sitharama Raju District",
    highlights: ["Above-cloud views", "Exclusive hilltop", "Luxury retreat potential", "Limited plots"],
  },
  {
  id: "5",
  name: "Araku Valley",
  slug: "araku",
  image: placeAruku,
  shortDescription: "A scenic tourist paradise known for coffee plantations and cool climate — ideal for lifestyle and investment.",
  description: "Araku Valley is one of the most popular hill destinations in Andhra Pradesh, famous for its lush greenery, coffee estates, and pleasant weather. With increasing tourism and infrastructure development, land in Araku offers excellent appreciation potential along with a peaceful lifestyle. Perfect for farmhouses, holiday homes, and long-term investment.",
  price: "₹10L – ₹35L",
  location: "Alluri Sitharama Raju District",
  highlights: [
    "Famous tourist destination",
    "Coffee plantations",
    "Cool climate year-round",
    "High tourism growth",
    "Ideal for farmhouses"
  ],
}

];
