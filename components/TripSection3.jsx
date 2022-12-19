import React from "react";
import Image from "next/image";
import Button from "./Button";

export function TripSection3() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl font-bold">
          Improve your<br />
          travel experience.
        </h1>
        <p className="my-10">
          Create custom landing pages with Omega that convert <br /> more
          visitors than any website. With lots of unique blocks, <br />
          you can easilybuild a pagewithout coding.
        </p>
            <Button text="Get this App"/>
      </div>
      <div className="m-10 hidden lg:flex">
        <Image
          src="/assets/Images/TripSection3.png"
          width="400"
          height="630"
        />
      </div>
    </div>
  );
}
