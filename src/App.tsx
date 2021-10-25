import { ThemeProvider } from "styled-components";

import { Layout } from "./components/Layout";
import { GlobalStyle, theme } from "./styles";
import { common, projects } from "./data";
import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectCards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout links={common.links}>
        <section id="hero">
          <Hero image={common.avatar} />
        </section>

        <section id="about">
          <h2>About me</h2>
          <p>
            In 2020, I decided to pivot my career and become a web developer. By
            that time, I've been working in IT for more than 12 years. Although
            I had some coding experience (the world has yet to see my Pacman
            written in BASIC in elementary school), I've never built anything
            production-grade myself.
          </p>
          <p>
            So, I've enrolled in Le Wagon Bootcamp in Berlin and completed it in
            December 2020. After that, I found my first developer job and have
            been enjoying it every single day!
          </p>
          <h3>Tech stack</h3>
          <ul>
            <li>
              Most confident with: <b>TypeScript</b>, <b>React.js</b>,{" "}
              <b>Next.js</b>
            </li>
            <li>Using for pet projects: Python and MongoDB</li>
            <li>
              Completed a big study project with: Ruby on Rails and PostgreSQL
            </li>
            <li>Did a few paid gigs with: PHP, WordPress + WooCommerce</li>
            <li>
              Can (and have) set up a Docker container, nginx, Postfix and Let's
              Encrypt, can write a shell script
            </li>
            <li>Have experience with git, GitHub, Vercel and Heroku</li>
          </ul>
          <h3>What I value</h3>
          <p>
            Meaningful work, writing simple and maintainable code, teamwork,
            constant learning
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ProjectsList projects={projects} />
        </section>

        <section id="contacts">
          <h2>Contacts</h2>
          <ul>
            <li>Phone</li>
            <li>E-mail</li>
          </ul>
        </section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
