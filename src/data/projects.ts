import { ProjectCardData } from "../components";

const projects: ProjectCardData[] = [
  {
    name: "Hoome.com",
    url: "https://hoome.com",
    github: "",
    description:
      "A real estate portal for Spanish and German markets, done in a team of 4 developers. <p> I implemented backoffice pages, main app's home page and property details, content pages (statically generated at build time, with blog content fetched from a CMS), and different UI components used throughout the app.</p>",
    tech: ["TypeScript", "Next.js", "Jest", "Storybook"],
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
      "A Telegram messenger bot that helps you learn German der/die/das articles. <p>It's using a frequency word list and a simple space repetition algorithm to determine when to practice each word.</p>",
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
      "A prototype for a web app facilitating the address change at different service providers. <p>Developed collaboratively as the final project of a nine-week coding bootcamp.</p>",
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
      "A WordPress plugin to display the lowest travel prices for given routes/dates in a WP post. <p>The prices are requested from the API provided by Kiwi.com and cached for up to 24h using WP transients. Following the link takes you to the booking page.</p>",
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
      "Website for a regional garments wholesaler. <p> I've used a minimalistic WP theme and written a custom plugin, adding extra page layouts and the import of XML catalog from a warehouse management system.</p>",
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
