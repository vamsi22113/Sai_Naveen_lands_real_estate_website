export interface Review {
  id: string;
  name: string;
  location?: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ramesh Naidu",
    location: "Visakhapatnam",
    text: "Amazing experience! The team helped me find the perfect land in Lambasingi. The entire process from site visit to registration was flawless.",
    rating: 5,
  },
  {
    id: "r2",
    name: "Priya Sharma",
    location: "Hyderabad",
    text: "Very professional service and smooth registration process. They handled all the documentation transparently. Truly exceptional real estate experts.",
    rating: 5,
  },
  {
    id: "r3",
    name: "Kiran Kumar",
    location: "Araku Valley",
    text: "Best investment decision I’ve made. Highly recommended! The properties they showed me had excellent future growth potential.",
    rating: 5,
  },
  {
    id: "r4",
    name: "Dr. Ananya Reddy",
    location: "Visakhapatnam",
    text: "Clear documentation and excellent support throughout. I felt completely secure making my investment through Sai Naveen Lands.",
    rating: 5,
  },
  {
    id: "r5",
    name: "Venkatesh Rao",
    location: "Vijayawada",
    text: "Beautiful locations and trustworthy people. They understood my requirement for a farm plot and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: "r6",
    name: "Suresh Babu",
    location: "Paderu",
    text: "Great assistance from site visit to final purchase. The staff is extremely knowledgeable about the local market and zoning laws.",
    rating: 5,
  },
  {
    id: "r7",
    name: "Lakshmi Narayana",
    location: "Rajahmundry",
    text: "Premium plots with great future value. I've bought two properties here and both have appreciated significantly already.",
    rating: 5,
  },
];
