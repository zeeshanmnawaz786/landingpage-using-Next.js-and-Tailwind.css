import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='mt-20 mb-20 mx-auto w-96 text-center'>
      <h1 className="text-5xl font-bold">
        Get the app now
      </h1>  
      <p className='mt-8'>
        Create custom landing pages with Omega that Converts
        more visitors than any website.
      </p>
      <Image
          src="/assets/Images/playstoreANDIpone.png"
          width="340"
          height="100"
        />
    </div>
  )
}

export default Footer
