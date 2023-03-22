import Image from "next/image";
import Link from "next/link";
import React from "react";

function Socials() {
  return (
    <div>
      <div className="social-icons transition ease-in-out delay-150 text-white">
        <Link href="https://github.com/mikewhite628" target="_blank">
          <Image
            src={`/github.svg`}
            alt="github"
            width={24}
            height={24}
            className="mb-3 hover:-translate-y-1
      icon"
          />
        </Link>

        <Link href="https://www.youtube.com/michaelwhitedev" target="_blank">
          <Image
            width={24}
            height={24}
            src={`/youtube.svg`}
            alt="youtube"
            className="mb-3 hover:-translate-y-1
      icon"
          />
        </Link>
        <Link href="https://twitter.com/Th3MichaelWhite" target="_blank">
          <Image
            width={24}
            height={24}
            src={`/twitter.svg`}
            alt="twitter"
            className="mb-3 hover:-translate-y-1
      icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/th3michaelwhite/"
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src={`/linkedin.svg`}
            alt="linkedin"
            className="mb-3 hover:-translate-y-1
      icon"
          />
        </Link>
      </div>
      <div className="mobile-social-icons" style={{ color: "white" }}>
        <Link
          href="https://github.com/mikewhite628?tab=repositories"
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src={`/github.svg`}
            alt="github"
            className="mb-3 hover:-translate-y-1 
    icon"
          />
        </Link>
        <Link href="https://www.youtube.com/michaelwhitedev" target="_blank">
          <Image
            width={24}
            height={24}
            src={`/youtube.svg`}
            alt="youtube"
            className="mb-3 hover:-translate-y-1
       icon"
          />
        </Link>
        <Link href="https://twitter.com/Th3MichaelWhite" target="_blank">
          <Image
            width={24}
            height={24}
            src={`/twitter.svg`}
            alt="twitter"
            className="mb-3 hover:-translate-y-1
    icon"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/th3michaelwhite/ icon"
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src={`/linkedin.svg`}
            alt="linkedin"
            className="mb-3 hover:-translate-y-1
    icon"
          />
        </Link>
      </div>
    </div>
  );
}

export default Socials;
