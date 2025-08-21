import HeroSection from "@/components/homepage/HeroSection";
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
    </div>
  );
}
