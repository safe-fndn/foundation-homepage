import Image from 'next/image'
import React from 'react'

export default function Solution() {
  return (
    <div className='pb-8'>
      <div className='px-[20px] md:px-[48px]'>
        <div className='h-px w-full bg-black/[0.1] relative'>
          <p className='max-w-[832px] w-fit bg-white absolute -top-3 left-[20%] md:left-[30%] border border-black/[0.1]'>SOLUTION</p>
        </div>
      </div>
      <div className='flex justify-center pb-[43px] md:pb-[80px]'>
        <p
          className="pt-[29px] text-[34px] md:text-[60px] px-8 md:px-16 leading-[120%] md:leading-[100%] max-w-[832px]"
        >
          Onchain enforced threat elimination, beyond UI warnings
        </p>
      </div>
      <div className='px-[20px] md:px-[48px]'>
        <Image
          src="/images/safenet/solution-image.png"
          alt="Problem Image"
          width={1000}
          height={1000}
          className='w-full h-auto'
        />
      </div>
    </div>
  )
}
