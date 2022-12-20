import Image from 'next/image'
import React from 'react'


function StarSection() {
  return (
    <div className='bg-blue-700 text-white md:flex justify-center pt-1 pb-1 xl:text-xl  font-lighter text-sm md:text-lg'>
        <div className='m-16 '>
            <div >
                <Image src='/assets/Images/fiveStar.png'
                width='130' 
                height='25' 
                alt='Image'
          />
            </div><br/>
            <div>
            <p>
                    <i>
                        <q>
                            OMG! I cannot believe that I have got a brand new
                            landing page after getting Omega. It was super easty to 
                            edit and publish. Everyone shold try
                        </q>
                    </i>
                </p><br/>
                <p className='font-light text-gray-300'>Jonathan Taylor</p>
            </div>
        </div>
        <div className='m-16 '>
            <div >
            <Image src='/assets/Images/fiveStar.png'
            width='130' 
            height='25' 
            alt='Image'/>
            </div><br/>
            <div >
                <p>
                    <i>
                        <q>
                            OMG! I cannot believe that I have got a brand new
                            landing page after getting Omega. It was super easty to 
                            edit and publish. Everyone shold try
                        </q>
                    </i>
                </p><br/>
                <p className='font-light text-gray-300'>Jonathan Taylor</p>
            </div>
        </div>
    </div>
    )
}

export default StarSection
