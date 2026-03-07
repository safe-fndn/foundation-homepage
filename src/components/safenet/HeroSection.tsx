import Image from 'next/image'
import React from 'react'
import SafenetButton from './Button'

export default function HeroSection() {
  return (
    <div className='max-w-[1440px] mx-auto px-4 lg:px-10'>
      <div className='py-[35px]'>
        <Image
          src="/images/safenet/hero-safenet.png"
          alt="SafeNet Hero"
          width={1360}
          height={467}
          className='w-full hidden lg:block h-auto'
        />
        <Image
          src="/images/safenet/hero-safenet-mobile.png"
          alt="SafeNet Hero Mobile"
          width={1360}
          height={540}
          className='w-full lg:hidden max-h-[540px] h-auto'
        />
      </div>
      <h1
        className="text-[48px] md:text-[64px] pb-[24px] lg:[58px] max-w-[700px] lg:max-w-[1120px] lg:text-[104px] lg:sn-display-lg"
        style={{
          lineHeight: '95%',
          letterSpacing: '-3.12px'
        }}
      >
        <Image
          src="/images/safenet/bracket.svg"
          alt="bracket"
          className="inline mb-2 lg:mb-3 w-[16px] md:w-[20px] lg:w-[25px] h-[32px] md:h-[60px] lg:h-[90px]"
          width={25}
          height={90}
        />
        {' '}The defence protocol for self-custody{' '}
        <Image
          src="/images/safenet/bracket.svg"
          className="inline rotate-180 w-[16px] md:w-[20px] lg:w-[25px] h-[32px] md:h-[60px] lg:h-[90px]"
          alt="bracket"
          width={25}
          height={90}
        />
      </h1>
      <div className='pb-[48px] w-full flex flex-col lg:flex-row items-end justify-between gap-6'>
        <div className='sn-mono-md text-base lg:text-xl uppercase'>
          <p className='pb-5'>Safenet is A resilient network secured by SAFE token that enforces wallet transaction security onchain</p>
          <p>even if you sign by mistake</p>
        </div>
        <div className='flex flex-col md:flex-row w-full gap-[20px]'>
          <SafenetButton
            className='w-full'
            icon='/images/safenet/arrow-external.svg'
            iconAlt='arrow'
            iconHeight={24}
            iconWidth={24}
          >
            Stake Safe
          </SafenetButton>
          <SafenetButton
            variant='outline'
            className='w-full'
          >
            Read Docs
          </SafenetButton>
        </div>
      </div>
    </div>
  )
}
