import { ThemeProvider } from "styled-components";

import { Layout } from "./components/Layout";
import { GlobalStyle, theme } from "./styles";
import { common, projects } from "./data";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout navLinks={common.navLinks}>
        <section>
          <h2>Hi, I'm Alex,</h2>
          <p>a full stack web developer from Berlin</p>
        </section>

        <section>
          <h2 id="about">About me</h2>
          <p>How it all started</p>
          <p>What I like doing</p>
          <p>Tech stack</p>
        </section>

        <section>
          <h2 id="jobs">Experience</h2>
          <ul>
            <li>Codepoint BLN - Hoome.com</li>
          </ul>
        </section>

        <section>
          <h2 id="projects">Projects</h2>
          <ul>
            <li>Dasbot</li>
            <li>Address Mover</li>
            <li>Genderful</li>
            <li>Escape from Berlin</li>
            <li>Rococo Vintage</li>
          </ul>
        </section>

        <section>
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
