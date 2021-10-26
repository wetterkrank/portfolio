import { ProjectCardData } from "../components/ProjectCards";

const projects: ProjectCardData[] = [
  {
    name: "Hoome.com",
    url: "https://hoome.com",
    github: "",
    description:
      "A real estate portal for Spanish and German markets. <br/> I was one of the 4 developers working on this project. <p> What I did: implemented backoffice pages, main app's home page and property details, content pages (statically generated at build time, with blog content fetched from a CMS), different UI components used throughout the app.</p>",
    tech: ["TypeScript", "Next.js", "Jest", "Storybook"],
    image: {
      src: "/media/projects/hoome-1400w.jpg",
      srcset:
        "/media/projects/hoome-700w.jpg, /media/projects/hoome-1050w.jpg 1.5x, /media/projects/hoome-1400w.jpg 2x",
    },
  },
  {
    name: "WooCommerce Stock Autocategory",
    url: "https://www.rococo-vintage.com/",
    github: "https://github.com/wetterkrank/woo-stock-autocategory",
    description:
      "A plugin for WooCommerce that automatically places products in a selected category depending on their stock status.",
    tech: ["PHP", "WordPress", "WooCommerce"],
    image: {
      src: "/media/projects/hoome-1400w.jpg",
      srcset:
        "/media/projects/hoome-700w.jpg, /media/projects/hoome-1050w.jpg 1.5x, /media/projects/hoome-1400w.jpg 2x",
    },
  },
  {
    name: "ttr66.ru",
    url: "https://www.ttr66.ru/",
    github: "",
    description:
      "Website for a regional garments wholesaler.<br/> To make the site fast and maintanable, I've used a minimalistic WP theme and written a custom plugin, adding extra page layouts and the function to import XML catalog from a warehouse management system.",
    tech: ["PHP", "WordPress"],
    image: {
      src: "/media/projects/hoome-1400w.jpg",
      srcset:
        "/media/projects/hoome-700w.jpg, /media/projects/hoome-1050w.jpg 1.5x, /media/projects/hoome-1400w.jpg 2x",
    },
  },
  {
    name: "Dasbot",
    url: "https://wetterkrank.github.io/dasbot/",
    github: "https://github.com/wetterkrank/dasbot",
    description:
      "A Telegram messenger bot that helps you learn German der/die/das articles.",
    tech: ["Python", "MongoDB", "Aiogram", "Docker"],
    image: {
      src: "/media/projects/hoome-1400w.jpg",
      srcset:
        "/media/projects/hoome-700w.jpg, /media/projects/hoome-1050w.jpg 1.5x, /media/projects/hoome-1400w.jpg 2x",
    },
  },
  {
    name: "Flymon",
    url: "https://escapefromberl.in",
    github: "https://github.com/wetterkrank/flymon",
    description:
      "A WordPress plugin to display the lowest travel prices for given routes/dates in a WP post. Powers the flight price monitor on my ski destinations website.",
    tech: ["PHP", "WordPress"],
    image: {
      src: "/media/projects/hoome-1400w.jpg",
      srcset:
        "/media/projects/hoome-700w.jpg, /media/projects/hoome-1050w.jpg 1.5x, /media/projects/hoome-1400w.jpg 2x",
    },
  },
  {
    name: "Address Mover",
    url: "http://www.address-mover.com/",
    github: "https://github.com/wetterkrank/address-mover",
    description:
      "A prototype for a web app facilitating the address change at different service providers. Developed collaboratively as the final project of a nine-week coding bootcamp.",
    tech: ["Ruby", "Rails 6", "Bootstrap", "Stimulus", "Sucker Punch"],
    image: {
      src: "/media/projects/hoome-1400w.jpg",
      srcset:
        "/media/projects/hoome-700w.jpg, /media/projects/hoome-1050w.jpg 1.5x, /media/projects/hoome-1400w.jpg 2x",
    },
  },
  {
    name: "Genderful",
    url: "http://genderful.yak.supplies/",
    github: "https://github.com/wetterkrank/genderful",
    description:
      "A toy neural network that makes predictions of German noun genders.",
    tech: ["Python", "Tensorflow", "Docker", "CherryPy", "Bootstrap"],
    image: {
      src: "/media/projects/hoome-1400w.jpg",
      srcset:
        "/media/projects/hoome-700w.jpg, /media/projects/hoome-1050w.jpg 1.5x, /media/projects/hoome-1400w.jpg 2x",
    },
  },
];

export default projects;
