'use client';

import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import StatsCard from "@/components/molecules/StatsCard";
export default function Home() {

  const rotatingTexts = [
    "Web Developer",
    "Software Engineer",
    "Fullstack Developer Apprentice",
    "osu! Player",
    "Tech Enthusiast",
  ];

  const stats = [
    { count: 40, label: "Pull requests" },
    { count: 400, label: "Contributions" },
    { count: 10, label: "Projects" }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">

      <div className="flex-1 mr-8">
        <RotatingText texts={rotatingTexts} className="text-xl text-black" />
      </div>
      <div className="flex-1 mb-8 flex flex-col items-center justify-center">
        <StatsCard stats={stats} />
      </div>

    </div>
  );
}
