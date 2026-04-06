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
    slug: "read-home",
    name: "Read Residence",
    location: "Utah",
    completion: "2024",
    category: "Contemporary",
    description:
      "A refined contemporary residence that balances warmth and modern clarity through careful material selection and considered proportions.",
    details: [
      "Custom residential build",
      "Open-plan living and entertaining spaces",
      "Indoor-outdoor connection throughout",
    ],
    images: [
      "/images/read-home/compressed/Cam_02_Take03-2.jpg",
      "/images/read-home/compressed/Cam_03_Take03.jpg",
      "/images/read-home/compressed/Cam_05_Take03.jpg",
      "/images/read-home/compressed/Cam_06_Take03.jpg",
      "/images/read-home/compressed/Cam_07_Take03.jpg",
      "/images/read-home/compressed/Cam_08_Take04-2.jpg",
      "/images/read-home/compressed/Cam_09_Take04-2.jpg",
    ],
    coverImage: "/images/read-home/compressed/Cam_01_Take03-2.jpg",
  },
  {
    slug: "read-barn",
    name: "Read Barn",
    location: "Utah",
    completion: "2024",
    category: "Ranch Estate",
    description:
      "A beautifully crafted barn estate that honors its agrarian roots while delivering elevated design and modern utility.",
    details: [
      "Custom barn and estate build",
      "Expansive entertaining and gathering spaces",
      "Seamless integration with the natural landscape",
    ],
    images: [
      "/images/read-barn/compressed/2_14.jpg",
      "/images/read-barn/compressed/2_15.jpg",
      "/images/read-barn/compressed/3_3.jpg",
      "/images/read-barn/compressed/3_5.jpg",
      "/images/read-barn/compressed/3_6.jpg",
      "/images/read-barn/compressed/6_11.jpg",
    ],
    coverImage: "/images/read-barn/compressed/1_16.jpg",
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
