import { JobData } from "../components/JobsList";

const jobs: JobData[] = [
  {
    name: "Codepoint BLN UG",
    dates: "April – October 2021",
    projects: [
      {
        name: "Hoome.com",
        url: "https://hoome.com",
        github: "",
        description: "",
        tech: [
          "TypeScript",
          "Next.js",
          "styled-components",
          "Jest",
          "Storybook",
          "Vercel",
        ],
        image: "",
      },
    ],
  },
  {
    name: "WordPress development, freelance",
    dates: "2020 –",
    projects: [
      {
        name: "WooCommerce Autocategory Plugin",
        url: "https://www.rococo-vintage.com/",
        github: "https://github.com/wetterkrank/woo-stock-autocategory",
        description:
          "A plugin for WooCommerce to automatically keep in-stock products in a selected category.",
        tech: ["PHP", "WordPress", "WooCommerce"],
        image: "",
      },
      {
        name: "ttr66.ru website",
        url: "https://www.ttr66.ru/",
        github: "",
        description:
          "Website for a regional garments wholesaler. Product catalog is imported from 1C XML connector.",
        tech: ["PHP", "WordPress"],
        image: "",
      },
    ],
  },
];

export default jobs;
