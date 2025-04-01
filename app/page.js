import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between md:pt-20 mt-[150px] ">
      <HeroSection />
    </main>
  );
}
