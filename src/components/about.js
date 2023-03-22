import React from "react";
import useMobile from "./mobile";
import Image from "next/image";

export default function About({ me2, me }) {
  const isMobile = useMobile();

  return (
    <div
      id="about"
      className="mx-auto flex justify-evenly text-white opacity-75 my-24 my-sm:36 flex-wrap max-w-[96rem] bg-zinc-700 relative  overflow-hidden"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="my-auto border-4 mx-6 border-l-indigo-500 border-b-indigo-500 border-t-zinc-500 border-r-zinc-500 shadow-md shadow-black"
      >
        {!isMobile ? (
          <Image src={"/me1.webp"} alt="Me" width={500} height={300} />
        ) : (
          <Image src={"/me2.webp"} alt="Me" swidth={500} height={300} />
        )}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="w-full sm:w-1/2 text-lg mx-6 flex justify-center items-center"
      >
        <div>
          <h1 className="text-5xl mt-6 text-bold mb-6 font-bebas">About Me</h1>
          <p className="mb-3">
            My name is Michael and I enoying creating fun and interactive web
            apps. In 2019 I started learning web development and sharing my
            progress on youtube. Turns out I really enjoyed this whole
            programming thing.
          </p>

          <p className="mb-3">
            {`Fast-forward to today, and I've had the opportunity to work at`}
            <a className={`ml-2`} href="https://cart.com">
              {"A Very Successfull Startup"}
            </a>
            {`and hone my skills as a developer in one of the most challenging 
              environments out there`}
          </p>
          <p className="mb-3">
            {`Here are a few technologies I've been working with recently:`}
          </p>
          <div className={`flex flex-row`}>
            <ul className="mr-24">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>Svelte</li>
              <li>TypeScript</li>
              <li> AI </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
