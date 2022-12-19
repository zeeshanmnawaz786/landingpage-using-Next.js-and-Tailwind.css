import Image from 'next/image'
import React from 'react'


function StarSection() {
  return (
    <div className='bg-blue-700 text-white text-lg md:flex justify-center p-2'>
        <div className='m-16 '>
            <div >
                <Image src='/assets/Images/fiveStar.png' width='130' height='25'/>
            </div><br/>
            <div>
                <p>
                    <i>"OMG! I cannot believe that I have got a brand new<br/>
                        landing page after getting Omega. It was super easty to<br/> 
                        edit and publish. Everyone shold try t!"</i>
                </p><br/>
                <p className='font-light text-gray-300'>Jonathan Taylor</p>
            </div>
        </div>
        <div className='m-16 '>
            <div >
            <Image src='/assets/Images/fiveStar.png' width='130' height='25'/>
            </div><br/>
            <div>
                <p>
                    <i>"OMG! I cannot believe that I have got a brand new<br/>
                        landing page after getting Omega. It was super easty to<br/> 
                        edit and publish. Everyone shold try t!"</i>
                </p><br/>
                <p className='font-light text-gray-300'>Jonathan Taylor</p>
            </div>
        </div>
    </div>
    )
}

export default StarSection
