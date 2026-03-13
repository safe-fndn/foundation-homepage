import React from 'react'
import SafenetButton from './Button'
import Image from 'next/image'

const cards = [
  {
    label: 'USERS',
    image: '/images/safenet/users.png',
    description:
      'Web3 users wanting protection from blind-signing, phishing, and UI exploits',
  },
  {
    label: 'INTEGRATORS',
    image: '/images/safenet/integrators.png',
    description:
      'Wallet operators looking to offer enforced onchain security rather than offchain warnings.',
  },
  {
    label: 'TX CHECKERS',
    image: '/images/safenet/tx-checkers.png',
    description:
      'Security providers looking to be rewarded for their transaction checking expertise',
  },
  {
    label: 'VALIDATORS',
    image: '/images/safenet/validators.png',
    description:
      'Validators who want to run nodes, attest transactions, and earn fees for providing security.',
  },
]

export default function WhoIsItFor() {
  return (
    <div className="px-[20px] md:px-[48px] pb-[70px] md:pb-[100px]">
      <div className="px-6 lg:px-[100px] flex flex-col md:flex-row md:items-end md:justify-between gap-[40px] pb-[72px] md:pb-[56px]">
        <h2
          className="text-[48px] md:text-[92px] lg:text-[96px]"
          style={{
            lineHeight: "90%",
            letterSpacing: "-3.84px",
          }}
        >
          Who is
          <br />
          it for
        </h2>
        <SafenetButton
          icon="/images/safenet/arrow-external.svg"
          iconAlt="arrow"
          iconHeight={24}
          iconWidth={24}
          className='max-w-[280px]'
        >
          fill put inbound form
        </SafenetButton>
      </div>

      <div className="px-6 md:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-[40px] md:gap-y-[48px]">
        {cards.map((card, index) => (
          <div key={card.label} className='flex flex-col items-start'>
            <div className='flex flex-row items-center pb-[16px] gap-1'>
              <div className='w-[16px] h-[16px] rounded-full border border-black text-[11px] font-light flex justify-center items-center'>
                {index + 1}
              </div>
              <p className="sn-mono-sm uppercase text-base font-light">
                {card.label}
              </p>
            </div>
            <Image
              src={card.image}
              alt={card.label}
              width={100}
              height={100}
              className='w-full max-w-[148px] md:max-w-[232px] h-auto'
            />
            <p className="pt-4 font-light max-w-[232px] text-base leading-[140%]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
