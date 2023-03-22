import * as React from "react";
import { useState, useEffect } from "react";
import useMobile from "./mobile";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ logo }) => {
  const isMobile = useMobile();

  return !isMobile ? (
    <div
      className={`bg-zinc-800 opacity-90  text-white fixed w-screen h-14 z-50 items-center showNav`}
    >
      <div className="flex justify-between items-center ">
        <Link href="/" className="self-center">
          <Image
            src={logo}
            alt="logo"
            height={40}
            width={40}
            className="ml-12 self-center"
          />
        </Link>
        <ul className="flex flex-row navbar pr-24 h-12 items-center justify-end font-bebas text-lg tracking-wide">
          <li className="mr-6 font-bold ">
            <Link href="/" className="hover:text-indigo-500  text-white">
              Home
            </Link>
          </li>
          <li className="mr-6  font-bold">
            <Link href="/#about" className="hover:text-indigo-500 text-white">
              About
            </Link>
          </li>
          <li className="mr-6  font-bold">
            <Link
              href="/#services"
              className="hover:text-indigo-500 text-white"
            >
              Services
            </Link>
          </li>
          <li className="mr-6  font-bold">
            <Link
              href="/#portfolio"
              className="hover:text-indigo-500 text-white"
            >
              {"Portfolio"}
            </Link>
          </li>
          <li className="mr-6 font-bold">
            <Link href="/#contact" className="hover:text-indigo-500 text-white">
              Contact Me
            </Link>
          </li>
          {/* <li className="mr-6 text-lg font-bold">
            <Link to="/blogs" className="hover:text-indigo-500 text-white">
              Blog
            </Link>
          </li>
          <button className="bg-indigo-500 hover:bg-indigo-400 text-lg py-1 px-4 rounded shadow font-bold">
            Camo To Code
          </button> */}
        </ul>
      </div>
    </div>
  ) : (
    <div className="bg-zinc-800 opacity-100 fixed w-screen h-16 z-50 ">
      <nav role="navigation" className="flex justify-between">
        <Link href="/" className="self-center">
          <Image
            src={logo}
            alt="logo"
            style={{ maxWidth: "40px", maxHeight: "40px" }}
            className="ml-3 self-center"
          />
        </Link>
        <div id="menuToggle" className="mr-12">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className="opacity-100 ml-12 ">
            <li>
              <Link href="/" className="hover:text-indigo-500 font-bebas">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-indigo-500 text-white font-bebas"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-indigo-500 text-white font-bebas"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="hover:text-indigo-500 text-white font-bebas"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-indigo-500 text-white font-bebas"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
