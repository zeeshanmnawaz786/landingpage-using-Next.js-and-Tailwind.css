import Image from 'next/image'
import React from 'react'

function Footer() {
  return (

    <div className=" m-10 sm:ml-10 md:mr-4 xl:mr-20 text-center">
    <h1 className="p-3 pl-0 pb-0 text-2xl sm:text-4xl xl:text-5xl font-bold">
        Get the app now
      </h1>  
      <p className=" my-5 p-3 pl-0 lg:mt-10 lg:mb-10 xl:text-2xl md:ml-20 md:mr-20">

        Create custom landing pages with Omega that Converts
        more visitors than any website. 
      </p>
      <Image
          src="/assets/Images/playstoreANDIpone.png"
          width="340"
          height="100"
          alt="Image"
        />
    </div>
  )
}

export default Footer
