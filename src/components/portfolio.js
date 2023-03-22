import React from "react";
import useMobile from "./mobile";
import Image from "next/image";

function Portfolio({ projectOne, projectTwo, projectThree }) {
  const isMobile = useMobile();
  return (
    <div id="portfolio" className="portfolio-section sm:mx-12  relative">
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        className="text-white text-center mb-6 font-bebas text-5xl drop-shadow-xl"
      >
        Portfolio
      </h1>
      <div className=" mx-auto flex flex-col">
        <div
          className="sm:mx-6 mb-12 flex flex-row-reverse items-center justify-center flex-wrap-reverse"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="text-white lg:bg-transparent bg-main z-10 opacity-90 w-96">
            <h2 className="text-indigo-500 ml-6 text-xl">
              {`Personal Fitness Made Easy`}
            </h2>
            <h1 className="text-3xl mb-3 ml-6 font-bold">
              {"AI Fitness Trainer "}
            </h1>
            <div className="bg-main opacity-95 lg:shadow-xl  p-6 text-sm">
              <p className="mb-3">
                {
                  "A Personal trainer powered by ChatGPT's powerfull AI. With the AI Trainer you can"
                }
              </p>
              <ul>
                <li>{`Track workouts and personal records`}</li>
                <li> {`chat with the AI trainer 24/7`}</li>
                <li> {`get detailed workout advice`}</li>
                <li>
                  {
                    " Get a custom workout plan curated just for you based on your lifestyle. "
                  }
                </li>
              </ul>

              <p className="">Next Js + MongoDB + ChatGPT API</p>
            </div>
            <a href="https://www.aifitnesstrainer.io">
              <button className="py-2 px-4 ml-6 my-6 border border-indigo-500 shadow-md hover:bg-zinc-800 shadow-black">
                View Site
                <i
                  className="faShareSquare ml-3"
                  size="lg"
                  style={{ color: "#6365f1" }}
                ></i>
              </button>
            </a>
          </div>
          <div
            className="relative  
          shadow-lg border-2 border-indigo-500 port-img"
          >
            <Image
              src={projectOne}
              alt="AI Fitness Trainer"
              height={384}
              width={384}
            />
          </div>
        </div>

        <div
          className="sm:mx-6 mb-12 flex flex-row-reverse items-center justify-center flex-wrap-reverse"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="text-white lg:bg-transparent bg-main z-10 opacity-90 w-96">
            <h2 className="text-indigo-500 ml-6 text-xl">
              {`Improve Your Game`}
            </h2>
            <h1 className="text-3xl mb-3 ml-6 font-bold">
              {"LoL Skill Check "}
            </h1>
            <div className="bg-main opacity-95 lg:shadow-xl  p-6 text-sm">
              <p className="mb-3">
                {`This website is a powerful tool for avid League of Legends
                players, providing personalized game analysis and performance
                insights. By analyzing your most recent League of Legends match,
                the platform delivers a comprehensive game summary and
                individual stats tailored just for you. The site uses advanced
                algorithms to generate a detailed report, highlighting your
                strengths and areas for improvement, allowing you to fine-tune
                your gameplay strategy and enhance your overall performance on
                the Rift.`}
              </p>
              <p className="">Svelte + Express + Riot Games API</p>
            </div>
            <a href="https://www.lolskillcheck.com">
              <button className="py-2 px-4 ml-6 my-6 border border-indigo-500 shadow-md hover:bg-zinc-800 shadow-black">
                View Site
                <i
                  className="faShareSquare ml-3"
                  size="lg"
                  style={{ color: "#6365f1" }}
                ></i>
              </button>
            </a>
          </div>
          <div
            className="relative  
          shadow-lg border-2 border-indigo-500 port-img"
          >
            <Image
              src={projectTwo}
              alt="LoL Skill Scheck"
              height={384}
              width={384}
            />
          </div>
        </div>

        <div
          className="sm:mx-6 mb-12 flex flex-row-reverse items-center justify-center flex-wrap-reverse"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="text-white lg:bg-transparent bg-main z-10 opacity-90 w-96">
            <h2 className="text-indigo-500 ml-6 text-xl">
              {`Skip The Nonsense`}
            </h2>
            <h1 className="text-3xl mb-3 ml-6 font-bold">{"Camo To Code "}</h1>
            <div className="bg-main opacity-95 lg:shadow-xl  p-6 text-sm">
              <p className="mb-3">
                {`As a United States Marine Corps veteran i wanted to provide the
                best free learning resources available for veterans and
                civilians interested in pursuing a career in tech. The platform
                offers comprehensive training and mentorship programs, equipping
                users with the necessary skills and knowledge to excel in
                various tech-related fields. With a mission to bridge the gap
                between military service and civilian employment, this website
                provides a supportive community and career guidance for those
                transitioning into the tech industry.`}
              </p>
              <p className="">Next Js</p>
            </div>
            <a href="https://www.lolskillcheck.com">
              <button className="py-2 px-4 ml-6 my-6 border border-indigo-500 shadow-md hover:bg-zinc-800 shadow-black">
                View Site
                <i
                  className="faShareSquare ml-3"
                  size="lg"
                  style={{ color: "#6365f1" }}
                ></i>
              </button>
            </a>
          </div>
          <div
            className="relative  
          shadow-lg border-2 border-indigo-500 port-img"
          >
            <Image
              src={projectThree}
              alt="Camo To Code"
              height={384}
              width={384}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
