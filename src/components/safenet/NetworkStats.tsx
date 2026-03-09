import React from 'react'
import SafenetButton from './Button'

const ITEM_COUNT = 12

const DITHER_TEXT =
  '9F3B2A1C7D88E4A0B1CFF29E4418A2C8EA884D9910FF2A71C3E8B11F90C2D4410BBCC9910AF2818C8E31FF04C1D7A8B22FF2198AC4410E77A02B4D8813E91AC0BC8E4410A99F20D88A12B7C03E11FA8CAA91F2E04C8D71BB3E91A0F8822D441AEE29C8A4410D9910FF2B71C3E8B11F90CD4410C8E99AF20B8812C7D03E11FA8C2BB9910A77C2E88F1C3D4410FF2198ACA12E8C9910B4D71C3E8822F04A1B9C8DE91F0A8822C4410BB9910AF2818C8E31FF04C1D7A8B22FF2198AC4410E77A02B4D8813E91AC0BC8E4410A99F20D88A12B7C03E11FA8C2BB9910A77C2E88F1C3D4A91F0B8822C441BB9910AF2818C8E31FF04C1D7A8B22FF2198AC4410E77A02B4D8813E91AC0BC8E4410A99F20D88A12B7C03E11FA8C2BB9910A77C2E88F1C3D4A12E8C9910B4D71C3E8822F04A1B9C8DE91F0A8822C4410BB9910AF2818C8E31FF04C1D7A8B22FF2198AC4410E77A02B4D8813E91AC0BC8E4410A99F20D88A12B7C03E11FA8C2BB9910A77C2E88F1C3D412E8C9910B4D71C3E8822F04A1B9910A77C2E88F1C3D412E8C9910B4D71C3E8822F04A171C3E8822F04A1B9910A77C2E88F1C3D412E8C9910B4D71C3E8822F04A1'

const stats = [
  { value: '12.4M', unit: 'SAFE', label: 'TOTAL SAFE STAKED' },
  { value: '47', unit: 'NODES', label: 'ACTIVE VALIDATORS' },
  { value: '94.2', unit: '%', label: 'PARTICIPATION RATE' },
  { value: '1.2M', unit: 'TXS', label: 'TRANSACTIONS CHECKED' },
]

function StatCard({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="border-2 border-black overflow-hidden">
      <div className="relative px-4 pb-4 pt-16 bg-safenet-green overflow-hidden">
        <p
          aria-hidden
          className="absolute opacity-[0.5] inset-0 break-all select-none pointer-events-none"
          style={{
            color: '#04BE5A',
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '110%',
            letterSpacing: '-0.28px',
          }}
        >
          {DITHER_TEXT}
        </p>
        <div className="relative flex items-baseline">
          <span
            className="text-[48px] md:text-[56px] lg:text-[80px] sn-mono-md font-light leading-none"
          >
            {value}
          </span>
          <span
            className="text-base md:text-xl lg:text-[32px] ml-2 font-light"
          >
            {unit}
          </span>
        </div>
      </div>
      <div className="bg-black p-[7px] px-4">
        <span className="sn-mono-sm md:text-xl font-light text-safenet-green uppercase">{label}</span>
      </div>
    </div>
  )
}

export default function NetworkStats() {
  return (
    <>
      <div className="w-full overflow-hidden bg-black py-3 mb-[46px] md:mb-[55px]">
        <div className="flex whitespace-nowrap gap-[14px]">
          {Array.from({ length: ITEM_COUNT }).map((_, i) => (
            <span key={i} className="sn-mono-md text-base flex items-center gap-[14px] text-safenet-green uppercase">
              <span className="inline-block h-[16px] w-[10px] bg-safenet-green" />
              Live Network Stats
            </span>
          ))}
        </div>
      </div>

      <div className="">
        <div className="hidden md:flex gap-[67px] lg:gap-[62px]">
          <div className="flex flex-col gap-[92px] flex-1">
            <StatCard {...stats[0]} />
            <StatCard {...stats[2]} />
          </div>
          <div className="flex flex-col gap-[92px] flex-1 mt-[91px]">
            <StatCard {...stats[1]} />
            <StatCard {...stats[3]} />
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        <div className="flex justify-center mt-[40px] md:mt-[56px]">
          <SafenetButton
            variant="outline"
            icon="/images/safenet/arrow-external-dark.svg"
            iconAlt="arrow"
            iconHeight={18}
            iconWidth={18}
            className="w-full max-w-[261px]"
          >
            View Explorer
          </SafenetButton>
        </div>
      </div>
    </>
  )
}
