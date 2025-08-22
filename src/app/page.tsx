import CommunityVoices from "@/components/homepage/CommunityVoices";
import Governance from "@/components/homepage/Governance";
import HeroSection from "@/components/homepage/HeroSection";
import Impact from "@/components/homepage/Impact";
import MeetSafeFoundation from "@/components/homepage/MeetSafeFoundation";
import Resources from "@/components/homepage/Resources";
import SafeEcosystem from "@/components/homepage/SafeEcosystem";
import SafeSmartAccounts from "@/components/homepage/SafeSmartAccounts";
import Values from "@/components/homepage/Values";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full relative">
        <HeroSection />
        <div className="absolute bottom-0 left-0 right-0">
          <Navbar />
        </div>
      </div>
      <div className="pt-15 md:pt-[200px]">
        <MeetSafeFoundation />
      </div>
      <div className="py-[160px] md:pt-[240px] md:pb-[100px]">
        <SafeEcosystem />
      </div>
      <div className="bg-[#E4EDE6] py-[100px] md:py-[160px] flex flex-col gap-[160px]">
        <Impact />
        <Values />
      </div>
      <div className="pt-[60px] md:pt-[160px]">
        <Resources />
      </div>
      <div className="pt-[160px] md:pt-[240px]">
        <SafeSmartAccounts />
      </div>
      <div className="pt-[160px] md:pt-[240px]">
        <Governance />
      </div>
      <div className="py-[100px] md:pt-[275px] md:pb-[140px]">
        <CommunityVoices />
      </div>
    </div>
  );
}
