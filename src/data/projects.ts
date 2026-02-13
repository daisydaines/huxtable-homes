export interface Project {
  slug: string;
  name: string;
  location: string;
  year: number;
  category: string;
  sqft: number;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: "summit-ridge-estate",
    name: "Summit Ridge Estate",
    location: "Park City, Utah",
    year: 2023,
    category: "Modern Estate",
    sqft: 12500,
    description:
      "A sweeping mountainside estate that merges modernist architecture with the dramatic beauty of the Wasatch Range.",
    longDescription:
      "Perched on a ridge overlooking the Wasatch Mountains, this 12,500 square foot estate represents the pinnacle of modern mountain living. Floor-to-ceiling glass walls dissolve the boundary between interior and exterior, while natural stone and warm timber elements ground the home in its landscape. The open-plan living spaces flow seamlessly onto cantilevered terraces, offering unobstructed views from Deer Valley to the Jordanelle Reservoir. Every detail — from the custom bronze hardware to the heated infinity-edge pool that steams against the winter sky — was designed to celebrate the extraordinary setting.",
    features: [
      "Heated infinity pool with mountain views",
      "Custom bronze hardware throughout",
      "Floor-to-ceiling retractable glass walls",
      "Wine cellar with tasting room",
      "Home theater",
      "Four-car heated garage with EV charging",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  },
  {
    slug: "cottonwood-villa",
    name: "Cottonwood Villa",
    location: "Holladay, Utah",
    year: 2022,
    category: "Mediterranean",
    sqft: 9800,
    description:
      "A Mediterranean-inspired villa nestled against the Wasatch foothills that brings European warmth to the Salt Lake Valley.",
    longDescription:
      "Set within three acres of manicured gardens at the base of Big Cottonwood Canyon, this villa brings the warmth of Mediterranean architecture to the Wasatch foothills. Hand-laid terracotta tiles, artisan plaster walls, and reclaimed European oak beams create an atmosphere of timeless elegance. The home wraps around a central courtyard with a mature aspen grove, while formal gardens descend in terraces toward sweeping valley views. Modern amenities — including a state-of-the-art kitchen, spa-inspired primary suite, and smart home integration — are woven seamlessly into the classical architecture.",
    features: [
      "Central courtyard with mature aspens",
      "Imported Italian terracotta flooring",
      "Reclaimed European oak beams",
      "Professional-grade kitchen",
      "Spa-inspired primary suite",
      "Terraced formal gardens",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    slug: "red-ledge-retreat",
    name: "Red Ledge Retreat",
    location: "Heber, Utah",
    year: 2023,
    category: "Contemporary",
    sqft: 6200,
    description:
      "A contemporary retreat in the Heber Valley, designed to harmonize with the surrounding mountain meadows and aspen groves.",
    longDescription:
      "Tucked into a private hillside above the Heber Valley amid ancient aspens, this retreat embodies our philosophy of building in dialogue with nature. The home's low-slung profile and living green roof allow it to virtually disappear into the hillside, while expansive glazing frames curated views of Mount Timpanogos and the Jordanelle. Interior spaces are defined by board-formed concrete, blackened steel, and locally sourced walnut, creating a palette that is at once minimal and warm. An outdoor living pavilion with a massive stone fireplace extends the living space into the landscape year-round.",
    features: [
      "Living green roof",
      "Board-formed concrete walls",
      "Locally sourced walnut millwork",
      "Outdoor living pavilion",
      "Natural swimming pool",
      "Artist's studio",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
  },
  {
    slug: "emigration-manor",
    name: "Emigration Manor",
    location: "Salt Lake City, Utah",
    year: 2021,
    category: "Traditional Estate",
    sqft: 15000,
    description:
      "A grand traditional estate in Emigration Canyon that redefines classic American luxury for the modern era.",
    longDescription:
      "Situated on one of Emigration Canyon's most coveted parcels, Emigration Manor is a masterwork of traditional American architecture reimagined for contemporary living. The stately Georgian facade, with its symmetrical proportions and hand-laid brick, opens to reveal interiors that surprise with their light and openness. A dramatic double-height foyer leads to formal living and dining rooms, a paneled library, and a chef's kitchen that opens to a sprawling family room. The grounds include a regulation tennis court, pool house with guest quarters, and a motor court designed to accommodate a collector's fleet.",
    features: [
      "Georgian-inspired architecture",
      "Double-height marble foyer",
      "Paneled library",
      "Regulation tennis court",
      "Pool house with guest quarters",
      "Motor court for 8+ vehicles",
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1200&q=80",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
  },
  {
    slug: "deer-valley-modern",
    name: "Deer Valley Modern",
    location: "Park City, Utah",
    year: 2024,
    category: "Modern",
    sqft: 7800,
    description:
      "A bold modernist composition in Deer Valley where every room captures the drama of the surrounding peaks.",
    longDescription:
      "This striking residence in Deer Valley takes full advantage of its elevated ski-in/ski-out position above the resort. Conceived as a series of interlocking volumes in weathered steel and glass, the home creates a dynamic interplay of solid and void, light and shadow. Each of the four levels steps back from the slope, creating a cascade of private terraces. The interior is a study in restraint — polished concrete floors, white plaster walls, and carefully placed apertures that frame mountain vistas like living paintings. A cantilevered hot tub on the primary level provides a thrilling focal point against the winter landscape.",
    features: [
      "Ski-in/ski-out access",
      "Multi-level terraces",
      "Polished concrete interiors",
      "Elevator access to all levels",
      "Climate-controlled wine room",
      "Heated driveway and walkways",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    slug: "zion-ridge-ranch",
    name: "Zion Ridge Ranch",
    location: "St George, Utah",
    year: 2022,
    category: "Ranch Estate",
    sqft: 11000,
    description:
      "A refined ranch estate on the outskirts of St George that celebrates indoor-outdoor living amid Utah's red rock landscape.",
    longDescription:
      "Spread across twenty acres of red rock terrain and high desert on the outskirts of St George, Zion Ridge Ranch is a celebration of Utah's rugged landscape elevated to the highest level of luxury. The compound comprises a main residence, guest house, and entertaining barn connected by covered walkways and courtyards. The architecture draws from the region's ranch vernacular — standing-seam metal roofs, deep covered porches, and honest materials like sandstone, cedar, and iron. Inside, the spaces are warm and inviting, with wide-plank oak floors, custom plaster finishes, and an art collection curated specifically for the home.",
    features: [
      "20-acre desert estate",
      "Guest house and entertaining barn",
      "Standing-seam metal roofing",
      "Wide-plank oak flooring",
      "Equestrian facilities",
      "Organic kitchen garden",
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1200&q=80",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
