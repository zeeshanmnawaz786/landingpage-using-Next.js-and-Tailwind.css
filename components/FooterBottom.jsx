import React from 'react'

function FooterBottom() {
  return (
    <>
    <div className=' md:flex md:justify-evenly text-center  p-8 border-t-2  font-light text-sm md:text-xl sm:font-normal ' >
        <div className='md:flex text-center'>
            <p className='font-semibold text-xl'>
                Omega
            </p>
            <p className='mx-10 mt-2 md:mt-0 '>
             2022 Zeeshan Nawaz 
            </p>
        </div>
        <div>
            <ul className='md:flex '>
                <li className='mx-3 mt-4 md:mt-0'>Support</li>
                <li className='mx-3 mt-4 md:mt-0'>Privacy Policy</li>
                <li className='mx-3 mt-4 md:mt-0'>Terms and Conditions</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default FooterBottom
