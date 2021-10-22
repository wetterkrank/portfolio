import { ProjectCardData } from "../components/ProjectCards";

const projects: ProjectCardData[] = [
  {
    name: "Dasbot",
    url: "https://wetterkrank.github.io/dasbot/",
    github: "https://github.com/wetterkrank/dasbot",
    description:
      "A Telegram messenger bot that helps you learn German der/die/das articles.",
    tech: ["Python", "MongoDB", "Aiogram", "Docker"],
    image: "",
  },
  {
    name: "Flymon",
    url: "https://escapefromberl.in",
    github: "https://github.com/wetterkrank/flymon",
    description:
      "A WordPress plugin to display the lowest travel prices for given routes/dates in a WP post. Powers the flight price monitor on my ski destinations website.",
    tech: ["PHP", "WordPress"],
    image: "",
  },
  {
    name: "Address Mover",
    url: "http://www.address-mover.com/",
    github: "https://github.com/wetterkrank/address-mover",
    description:
      "A prototype for a web app facilitating the address change at different service providers. Developed collaboratively as the final project of a nine-week coding bootcamp.",
    tech: [
      "Ruby",
      "Rails 6",
      "Stimulus",
      "Sucker Punch",
      "Mapbox",
      "Bootstrap",
    ],
    image: "",
  },
  {
    name: "Genderful",
    url: "http://genderful.yak.supplies/",
    github: "https://github.com/wetterkrank/genderful",
    description: "A toy neural network that tells German noun genders.",
    tech: ["Python", "Tensorflow", "Docker", "CherryPy", "Bootstrap"],
    image: "",
  },
];

export default projects;
