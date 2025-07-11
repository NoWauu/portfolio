'use client';

import { useState } from 'react';
import CardStack from '@/components/organisms/CardStack';
import StackNavigation from '@/components/molecules/StackNavigation';

export default function AboutPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentStackIndex, setCurrentStackIndex] = useState(0);
  const [isSwipping, setIsSwipping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  // Stack 1: Journey
  const journeyCards = [
    {
      title: "Découverte via Minecraft",
      period: "Les débuts",
      description: "Fasciné par la mécanique du jeu plutôt que par la construction, j'ai voulu comprendre comment Minecraft fonctionnait sous le capot.",
      tech: "Skript",
      icon: "🎮",
      color: "from-green-400 to-emerald-600",
      details: "Premier contact avec la logique de programmation à travers les systèmes de jeu."
    },
    {
      title: "Transition vers Java",
      period: "Approfondissement", 
      description: "Grâce aux rencontres et à la communauté, j'ai découvert Java, le langage natif de Minecraft, ouvrant un monde de possibilités.",
      tech: "Java",
      icon: "☕",
      color: "from-orange-400 to-red-600",
      details: "Développement de plugins complexes avec gestion d'événements et bases de données."
    },
    {
      title: "Diversification Technologique",
      period: "Expansion",
      description: "J'ai élargi mes horizons en explorant diverses technologies : développement web, réseaux, systèmes, bases de données et architecture logicielle.",
      tech: "Réseaux, Systèmes",
      icon: "🔧",
      color: "from-blue-400 to-cyan-600",
      details: "Exploration des technologies web, administration système, protocoles réseau et architectures distribuées."
    },
    {
      title: "Apprenti Fullstack",
      period: "Aujourd'hui",
      description: "Continuellement en apprentissage, je développe des applications complètes en combinant backend et frontend.",
      tech: "TypeScript, Tailwind",
      icon: "🚀",
      color: "from-purple-400 to-pink-600",
      details: "Développement d'applications end-to-end avec architecture moderne."
    }
  ];

  // Stack 2: Skills & Technologies
  const skillsCards = [
    {
      title: "Langages de Programmation",
      period: "Core Skills",
      description: "Maîtrise des langages principaux pour le développement moderne.",
      tech: "Java, TypeScript, JavaScript",
      icon: "💻",
      color: "from-blue-500 to-indigo-600",
      details: "Java (85%), TypeScript (75%), JavaScript (80%)"
    },
    {
      title: "Frameworks & Libraries",
      period: "Frontend",
      description: "Frameworks modernes pour créer des interfaces utilisateur performantes.",
      tech: "React, Next.js, Tailwind",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-600",
      details: "React ecosystem, Server-side rendering, Component libraries"
    },
    {
      title: "Outils & Environnement",
      period: "DevOps",
      description: "Outils de développement et déploiement pour un workflow efficace.",
      tech: "Git, VS Code, Vercel",
      icon: "🛠️",
      color: "from-gray-500 to-slate-600",
      details: "Version control, IDE optimization, Cloud deployment"
    },
    {
      title: "Minecraft Development",
      period: "Specialty",
      description: "Développement spécialisé dans l'écosystème Minecraft.",
      tech: "Bukkit, Spigot, Paper",
      icon: "🎮",
      color: "from-green-500 to-emerald-600",
      details: "Plugin development, Server optimization, Custom mechanics"
    }
  ];

  // Stack 3: Projects & Achievements
  const projectsCards = [
    {
      title: "Plugins Minecraft",
      period: "Gaming",
      description: "Développement de plugins complexes pour serveurs Minecraft avec des milliers d'utilisateurs.",
      tech: "Java, MySQL",
      icon: "🏗️",
      color: "from-amber-500 to-orange-600",
      details: "Systèmes de quêtes, économie, PvP, anti-cheat"
    },
    {
      title: "Applications Web",
      period: "Web Development",
      description: "Création d'applications web modernes avec interfaces utilisateur intuitives.",
      tech: "React, Next.js",
      icon: "🌐",
      color: "from-purple-500 to-pink-600",
      details: "Portfolio, dashboards, e-commerce, landing pages"
    },
    {
      title: "Projets Open Source",
      period: "Community",
      description: "Contributions à des projets open source et partage de connaissances.",
      tech: "GitHub",
      icon: "🤝",
      color: "from-teal-500 to-cyan-600",
      details: "40+ Pull requests, Documentation, Code reviews"
    },
    {
      title: "Apprentissage Continu",
      period: "Growth",
      description: "Veille technologique et apprentissage de nouvelles technologies.",
      tech: "Various",
      icon: "📚",
      color: "from-rose-500 to-red-600",
      details: "Courses, tutorials, conferences, tech blogs"
    }
  ];

  const cardStacks = [
    { name: "Mon Parcours", cards: journeyCards, icon: "🚀" },
    { name: "Compétences", cards: skillsCards, icon: "💡" },
    { name: "Projets", cards: projectsCards, icon: "🎯" }
  ];

  const currentStack = cardStacks[currentStackIndex];

  const nextCard = () => {
    if (isSwipping) return;
    setIsSwipping(true);
    setSwipeDirection('left');
    setTimeout(() => {
      setCurrentCardIndex((prev) => 
        prev < currentStack.cards.length - 1 ? prev + 1 : 0
      );
      setIsSwipping(false);
      setSwipeDirection(null);
    }, 150);
  };

  const prevCard = () => {
    if (isSwipping) return;
    setIsSwipping(true);
    setSwipeDirection('right');
    setTimeout(() => {
      setCurrentCardIndex((prev) => 
        prev > 0 ? prev - 1 : currentStack.cards.length - 1
      );
      setIsSwipping(false);
      setSwipeDirection(null);
    }, 150);
  };

  const selectStack = (stackIndex: number) => {
    setCurrentStackIndex(stackIndex);
    setCurrentCardIndex(0);
  };

  const skills = [
    { name: "Java", level: 85, icon: "☕" },
    { name: "TypeScript", level: 75, icon: "📝" },
    { name: "React/Next.js", level: 70, icon: "⚛️" },
    { name: "Minecraft Plugins", level: 90, icon: "🎮" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné par la création d&apos;applications innovantes, 
            toujours en quête de nouveaux défis techniques.
          </p>
        </div>

        {/* Card Stacks */}
        <div className="mb-16">
          {/* Stack Navigation */}
          <StackNavigation
            cardStacks={cardStacks}
            currentStackIndex={currentStackIndex}
            onSelectStack={selectStack}
          />

          {/* Card Stack Display */}
          <CardStack
            cards={currentStack.cards}
            currentCardIndex={currentCardIndex}
            setCurrentCardIndex={setCurrentCardIndex}
            currentStackIndex={currentStackIndex}
            isSwipping={isSwipping}
            swipeDirection={swipeDirection}
            onNextCard={nextCard}
            onPrevCard={prevCard}
          />
        </div>

        {/* Quick Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Aperçu Rapide</h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-white/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Pourquoi la programmation ?</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Ce qui me fascine dans la programmation, c&apos;est cette capacité à créer quelque chose à partir de rien. 
                Comme dans Minecraft, où des blocs simples permettent de construire des univers complexes, 
                le code nous donne le pouvoir de transformer des idées en réalités fonctionnelles.
              </p>
              <p>
                Chaque nouveau projet est un puzzle à résoudre, une opportunité d&apos;apprendre et de grandir. 
                C&apos;est cette soif de découverte et de création qui me pousse à continuer d&apos;explorer 
                de nouvelles technologies et à relever de nouveaux défis.
              </p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}