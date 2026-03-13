'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const tabs = ['HAPPY CASE', 'PROTECTION CASE'] as const
type Tab = (typeof tabs)[number]

const steps: Record<Tab, { title: string }[]> = {
  'HAPPY CASE': [
    { title: 'USER SUBMITS TRANSACTION' },
    { title: 'VALIDATORS RUN CHECKS, DETECT HIGH RISK THREAT' },
    { title: 'GUARD CHECKS VALIDATORS \u201CHIGH SAFE\u201D ATTESTATION' },
    { title: 'TRANSACTION IS BLOCKED FROM HIGH RISK THREAT' },
  ],
  'PROTECTION CASE': [
    { title: 'USER SUBMITS TRANSACTION' },
    { title: 'VALIDATORS RUN CHECKS, DETECT HIGH RISK THREAT' },
    { title: 'GUARD CHECKS VALIDATORS \u201CHIGH SAFE\u201D ATTESTATION' },
    { title: 'TRANSACTION IS BLOCKED FROM HIGH RISK THREAT' },
  ],
}

const images: Record<Tab, string> = {
  'HAPPY CASE': '/images/safenet/happy-case.png',
  'PROTECTION CASE': '/images/safenet/happy-case.png',
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<Tab>('HAPPY CASE')

  return (
    <div className="px-[20px] md:px-[48px]">
      <div className='h-px w-full bg-black/[0.1] relative'>
        <div className='max-w-[832px] w-fit absolute flex flex-row gap-2 -top-3 left-[50%] -translate-x-1/2'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tracking-wide whitespace-nowrap border border-black/[0.1] cursor-pointer transition-colors ${activeTab === tab
                ? 'text-safenet-green bg-safenet-black'
                : 'text-safenet-black bg-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-[48px] md:pt-[86px] flex flex-col-reverse md:flex-row md:items-center justify-center gap-[48px] md:gap-[68px] lg:gap-[220px] items-center">
        <div className="flex flex-col">
          {steps[activeTab].map((step, i) => (
            <div key={i} className="flex items-center gap-[16px] p-6 cursor-pointer hover:border hover:border-[#D3E8DD] hover:bg-[#FCFDFC]">
              <div className='relative'>
                <Image
                  src="/images/safenet/number-wrapper.svg"
                  alt="Number wrapper"
                  width={43}
                  height={43}
                  className=""
                />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sn-mono-md font-medium'>{i + 1}</p>
              </div>
              <p className="sn-mono-sm max-w-[230px] text-base font-light uppercase">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <Image
          src={images[activeTab]}
          alt={`${activeTab} illustration`}
          width={600}
          height={600}
          className="w-full max-w-[300px] lg:max-w-[450px] h-auto"
        />
      </div>
    </div>
  )
}
