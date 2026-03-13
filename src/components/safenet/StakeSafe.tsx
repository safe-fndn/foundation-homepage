import React from 'react'
import Button from '../ui/Button'
import SafenetButton from './Button'

export default function StakeSafe() {
  return (
    <div className='pt-[72px] md:pt-[99px]'>
      <div className='flex flex-col justify-center pb-[40px]'>
        <p
          className="text-[34px] pb-4 md:text-[60px] text-center px-8 md:px-16 leading-[120%] md:leading-[100%] max-w-[372px] md:max-w-full mx-auto"
        >
          Where can you stake $SAFE
        </p>
        <p className='max-w-[372px] md:max-w-[640px] md:text-[18px] px-8 md:px-16 mx-auto text-center font-light'>Safe Foundation does not run its own staking frontend. To interact with Safenet staking, users may choose from the list of Frontend Operators below.</p>
      </div>
      <div className='px-[20px] md:px-[48px]'>
        <div className='h-px w-full bg-black/[0.1] relative'>
          <p className='max-w-[832px] w-fit uppercase bg-white absolute -top-3 left-[20%] md:left-[30%] border border-black/[0.1]'>frontend operator</p>
        </div>
        <div className='border-y pl-5 mb-[54px] border-black/[0.1] flex flex-row items-center justify-between mt-[47px] py-5'>
          <p className='text-[24px]'>cc0x</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button
              icon="/images/common/arrow-external.svg"
              iconAlt="Arrow External"
              iconHeight={18}
              iconWidth={18}
              variant="link"
              className="sn-mono-sm"
            >
              VISIT
            </Button>
          </a>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-center items-center gap-[20px]'>
          <SafenetButton
            className='w-full max-w-[261px]'
            icon='/images/safenet/arrow-external.svg'
            iconAlt='arrow'
            iconHeight={24}
            iconWidth={24}
          >
            How it works
          </SafenetButton>
          <SafenetButton
            variant='outline'
            className='w-full max-w-[261px]'
          >
            Read Docs
          </SafenetButton>
        </div>
      </div>
    </div>
  )
}
