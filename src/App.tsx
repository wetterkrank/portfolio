import { ThemeProvider } from "styled-components";

import { Layout } from "./components/Layout";
import { GlobalStyle, theme } from "./styles";
import { common, projects, jobs } from "./data";
import { Hero } from "./components/Hero";
import { JobsList } from "./components/JobsList";
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
            In 2020, I've decided to pivot my career and become a web developer.
            I've had some programming experience (the world has yet to see my
            first BASIC program written in elementary school) and I worked in
            the IT for over 10 years, but never coded anything production-grade
            myself.
          </p>
          <p>
            So, I've enrolled in Le Wagon bootcamp in Berlin and completed it in
            December 2020. After that, I found my first developer job and have
            been enjoying it every single day since then.
          </p>
          <h3>Tech stack</h3>
          <ul>
            <li>
              Most confident with: <b>TypeScript</b>, <b>React.js</b>,{" "}
              <b>Next.js</b>
            </li>
            <li>
              Using for pet projects: Python (without frameworks) and MongoDB
            </li>
            <li>
              Completed a big study project with: Ruby on Rails and PostgreSQL
            </li>
            <li>Did a few paid gigs with: PHP, WordPress + WooCommerce</li>
            <li>
              Can (and have) set up a Docker container, nginx, Postfix and Let's
              Encrypt, have written a couple of shell scripts
            </li>
            <li>Have working experience with git, GitHub, Vercel and Heroku</li>
          </ul>
          <h3>What I value</h3>
          <p>
            Doing meaningful job, teamwork, writing simple and maintainable
            code, constant learning
          </p>
        </section>

        <section id="job">
          <h2>Professional experience</h2>
          <JobsList jobs={jobs} />
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
