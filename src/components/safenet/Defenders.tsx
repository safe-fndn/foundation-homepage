import Image from 'next/image'
import React from 'react'

export default function Defenders() {
  return (
    <div>
      <div className='flex flex-col justify-center pb-[40px]'>
        <p
          className="text-[34px] pb-4 md:text-[60px] text-center px-8 md:px-16 leading-[120%] md:leading-[100%] max-w-[476px] md:max-w-[832px] mx-auto"
        >
          A resilient validator network of defenders
        </p>
        <p className='max-w-[632px] px-8 md:px-16 mx-auto text-center font-light'>A decentralised validator network that checks transactions onchain before they execute. Transactions only execute if validator consensus confirms they are safe from hacks, threats or exploits.</p>
      </div>
      <div className='px-[20px] md:px-[48px]'>
        <Image
          src="/images/safenet/defender-image.png"
          alt="Defender Image"
          width={1000}
          height={1000}
          className='w-full h-auto'
        />
      </div>
    </div>
  )
}
