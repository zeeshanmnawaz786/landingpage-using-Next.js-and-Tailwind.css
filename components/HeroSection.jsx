import React from "react";
import Image from "next/image";
import Button from "./Button";

export function HeroSection() {
  return (
    <div className="items-center sm:h-auto p-5 lg:grid grid-cols-2 sm:m-10" >

      <div className=" m-10 sm:m-0  text-center" >
        <Image
          src="/assets/Images/HeroSectionImage.png"
          width="300"
          height="550"
          alt="Image"
        />
      </div>

      <div className=" m-10 sm:ml-10 md:mr-4 text-left xl:mr-20 ">
        <h1 className="p-3 pl-0 pb-0 text-2xl sm:text-4xl xl:text-5xl font-bold">
          Travel the World & 
          meet new friends
        </h1>
        <p className=" my-5 p-3 pl-0 lg:mt-10 lg:mb-10 xl:text-2xl ">
          Create custom landing pages with Omega that convert more
          visitors than any website. With lots of unique blocks,
          you can easilybuild a pagewithout coding.
        </p>
        <div className="relative w-full md:mt-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <input
            type="text"
            className="h-10 xl:h-14 pl-10 w-72 md:w-96 lg:w-80 xl:w-96 rounded-lg z-0 focus:shadow focus:outline-none border border-gray-300"
            placeholder="Email Address"
          />
          <div className="absolute top-1 right-5 sm:right-0 md:right-52 lg:right-16 xl:right-40">
            <Button text="I want to Join" />
          </div>
        </div>
      </div>
    </div>
  );
}
