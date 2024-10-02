import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./styles";
import { common, projects } from "./data";
import { Layout, Hero, ProjectList, LinkList } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout links={common.links}>
        <section id="hero">
          <Hero image={common.avatar} />
        </section>

        <section id="about">
          <p>In 2020, I decided to pivot my career and learn programming.</p>
          <p>
            By that point, I had been working in IT for more than 12 years. And
            despite having some coding experience (the world has yet to see the
            Pacman game I wrote in BASIC when I was in elementary school), I had
            never built anything production-grade myself.
          </p>
          <p>
            So, I enrolled in the Le Wagon Bootcamp in Berlin and completed it
            in December 2020. After that, I found my first developer job and
            have been enjoying every single working day since!
          </p>
          <h3>Tech stack</h3>
          <ul>
            <li>
              I currently work with <b>Ruby on Rails</b>
            </li>
            <li>
              Built several front end apps with <b>TypeScript</b>, <b>React</b>,{" "}
              <b>Next.js</b>
            </li>
            <li>
              Using <b>Python</b> and <b>MongoDB</b> in pet projects
            </li>
            <li>Done a few paid gigs with PHP, WordPress + WooCommerce</li>
            <li>
              Comfortable with Ubuntu, Docker, GitHub, Vercel, Heroku, and AWS
            </li>
          </ul>
          <h3>What I value</h3>
          <p>
            Doing meaningful things, quality over quantity, teamwork, acquiring
            new skills
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ProjectList projects={projects} />
        </section>

        <section id="contacts">
          <h2>Get in touch</h2>
          <p>Send me a message:</p>
          <LinkList links={common.contacts} />
        </section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
