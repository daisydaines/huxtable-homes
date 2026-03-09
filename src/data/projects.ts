export interface Project {
  slug: string;
  name: string;
  location: string;
  completion: string;
  category: string;
  details: string[];
  description: string;
  images: string[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: "summit-ridge-estate",
    name: "Summit Ridge Estate",
    location: "Midway, UT",
    completion: "October 2024",
    category: "Modern Estate",
    description:
      "A sweeping mountainside estate that merges modernist architecture with the dramatic beauty of the Wasatch Range.",
    details: [
      "25 acre development project",
      "17,000 sq. ft. main residence",
      "6,800 sq. ft. guest house / 5-car garage and ski room with 2,800 sq. ft. living quarters above",
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
    location: "Holladay, UT",
    completion: "Spring 2022",
    category: "Mediterranean",
    description:
      "A Mediterranean-inspired villa nestled against the Wasatch foothills that brings European warmth to the Salt Lake Valley.",
    details: [
      "3 acre estate",
      "9,800 sq. ft. main residence",
      "Terraced formal gardens",
      "Central courtyard with mature aspens",
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
    location: "Tuhaye, UT",
    completion: "Summer 2025",
    category: "Contemporary",
    description:
      "A contemporary retreat in the Heber Valley, designed to harmonize with the surrounding mountain meadows and aspen groves.",
    details: [
      "6,200 sq. ft. main residence",
      "Outdoor living pavilion with stone fireplace",
      "Natural swimming pool",
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
    location: "Salt Lake City, UT",
    completion: "Fall 2021",
    category: "Traditional Estate",
    description:
      "A grand traditional estate in Emigration Canyon that redefines classic American luxury for the modern era.",
    details: [
      "15,000 sq. ft. main residence",
      "Pool house with guest quarters",
      "Motor court for 8+ vehicles",
      "Regulation tennis court",
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
    location: "Park City, UT",
    completion: "January 2024",
    category: "Modern",
    description:
      "A bold modernist composition in Deer Valley where every room captures the drama of the surrounding peaks.",
    details: [
      "7,800 sq. ft. ski-in/ski-out residence",
      "Multi-level terraces with mountain views",
      "Elevator access to all levels",
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
    location: "St. George, UT",
    completion: "Spring 2022",
    category: "Ranch Estate",
    description:
      "A refined ranch estate on the outskirts of St. George that celebrates indoor-outdoor living amid Utah's red rock landscape.",
    details: [
      "20 acre desert estate",
      "11,000 sq. ft. main residence",
      "Guest house and entertaining barn",
      "Equestrian facilities",
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
