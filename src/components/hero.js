import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function Hero({ me }) {
  return (
    <div className="about-container bg-zinc-800 px-12 sm:px-24">
      <div className="about-section flex flex-row justify-between about-inner mx-auto">
        <div className="text-white my-auto">
          <p className="text-2xl sm:text-5xl"> {`Hi There 👋 I'm`}</p>
          <h1 className="font-bebas text-4xl sm:text-7xl">Michael White</h1>
          <div className="text-indigo-500 text-2xl sm:text-3xl font-bold">
            <Typewriter
              options={{
                strings: [
                  "WEB DEVELOPER",
                  "CONTENT CREATOR",
                  "PROBLEM SOLVER",
                  "VETERAN",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="mt-3 mb-3 text-lg sm:text-xl w-48 sm:w-96">
            <p>
              {`I'm a professional Front End Web Developer based out of Houston,
              Texas.`}
            </p>
          </div>
          <Link href="/#about">
            <button
              className="bg-indigo-500 py-2 px-4 rounded shadow hover:bg-indigo-600 hover:-translate-y-1 
      hover:scale-110 duration-300"
            >
              About Me
            </button>
          </Link>
        </div>

        <div className="my-auto border-4 me1 border-t-indigo-500 border-r-indigo-500 border-l-zinc-500 border-b-zinc-500 shadow-md shadow-black">
          <Image src={`/me2.webp`} alt="me" width={450} height={500} />
        </div>
      </div>
    </div>
  );
}
