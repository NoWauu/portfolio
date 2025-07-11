'use client';

import StatsCard from "@/components/molecules/StatsCard";
import Hero from "@/components/organisms/Hero";

export default function Home() {

  const rotatingTexts = [
    "Développeur Web",
    "Ingénieur Logiciel",
    "Apprenti Développeur Fullstack",
    "osu! Player",
    "Passionné de technologie",
    "Développeur de plugins Minecraft"
  ];

  const stats = [
    { count: 40, label: "Pull requests" },
    { count: 400, label: "Contributions" },
    { count: 10, label: "Projets" }
  ];
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100">
      <Hero rotatingTexts={rotatingTexts} />
      <div className="flex-1 mb-8 flex flex-col items-center justify-center space-y-6">
        <StatsCard stats={stats} />
        <a 
          href="https://github.com/NoWauu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-magenta-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Button content */}
          <div className="relative flex items-center space-x-2">
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Voir sur GitHub</span>
          </div>
        </a>
      </div>
    </div>
  );
}
