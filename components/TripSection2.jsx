import React from "react";
import Image from "next/image";
import Button from "./Button";

export function TripSection2() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-10 hidden lg:flex">
        <Image
          src="/assets/Images/TripSection2.png"
          width="480"
          height="550"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold">
          See the World & <br />
          Spend less always
        </h1>
        <p className="my-10">
          Create custom landing pages with Omega that convert <br /> more
          visitors than any website. With lots of unique blocks, <br />
          you can easilybuild a pagewithout coding.
        </p>
      </div>
    </div>
  );
}
