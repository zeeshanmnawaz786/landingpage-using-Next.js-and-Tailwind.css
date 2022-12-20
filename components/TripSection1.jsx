import React from "react";
import Image from "next/image";

function TripSection1() {
  return (
    <div className="items-center sm:h-auto p-5  lg:grid grid-cols-2  sm:m-10" >
      <div className=" m-10 sm:ml-10 md:mr-4 text-left xl:mr-20 md:mb-20">

        <h1 className="p-3 pl-0 pb-0 text-2xl sm:text-4xl xl:text-5xl font-bold">
          Making Trip is fun.
          Travel with friends.
        </h1>
        <p className=" my-10 mb-10 xl:text-2xl font-light   md:text-xl sm:font-normal text-sm">
          Create custom landing pages with Omega that convert more
          visitors than any website. With lots of unique blocks,
          you can easilybuild a pagewithout coding.
        </p>
        
        <div className="flex">
          <p className="bg-purple-900 sm:rounded-3xl h-8 w-9 pl-3 pt-1 sm:h-10 sm:pt-2  rounded-2xl list-none bg-auto sm:pl-4 sm:w-10 text-white font-bold">
            1
          </p>
          <p className="ml-4 font-bold text-lg md:text-3xl mb-3 lg:mb-10">
            Find your Trip Partners
            
          </p>
        </div>
        <p className="ml-14 mb-10 xl:text-2xl font-light   md:text-xl sm:font-normal text-sm ">

              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sequi quia 
              qui voluptatum explicabo quasi iste natus! Hic, 
        </p>

        <div className="flex">
        <p className="bg-purple-900 sm:rounded-3xl h-8 w-9 pl-3 pt-1 sm:h-10 sm:pt-2  rounded-2xl list-none bg-auto sm:pl-4 sm:w-10 text-white font-bold">
              2
          </p>
          <p className="ml-4 font-bold text-lg md:text-3xl mb-3 lg:mb-10">

            Find your Trip Partners
            
          </p>
        </div>
        <p className="ml-14 mb-10 xl:text-2xl font-light   md:text-xl sm:font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sequi quia 
              qui voluptatum explicabo quasi iste natus! Hic, 
        </p>
      </div>
      <div className=" m-10 sm:m-0 md:ml-24 text-center" >
        <Image
          src="/assets/Images/TripImage.png"
          width="390"
          height="630"
          alt="Image"
        />
      </div>
    </div>
  );
}

export default TripSection1

