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
  coverImagePosition?: string;
}

export const projects: Project[] = [
  {
    slug: "marcella-lot-68",
    name: "Marcella Lot 68",
    location: "Marcella Club in Deer Valley East Expansion, Park City, UT",
    completion: "January 2027",
    category: "Mountain Modern",
    description:
      "A mountain modern spec build at Marcella Club with ski in/out access and expansive outdoor living overlooking Deer Valley East Village.",
    details: [
      "9,100 SF spec build with 1,200 SF attached garage",
      "6,000+ SF of outdoor living overlooking Deer Valley East Village",
      "Ski in/out access",
      "Upper-level primary suite with private spa",
      "Home gym, spa and cold plunge",
    ],
    images: [
      "/images/marcella-lot-68/compressed/Cam_02.jpg",
      "/images/marcella-lot-68/compressed/Cam_03.jpg",
      "/images/marcella-lot-68/compressed/Cam_04_Take_12.jpg",
      "/images/marcella-lot-68/compressed/Cam_05_Take12.jpg",
      "/images/marcella-lot-68/compressed/Cam_06.jpg",
      "/images/marcella-lot-68/compressed/Cam_07.jpg",
      "/images/marcella-lot-68/compressed/Cam_10.jpg",
    ],
    coverImage: "/images/marcella-lot-68/compressed/Cam_01.jpg",
    coverImagePosition: "top",
  },
  {
    slug: "tuhaye-lot-34",
    name: "Tuhaye Lot 34",
    location: "Tuhaye Golf Club, Kamas, UT",
    completion: "Summer 2027",
    category: "Mountain Modern",
    description:
      "A mountain modern spec build nestled within Tuhaye Golf Club, featuring expansive outdoor living with mountain and golf course views.",
    details: [
      "8,000 SF spec build with 1,100 SF attached garage",
      "3,500 SF of outdoor living space with mountain and golf course views",
      "5 bed, 5 bath, 2 powder bath",
      "Home gym, spa and cold plunge",
    ],
    images: [
      "/images/tuhaye-lot-34/compressed/Cam02.jpg",
      "/images/tuhaye-lot-34/compressed/Cam03.jpg",
      "/images/tuhaye-lot-34/compressed/Cam04.jpg",
      "/images/tuhaye-lot-34/compressed/Cam05.jpg",
      "/images/tuhaye-lot-34/compressed/Cam07.jpg",
      "/images/tuhaye-lot-34/compressed/Cam10.jpg",
    ],
    coverImage: "/images/tuhaye-lot-34/compressed/Cam01.jpg",
  },
  {
    slug: "holladay-renovation",
    name: "Holladay Renovation",
    location: "Holladay, UT",
    completion: "Summer 2027",
    category: "TBD",
    description:
      "Full-scale renovation in Holladay, Utah.",
    details: [],
    images: [
      "/images/holladay-remodel/compressed/Holladay_Remodel_2.jpg",
      "/images/holladay-remodel/compressed/Holladay_Remodel_3.jpg",
      "/images/holladay-remodel/compressed/Holladay_Remodel_4.jpg",
      "/images/holladay-remodel/compressed/Holladay_Remodel_5.jpg",
      "/images/holladay-remodel/compressed/Holladay_Remodel_6.jpg",
      "/images/holladay-remodel/compressed/Holladay_Remodel_7.jpg",
    ],
    coverImage: "/images/holladay-remodel/compressed/Holladay_Remodel_1.jpg",
    coverImagePosition: "top",
  },
  {
    slug: "midway-estate",
    name: "Midway Estate",
    location: "Midway, UT",
    completion: "Winter 2024",
    category: "TBD",
    description:
      "A 25-acre private development in Midway featuring a main residence, guest house, and barn estate.",
    details: [
      "25-acre development for private client",
      "6,800 SF guest house / 5-car garage and ski room with 2,800 SF living quarters above (completed winter 2022)",
      "17,000 SF main residence (completed winter 2024)",
      "12,000 SF barn with horse stalls, indoor pickleball court and mezzanine office (completed spring 2026)",
    ],
    images: [
      "/images/read-home/compressed/Cam_01_Take03-2.jpg",
      "/images/read-home/compressed/Cam_02_Take03-2.jpg",
      "/images/read-home/compressed/Cam_03_Take03.jpg",
      "/images/read-home/compressed/Cam_05_Take03.jpg",
      "/images/read-home/compressed/Cam_06_Take03.jpg",
      "/images/read-home/compressed/Cam_07_Take03.jpg",
      "/images/read-home/compressed/Cam_08_Take04-2.jpg",
      "/images/read-home/compressed/Cam_09_Take04-2.jpg",
      "/images/read-barn/compressed/1_16.jpg",
      "/images/read-barn/compressed/2_14.jpg",
      "/images/read-barn/compressed/2_15.jpg",
      "/images/read-barn/compressed/3_3.jpg",
      "/images/read-barn/compressed/3_5.jpg",
      "/images/read-barn/compressed/3_6.jpg",
      "/images/read-barn/compressed/6_11.jpg",
    ],
    coverImage: "/images/read-home/compressed/Cam_01_Take03-2.jpg",
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
