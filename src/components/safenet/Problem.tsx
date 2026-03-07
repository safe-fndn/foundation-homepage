import Image from 'next/image'
import React from 'react'

export default function Problem() {
  return (
    <div>
      <div className='px-[20px] md:px-[48px]'>
        <div className='h-px w-full bg-black/[0.1] relative'>
          <p className='max-w-[832px] w-fit bg-white absolute -top-3 left-[20%] md:left-[30%] border border-black/[0.1]'>PROBLEM</p>
        </div>
      </div>
      <div className='flex justify-center pb-[43px] md:pb-[80px]'>
        <p
          className="pt-[29px] text-[34px] md:text-[60px] px-8 md:px-16 leading-[120%] md:leading-[100%] max-w-[832px]"
        >
          Since 2017, more than $20B in digital assets have been stolen through wallet compromises, malicious applications, and supply-chain exploits.
        </p>
      </div>
      <div className='px-[20px] md:px-[48px]'>
        <Image
          src="/images/safenet/problem-image.png"
          alt="Problem Image"
          width={1000}
          height={1000}
          className='w-full hidden md:block h-auto'
        />
        <Image
          src="/images/safenet/problem-mobile-image.png"
          alt="Problem Image"
          width={1000}
          height={1000}
          className='w-full md:hidden h-auto'
        />
      </div>
    </div>
  )
}
