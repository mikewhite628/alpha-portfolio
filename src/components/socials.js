import Link from "next/link";
import React from "react";

function Socials() {
  return (
    <div>
      <div className="social-icons transition ease-in-out delay-150 text-white">
        <Link href="https://github.com/mikewhite628">
          <i
            className="fab fa-github mb-3 hover:-translate-y-1 
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          ></i>
        </Link>
        <Link href="https://www.youtube.com/michaelwhitedev">
          <i
            className="fab fa-youtube mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
          ></i>
        </Link>
        <Link href="https://twitter.com/Th3MichaelWhite">
          <i
            className="fab fa-twitter mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
          ></i>
        </Link>
        <Link href="https://www.linkedin.com/in/th3michaelwhite/">
          <i
            className="fab fa-linkedin mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
          ></i>
        </Link>
      </div>
      <div className="mobile-social-icons" style={{ color: "white" }}>
        <Link href="https://github.com/mikewhite628?tab=repositories">
          <i
            className="fab fa-github mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
          ></i>
        </Link>
        <Link href="https://www.youtube.com/michaelwhitedev">
          <i
            className="fab fa-youtube mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
          ></i>
        </Link>
        <Link href="https://twitter.com/Th3MichaelWhite">
          <i
            className="fab fa-twitter mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
          ></i>
        </Link>
        <Link href="https://www.linkedin.com/in/th3michaelwhite/">
          <i
            className="fab fa-linkedin mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
          ></i>
        </Link>
      </div>
    </div>
  );
}

export default Socials;
