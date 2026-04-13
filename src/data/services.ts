import serviceSellingLand from "@/assets/service-selling-land.webp";
import serviceBuyingLand from "@/assets/service-buying-land.webp";
import serviceLandLeasing from "@/assets/service-land-leasing.webp";
import servicePlotsRooms from "@/assets/service-plots-rooms.webp";
import serviceLandRegistration from "@/assets/service-land-registration.webp";
import serviceCompleteAssistance from "@/assets/service-complete-assistance.webp";

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  process: ServiceStep[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "selling-land",
    title: "Selling Land",
    icon: "TrendingUp",
    shortDescription:
      "List and sell your land at the best market value with our expert guidance and wide buyer network.",
    description:
      "Whether you own a small plot or large acreage in the Eastern Ghats region, Sai Naveen Lands helps you unlock the true value of your property. We conduct professional valuations, market your land across our extensive network of buyers and investors, and manage every step of the transaction — from listing to final handover. Our local market expertise ensures you get the best price without delays.",
    image: serviceSellingLand,
    benefits: [
      "Free property valuation",
      "Wide network of verified buyers",
      "Transparent pricing with no hidden fees",
      "Fast & legally sound transactions",
      "Professional marketing & site visit management",
      "Post-sale documentation support",
    ],
    process: [
      {
        step: 1,
        title: "Property Assessment",
        description:
          "We conduct a thorough on-site evaluation and market analysis to determine the fair market value of your land.",
      },
      {
        step: 2,
        title: "Listing & Marketing",
        description:
          "Your property is listed across our buyer network, website, and partner channels with professional photography.",
      },
      {
        step: 3,
        title: "Buyer Matching",
        description:
          "We identify serious, qualified buyers and arrange site visits to maximize conversion and minimize waiting.",
      },
      {
        step: 4,
        title: "Negotiation & Closure",
        description:
          "We negotiate on your behalf to finalize the best deal and coordinate all documentation for a clean closure.",
      },
    ],
  },
  {
    id: "2",
    slug: "buying-land",
    title: "Buying Land",
    icon: "MapPin",
    shortDescription:
      "Find verified, high-growth land parcels in Visakhapatnam and Alluri districts — tailored to your investment goals.",
    description:
      "Purchasing land is one of the most significant decisions of your life. Sai Naveen Lands makes this journey seamless and transparent. We curate a hand-picked portfolio of premium plots in hill destinations like Lambasingi, Araku, Paderu, and beyond. Every listing is legally verified and site-visited, so you invest with complete confidence. From your first enquiry to the registration deed, we are with you.",
    image: serviceBuyingLand,
    benefits: [
      "Only legally verified plots offered",
      "Exclusive access to off-market deals",
      "Detailed site visit arrangements",
      "Budget-based property matching",
      "Long-term investment advisory",
      "End-to-end buyer representation",
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discovery",
        description:
          "We understand your goals — investment, farmhouse, eco-resort, or retirement — and shortlist properties that match.",
      },
      {
        step: 2,
        title: "Site Visits",
        description:
          "We arrange guided site visits to shortlisted properties so you can experience the land firsthand.",
      },
      {
        step: 3,
        title: "Due Diligence",
        description:
          "Our legal team verifies titles, encumbrances, patta documents, and all relevant records before you commit.",
      },
      {
        step: 4,
        title: "Purchase & Registration",
        description:
          "We draft agreements, coordinate sub-registrar visits, and ensure a smooth, legally binding transfer of ownership.",
      },
    ],
  },
  {
    id: "3",
    slug: "land-leasing",
    title: "Land Leasing",
    icon: "Handshake",
    shortDescription:
      "Lease your land for agriculture, eco-tourism, or development and earn steady passive income.",
    description:
      "Turn idle land into a steady income stream. Sai Naveen Lands connects landowners with lessees — including agri-entrepreneurs, eco-resort developers, and tourism operators — who seek premium land in hill regions. We facilitate structured lease agreements that protect your ownership rights while generating consistent returns. For lessees, we help find the ideal parcel for your farming, hospitality, or commercial project.",
    image: serviceLandLeasing,
    benefits: [
      "Structured lease agreements drafted by experts",
      "Steady rental income without selling",
      "Access to qualified lessees in agriculture & tourism",
      "Ownership rights fully protected",
      "Periodic rental reviews included",
      "Quick tenant matching in growing hill zones",
    ],
    process: [
      {
        step: 1,
        title: "Land Evaluation",
        description:
          "We assess your land's suitability for farming, eco-resorts, or commercial projects and determine lease value.",
      },
      {
        step: 2,
        title: "Lessee Search",
        description:
          "We market your land to our network of qualified lessees and screen applicants for credibility.",
      },
      {
        step: 3,
        title: "Agreement Drafting",
        description:
          "Our legal team prepares a watertight lease deed with clear terms, tenure, and rent revision clauses.",
      },
      {
        step: 4,
        title: "Handover & Monitoring",
        description:
          "We oversee the handover and provide periodic check-ins to ensure compliance with lease terms.",
      },
    ],
  },
  {
    id: "4",
    slug: "plots-rooms",
    title: "Plots & Rooms",
    icon: "Home",
    shortDescription:
      "Discover ready-to-build residential plots and furnished rooms in scenic hill destinations.",
    description:
      "For those seeking a permanent retreat in nature, Sai Naveen Lands offers curated residential plots and ready-to-occupy rooms in the finest hill destinations of Andhra Pradesh. Whether you envision a weekend farmhouse, a retirement home, or a rental cottage, we have the perfect starting point. Our plots come with road access, clear titles, and scenic surroundings — everything you need to build your dream.",
    image: servicePlotsRooms,
    benefits: [
      "Ready-to-build plots with road access",
      "Scenic hill locations across Visakhapatnam & Alluri districts",
      "Furnished room options with immediate occupancy",
      "Ideal for farmhouses, cottages & holiday homes",
      "Clear legal titles and approved layouts",
      "Flexible sizing from small plots to large estates",
    ],
    process: [
      {
        step: 1,
        title: "Preference Consultation",
        description:
          "We understand your lifestyle needs and budget to shortlist the best plots or rooms for your vision.",
      },
      {
        step: 2,
        title: "Curated Options",
        description:
          "We present a curated selection of properties with detailed brochures, photos, and location maps.",
      },
      {
        step: 3,
        title: "Guided Site Visits",
        description:
          "We escort you to shortlisted properties for an immersive experience of the surroundings.",
      },
      {
        step: 4,
        title: "Purchase & Support",
        description:
          "From agreement to registration, we ensure a smooth ownership transfer and post-purchase follow-up.",
      },
    ],
  },
  {
    id: "5",
    slug: "land-registration",
    title: "Land Registration",
    icon: "FileText",
    shortDescription:
      "Hassle-free land registration with expert legal support, title verification, and document management.",
    description:
      "Navigating land registration in India can be complex. At Sai Naveen Lands, we simplify the entire process. Our dedicated legal and documentation team handles title verification, mutation records, encumbrance certificates, and coordination with the Sub-Registrar Office. Whether you are buying, selling, or inheriting land, we ensure your registration is accurate, timely, and legally sound — with zero errors.",
    image: serviceLandRegistration,
    benefits: [
      "End-to-end registration handled by our team",
      "Title & encumbrance certificate verification",
      "Mutation & patta transfer assistance",
      "Sub-Registrar Office coordination",
      "Stamp duty calculation and payment guidance",
      "Secure digital copy of all registered documents",
    ],
    process: [
      {
        step: 1,
        title: "Document Collection",
        description:
          "We guide you through the exact set of documents required for registration and review their completeness.",
      },
      {
        step: 2,
        title: "Legal Verification",
        description:
          "Our legal experts verify title deeds, patta, and encumbrance certificates to ensure a clean title.",
      },
      {
        step: 3,
        title: "Stamp Duty & Fee Calculation",
        description:
          "We compute the applicable stamp duty, registration fees, and advise on payment procedures accurately.",
      },
      {
        step: 4,
        title: "Registration & Handover",
        description:
          "We coordinate your visit to the Sub-Registrar Office and deliver certified copies of all registered documents.",
      },
    ],
  },
  {
    id: "6",
    slug: "complete-assistance",
    title: "Complete Assistance",
    icon: "ShieldCheck",
    shortDescription:
      "Our end-to-end real estate concierge service — from land selection to final ownership, we handle everything.",
    description:
      "Our Complete Assistance package is designed for clients who want the most seamless real estate experience possible. From the very first conversation about your goals to the moment you hold your registered deed, Sai Naveen Lands manages every single step. This includes property search, legal due diligence, negotiation, registration, and even post-purchase consultation. Think of us as your dedicated real estate concierge in the Eastern Ghats.",
    image: serviceCompleteAssistance,
    benefits: [
      "Dedicated relationship manager assigned",
      "Full property search & shortlisting",
      "Expert negotiation on your behalf",
      "Complete legal due diligence & documentation",
      "Registration & mutation support",
      "Post-purchase advisory and follow-up",
    ],
    process: [
      {
        step: 1,
        title: "Goal Setting",
        description:
          "We begin with an in-depth consultation to understand your investment goals, timeline, and budget.",
      },
      {
        step: 2,
        title: "End-to-End Property Search",
        description:
          "Your dedicated manager searches, shortlists, and arranges visits to properties that match your vision.",
      },
      {
        step: 3,
        title: "Legal & Financial Coordination",
        description:
          "We handle all legal verification, financial planning, and negotiation so you can focus on decisions.",
      },
      {
        step: 4,
        title: "Ownership Transfer & Beyond",
        description:
          "We complete registration and stay connected for post-purchase support, tenant management, or resale.",
      },
    ],
  },
];
