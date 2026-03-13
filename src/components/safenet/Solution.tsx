
'use client'

import { cn } from '@/lib/utils'
import React, { useRef, useState } from 'react'

export default function Solution() {
  const [showLoop, setShowLoop] = useState(false)
  const loopRef = useRef<HTMLVideoElement>(null)

  const handleIntroEnded = () => {
    setShowLoop(true)
    loopRef.current?.play()
  }

  return (
    <div className=''>
      <div className='px-[20px] md:px-[48px]'>
        <div className='h-px w-full bg-black/[0.1] relative'>
          <p className='max-w-[832px] w-fit bg-white absolute -top-3 left-[50%] -translate-x-1/2 md:left-[30%] border border-black/[0.1]'>SOLUTION</p>
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
        <div className='relative'>
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
            <source src="/videos/safenet-solution-in.webm" type="video/webm" />
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
            <source src="/videos/safenet-solution-loop.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  )
}
