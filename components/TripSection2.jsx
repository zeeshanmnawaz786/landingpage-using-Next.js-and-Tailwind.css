import React from "react";
import Image from "next/image";

export function TripSection2() {
  return (
    <div className="items-center sm:h-auto p-5 lg:grid grid-cols-2 sm:m-10" >

<div className=" m-10 sm:m-0  text-center" >

        <Image
          src="/assets/Images/TripSection2.png"
          width="480"
          height="550"
          alt="Image"
        />
      </div>

      <div className=" m-10 sm:ml-10 md:mr-4 text-left xl:mr-20 md:mt-20">
        <h1 className="p-3 pl-0 pb-0 text-2xl sm:text-4xl xl:text-5xl font-bold">
          See the World & 
          Spend less always
        </h1>
        <p className=" my-5 p-3 pl-0 lg:mt-10 lg:mb-10 xl:text-2xl ">
          Create custom landing pages with Omega that convert more
          visitors than any website. With lots of unique blocks,
          you can easilybuild a pagewithout coding.
        </p>
      </div>
    </div>
  );
}
