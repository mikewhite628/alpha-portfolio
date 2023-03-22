import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div>
      <div className="social-icons transition ease-in-out delay-150 text-white">
        <Link href="https://github.com/mikewhite628" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>

        <Link href="https://www.youtube.com/michaelwhitedev" target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>
        <Link href="https://twitter.com/Th3MichaelWhite" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/th3michaelwhite/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>
      </div>
      <div className="mobile-social-icons" style={{ color: "white" }}>
        <Link
          href="https://github.com/mikewhite628?tab=repositories"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>
        <Link href="https://www.youtube.com/michaelwhitedev" target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>
        <Link href="https://twitter.com/Th3MichaelWhite" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/th3michaelwhite/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="mb-3 hover:-translate-y-1
      hover:scale-110 hover:text-indigo-500 duration-300"
            size="2x"
          />
        </Link>
      </div>
    </div>
  );
}

export default Socials;
