export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const COMPANY = {
  name: "Huxtable Homes",
  tagline: "New Construction • Interior Design",
  brandLine: "Creating Gathering Places Since 1993",
  description:
    "We design and build bespoke luxury homes that blend architectural excellence with refined living. Every detail is considered, every space intentional.",
  phone: ["801.231.4390", "801.580.7599"],
  email: "hello@huxtablehomes.com",
  address: "4443 S Wander Ln, Holladay, UT 84124",
  founded: "1993",
} as const;
