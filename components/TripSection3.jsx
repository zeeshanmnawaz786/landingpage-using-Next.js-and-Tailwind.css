import React from "react";
import Image from "next/image";
import Button from "./Button";

export function TripSection3() {
  return (
    <div className="items-center sm:h-auto p-5  lg:grid grid-cols-2  sm:m-10 pb-20" >
      <div className=" m-10 sm:ml-10 md:mr-4 text-left xl:mr-20 md:mb-20">
      <h1 className="p-3 pl-0 pb-0 text-2xl sm:text-4xl xl:text-5xl font-bold">
          Improve your travel experience.
      </h1>
      <p className=" my-10 mb-10 xl:text-2xl  font-light text-sm md:text-xl sm:font-normal ">

        Create custom landing pages with Omega that convert more
        visitors than any website. With lots of unique blocks,
        you can easilybuild a page without coding.
      </p>
          <Button text="Get this App"/>
      </div>
     <div className=" m-10 sm:m-0 text-center" >
        <Image
          src="/assets/Images/TripSection3.png"
          width="400"
          height="630"
          alt="Image"
        />
      </div>
    </div>
  );
}
