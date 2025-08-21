import HeroSection from "@/components/homepage/HeroSection";
import MeetSafeFoundation from "@/components/homepage/MeetSafeFoundation";
import SafeEcosystem from "@/components/homepage/SafeEcosystem";
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
    </div>
  );
}
