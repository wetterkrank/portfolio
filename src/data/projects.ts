import { ProjectCardData } from "../components/ProjectCards";

const projects: ProjectCardData[] = [
  {
    name: "h****.com",
    url: "#",
    github: "",
    description:
      "A real estate portal for Spanish and German markets, done in a team of 4 developers. <p> What I did: implemented backoffice pages, main app's home page and property details, content pages (statically generated at build time, with blog content fetched from a CMS), different UI components used throughout the app.</p>",
    tech: ["TypeScript", "Next.js", "Jest", "Storybook"],
    image: {
      src: "/media/projects/estate-1400w.jpg",
      srcset:
        "/media/projects/estate-700w.jpg, /media/projects/estate-1050w.jpg 1.5x, /media/projects/estate-1400w.jpg 2x",
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
      src: "/media/projects/dasbot-1400w.jpg",
      srcset:
        "/media/projects/dasbot-700w.jpg, /media/projects/dasbot-1050w.jpg 1.5x, /media/projects/dasbot-1400w.jpg 2x",
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
      src: "/media/projects/address-mover-1400w.jpg",
      srcset:
        "/media/projects/address-mover-700w.jpg, /media/projects/address-mover-1050w.jpg 1.5x, /media/projects/address-mover-1400w.jpg 2x",
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
      src: "/media/projects/flymon-1400w.jpg",
      srcset:
        "/media/projects/flymon-700w.jpg, /media/projects/flymon-1050w.jpg 1.5x, /media/projects/flymon-1400w.jpg 2x",
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
      src: "/media/projects/rococo-vintage-1400w.jpg",
      srcset:
        "/media/projects/rococo-vintage-700w.jpg, /media/projects/rococo-vintage-1050w.jpg 1.5x, /media/projects/rococo-vintage-1400w.jpg 2x",
    },
  },
  {
    name: "ttr66.ru",
    url: "https://www.ttr66.ru/",
    github: "",
    description:
      "Website for a regional garments wholesaler.<br/> I've used a minimalistic WP theme and written a custom plugin, adding extra page layouts and the import of XML catalog from a warehouse management system.",
    tech: ["PHP", "WordPress"],
    image: {
      src: "/media/projects/ttr66-1400w.jpg",
      srcset:
        "/media/projects/ttr66-700w.jpg, /media/projects/ttr66-1050w.jpg 1.5x, /media/projects/ttr66-1400w.jpg 2x",
    },
  },
  {
    name: "Genderful",
    url: "http://genderful.yak.supplies/",
    github: "https://github.com/wetterkrank/genderful",
    description:
      "A neural network that makes predictions of German noun genders. Try it on 'Fluggaenkoecchicebolsen'?",
    tech: ["Python", "Tensorflow", "Docker", "Bootstrap"],
    image: {
      src: "/media/projects/genderful-1400w.jpg",
      srcset:
        "/media/projects/genderful-700w.jpg, /media/projects/genderful-1050w.jpg 1.5x, /media/projects/genderful-1400w.jpg 2x",
    },
  },
];

export default projects;
