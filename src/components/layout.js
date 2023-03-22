import * as React from "react";
import Header from "./header";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";

const Layout = ({ children, logo }) => {
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
          href="../src/images/logo.svg"
          sizes="16x16"
        />
      </Head>
      <Header logo={logo} />

      <div>
        <main>{children}</main>
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
};

export default Layout;
