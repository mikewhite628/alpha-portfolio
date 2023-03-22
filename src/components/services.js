import React from "react";

import flag from "../../public/flag-icon.png";
import js from "../../public/js-icon.png";
import content from "../../public/content-icon.png";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="services-container">
      <div className="flex justify-center mb-24 flex-wrap">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="300"
          className="flex flex-col h-90  w-96 bg-zinc-800 shadow-zinc-800 shadow-md mx-6 sm:mr-6 my-3 items-center justify-center rounded-lg p-6 hover:bg-indigo-500"
        >
          <Image
            src={`/js-icon.png`}
            width={80}
            height={40}
            alt="content"
            className="mb-12"
          />

          <h1 className="text-xl text-white mb-3 font-bold">WEB DEVELOPER</h1>
          <p className="text-white text-center">
            I use various web technologies to create beautiful and responsive
            websites.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="300"
          className="flex flex-col h-90  w-96 bg-zinc-800 shadow-zinc-800 shadow-md mx-6 sm:mr-6 my-3 items-center justify-center rounded-lg p-6 hover:bg-indigo-500"
        >
          <Image
            src={`/flag-icon.png`}
            width={80}
            height={40}
            alt="content"
            className="mb-12"
          />
          <h1 className="text-xl text-white mb-3 font-bold">
            VETERAN SERVICES
          </h1>
          <p className="text-white text-center">
            I help fellow military veterans transition to a career in web
            development.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="300"
          className="flex flex-col h-90  w-96 bg-zinc-800 shadow-zinc-800 shadow-md mx-6 my-3 items-center justify-center rounded-lg p-6 hover:bg-indigo-500"
        >
          <Image
            src={`/content-icon.png`}
            width={80}
            height={40}
            alt="content"
            className="mb-12"
          />
          <h1 className="text-white text-xl mb-3 font-bold">TECH REVIEWS</h1>
          <p className="text-white text-center">
            I learn new technologies and document my experiences with them on
            YouTube.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
