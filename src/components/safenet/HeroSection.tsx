
'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import SafenetButton from './Button'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [showLoop, setShowLoop] = useState(false)
  const loopRef = useRef<HTMLVideoElement>(null)

  const handleIntroEnded = () => {
    setShowLoop(true)
    loopRef.current?.play()
  }

  return (
    <div className='max-w-[1440px] mx-auto px-4 lg:px-10'>
      <div className='py-[35px] relative'>
        <div className="relative h-full">
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleIntroEnded}
            className={cn(
              'w-full h-auto',
              showLoop ? 'hidden' : 'block'
            )}
          >
            <source src="/videos/safenet-hero-in.webm" type="video/webm" />
          </video>

          <video
            ref={loopRef}
            muted
            playsInline
            loop
            className={cn(
              'w-full h-auto z-20',
              showLoop ? 'block' : 'hidden'
            )}
          >
            <source src="/videos/safenet-hero-loop.webm" type="video/webm" />
          </video>
        </div>
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
