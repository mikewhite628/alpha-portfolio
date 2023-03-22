import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Socials from "../components/socials";

import logo from "../../public/logo.svg";
import me from "../../public/me1.webp";
import me2 from "../../public/me2.webp";
import projectOne from "../../public/ai-app.svg";
import projectTwo from "../../public/league-app2.svg";
import projectThree from "../../public/c2c-guy.svg";

export default function IndexPage({ data }) {
  return (
    <Layout logo={logo}>
      <Hero me={me} />
      <About me2={me2} me={me} />
      <Services />
      <Portfolio
        projectOne={projectOne}
        projectTwo={projectTwo}
        projectThree={projectThree}
      />
      <Contact />
      <Socials />
    </Layout>
  );
}
