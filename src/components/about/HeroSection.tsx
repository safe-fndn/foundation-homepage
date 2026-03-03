import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative pt-[120px] md:pt-[200px] pb-[60px] md:pb-[100px] px-[16px] overflow-hidden">
      <div className="max-w-[1242px] mx-auto relative z-10">
        <h1 className="text-4xl md:text-7xl leading-[110%] max-w-[900px]">
          Advancing open-source technology for secure digital asset management
        </h1>
        <p className="text-[#1a1a1acc] text-xl md:text-2xl leading-[140%] mt-5 md:mt-8 max-w-[800px] font-light">
          The Safe Ecosystem Foundation is a Swiss foundation based in Zug,
          dedicated to developing, promoting, and making publicly accessible
          open-source technology for secure digital asset management. Safe Smart
          Accounts are the most widely used infrastructure of their kind in the
          Ethereum ecosystem, securing digital assets worth billions of dollars.
        </p>
      </div>
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[50%] opacity-70">
        <Image
          src="/images/about/hero.png"
          alt="Swiss mountain landscape"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #fff 0%, transparent 30%), linear-gradient(to top, #fff 0%, transparent 20%)",
          }}
        />
      </div>
    </div>
  );
}
