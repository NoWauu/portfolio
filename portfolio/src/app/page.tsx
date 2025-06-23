'use client';

import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import CountUp from '@/blocks/TextAnimations/CountUp/CountUp';
export default function Home() {

  const rotatingTexts = [
    "Web Developer",
    "Software Engineer",
    "Fullstack Developer Apprentice",
    "osu! Player",
    "Tech Enthusiast",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="flex-1 mr-8">
        <RotatingText texts={rotatingTexts} className="text-xl text-black" />
      </div>
      <div className="flex-1 mb-8">
        <CountUp
          from={0}
          to={30}
          duration={0.5}
          className="text-4xl font-bold text-black"
        />
      </div>

    </div>
  );
}
