import Image from 'next/image'
import React from 'react'

export default function NativeToken() {
  return (
    <div className="px-[19px] md:px-[47px] max-w-[1440px] mx-auto">
      <div className='border border-safenet-black border-t-0 border-b-0 items-center flex flex-col justify-between'>
        <Image
          src="/images/safenet/safe-coin.png"
          alt="coin"
          width={1000}
          height={1000}
          className="w-full max-w-[268px] md:max-w-[399px] lg:max-w-[462px] h-auto mx-auto"
        />
        <div className='border-t w-full border-t-safenet-black -mt-[100px]' style={{ backgroundColor: '#12FF80', backgroundImage: 'url(/images/safenet/native-token-bg.svg)', backgroundSize: '360px', backgroundRepeat: 'repeat' }}>
          <p className='text-[48px] md:text-[80px] flex flex-row items-center mx-auto max-w-[330px] md:max-w-[740px] leading-[95%] pt-10 pb-5 text-center'>
            <Image
              src="/images/safenet/bracket.svg"
              alt="bracket"
              className="hidden md:block"
              width={56}
              height={202}
            />
            {' '}SAFE is the native token of Safenet{' '}
            <Image
              src="/images/safenet/bracket.svg"
              alt="bracket"
              className="rotate-180 hidden md:block"
              width={56}
              height={202}
            />
          </p>
          <p className='sn-mono-sm md:text-base text-center uppercase'>The native token of safenet</p>

          <div className='w-full px-[20px] md:px-[40px] mt-[47px] md:mt-[106px] flex flex-col md:flex-row-reverse justify-center items-center gap-[48px] md:gap-[95px] pb-10 md:pb-[80px]'>
            <div className='border-l border-safenet-black'>
              <span className='bg-safenet-black text-safenet-white sn-mono-sm uppercase px-3 py-2 inline-block'>Secure</span>
              <div className='bg-safenet-black mt-8 px-5 py-4 md:px-8 md:py-8 max-w-[300px]'>
                <p className='sn-mono-sm text-base text-safenet-green uppercase'>Stake SAFE to secure validator participation and economic security.</p>
              </div>
            </div>

            <div className='border-l md:border-r md:border-l-0 border-safenet-black'>
              <div className='flex w-full justify-start md:justify-end'>
                <span className='bg-safenet-black text-safenet-white sn-mono-sm uppercase px-3 py-2'>Earn</span>
              </div>
              <div className='bg-safenet-black mt-8 px-5 py-4 md:px-8 md:py-8 max-w-[300px]'>
                <p className='sn-mono-sm text-base text-safenet-green uppercase'>Delegators earn rewards based on stake and validator participation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
