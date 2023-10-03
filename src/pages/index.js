import React from "react";
import { useEffect } from "react";

import About from "../components/about";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Socials from "../components/socials";

import me from "../../public/me1.webp";
import me2 from "../../public/me2.webp";
import projectOne from "../../public/ai-app.svg";
import projectTwo from "../../public/league-app2.svg";
import projectThree from "../../public/c2c-guy.svg";
import Header from "@/components/header";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IndexPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Michael White</title>
        <link rel="Portfolio" href="http://michaelwhite.dev" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.ico.png"
          sizes="16x16"
        />
      </Head>
      <div>
        <Header />
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
        <footer
          style={{
            marginTop: `2rem`,
            textAlign: "center",
          }}
          className="text-white"
        >
          © {new Date().getFullYear()} Michael White
        </footer>
      </div>
    </>
  );
}
