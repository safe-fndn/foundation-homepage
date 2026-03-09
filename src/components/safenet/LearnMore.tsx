import Image from 'next/image'
import React from 'react'
import SafenetButton from './Button'

const learnMoreItems = [
  {
    title: 'Tokenomics',
    description: 'Learn about SAFE token distribution and utility',
    image: '/images/safenet/tokenomics.png',
  },
  {
    title: 'Consensus Design',
    description: 'Understand how validator consensus works',
    image: '/images/safenet/consensus.png',
  },
  {
    title: 'Governance',
    description: 'Participate in network decision-making',
    image: '/images/safenet/governance.png',
  },
  {
    title: 'Roadmap',
    description: "See what's coming next for Safenet",
    image: '/images/safenet/roadmap.png',
  },
]

export default function LearnMore() {
  return (
    <div className="px-[44px] lg:px-[68px] lg:pr-[90px] pt-[145px] pb-[72px] md:pb-[38px]">
      {/* Mobile layout */}
      <div className="md:hidden">
        <h2 className="text-[60px] leading-[100%] font-medium tracking-tight pb-[40px]" style={{ letterSpacing: '-2.56px' }}>
          Learn more
        </h2>
        <div className="flex flex-col gap-[48px]">
          {learnMoreItems.map((item) => (
            <div key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={148}
                height={148}
                className="relative z-10 w-full max-w-[148px] h-auto object-contain"
              />
              <h3 className="text-xl font-medium pt-2 pb-1">{item.title}</h3>
              <p className="text-base font-light text-safenet-black leading-[110%] max-w-[190px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet layout */}
      <div className="hidden md:flex lg:hidden gap-[75px]">
        <h2
          className="text-[140px] leading-[100%] font-medium shrink-0"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '-5.6px' }}
        >
          Learn more
        </h2>
        <div className="grid grid-cols-2 gap-x-[64px] gap-y-[44px] flex-1">
          {learnMoreItems.map((item) => (
            <div key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="relative z-10 w-full max-w-[200px] h-auto object-contain"
              />
              <h3 className="text-2xl font-medium pt-2 pb-1">{item.title}</h3>
              <p className="text-base font-light text-safenet-black leading-[110%] max-w-[200px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex gap-[80px]">
        <h2
          className="text-[140px] leading-[100%] font-medium shrink-0"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '-5.6px' }}
        >
          Learn more
        </h2>
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-x-[43px] relative">
            {learnMoreItems.map((item, i) => (
              <div key={item.title} className={`flex flex-col gap-2 justify-end ${i % 2 !== 0 ? 'flex-col-reverse translate-y-[210px]' : ''}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="relative z-10 w-full max-w-[200px] h-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl whitespace-nowrap font-medium pb-1">{item.title}</h3>
                  <p className="text-base font-light text-safenet-black leading-[110%] max-w-[200px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-[287px]">
            <SafenetButton
              variant="primary"
              icon="/images/safenet/arrow-external.svg"
              iconAlt="arrow"
              iconHeight={18}
              iconWidth={18}
              className="w-full max-w-[200px]"
            >
              Read Docs
            </SafenetButton>
          </div>
        </div>
      </div>
    </div>
  )
}
