import React from "react";
import Image from "next/image";

function TripSection1() {
  return (
    <div className="flex justify-center items-center h-screen mt-20">

      <div>
        <h1 className="text-5xl font-bold">
          Making Trip is fun.<br />
          Travel with friends.
        </h1>
        <p className="my-10 font-light font-sans spac">
          Create custom landing pages with Omega that convert <br /> more
          visitors than any website. With lots of unique blocks, <br />
          you can easilybuild a pagewithout coding.
        </p>
        
        <div className="flex">
          <p className="bg-purple-900 rounded-3xl list-none bg-auto p-2 pl-4 w-10 text-white font-bold">
            1
          </p>
          <p className="ml-5 font-bold text-lg">
            Find your Trip Partners
            
          </p>
        </div>
        <p className="ml-14">
              Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Eveniet sequi quia 
              qui<br/> voluptatum explicabo quasi iste natus! Hic,<br/> 
        </p>

        <div className="flex">
          <p className="bg-purple-900 rounded-3xl list-none bg-auto p-2 pl-4 w-10 text-white font-bold">
            2
          </p>
          <p className="ml-5 font-bold text-lg">
            Find your Trip Partners
            
          </p>
        </div>
        <p className="ml-14">
              Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Eveniet sequi quia 
              qui<br/> voluptatum explicabo quasi iste natus! Hic,<br/> 
        </p>
        
        
      </div>
      <div className="hidden lg:flex mx-10">
        <Image
          src="/assets/Images/TripImage.png"
          width="390"
          height="630"
        />
      </div>
    </div>
  );
}

export default TripSection1

