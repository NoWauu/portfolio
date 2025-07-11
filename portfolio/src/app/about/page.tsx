'use client';

import { useState } from 'react';
import CardStack from '@/components/organisms/CardStack';
import StackNavigation from '@/components/molecules/StackNavigation';

export default function AboutPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentStackIndex, setCurrentStackIndex] = useState(0);
  const [isSwipping, setIsSwipping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [isStackTransitioning, setIsStackTransitioning] = useState(false);

  // Stack 1: Journey
  const journeyCards = [
    {
      title: "Découverte via Minecraft",
      period: "Les débuts",
      description: "Fasciné par la mécanique du jeu plutôt que par la construction, j'ai voulu comprendre comment Minecraft fonctionnait sous le capot.",
      tech: ["Skript"],
      icon: "🎮",
      color: "from-green-400 to-emerald-600",
      details: "Premier contact avec la logique de programmation à travers les systèmes de jeu."
    },
    {
      title: "Transition vers Java",
      period: "Approfondissement", 
      description: "Grâce aux rencontres et à la communauté, j'ai découvert Java, le langage natif de Minecraft, ouvrant un monde de possibilités.",
      tech: ["Java"],
      icon: "☕",
      color: "from-orange-400 to-red-600",
      details: "Développement de plugins complexes avec gestion d'événements et bases de données."
    },
    {
      title: "Diversification Technologique",
      period: "Expansion",
      description: "J'ai élargi mes horizons en explorant diverses technologies : développement web, réseaux, systèmes, bases de données et architecture logicielle.",
      tech: ["Réseaux", "Systèmes", "Bases de données"],
      icon: "🔧",
      color: "from-blue-400 to-cyan-600",
      details: "Exploration des technologies web, administration système, protocoles réseau et architectures distribuées."
    },
    {
      title: "Apprenti Fullstack",
      period: "Aujourd'hui",
      description: "Continuellement en apprentissage, je développe des applications complètes en combinant backend et frontend.",
      tech: ["TypeScript", "Tailwind", "React", "Next.js"],
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
      tech: ["Rust", "Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS"],
      icon: "💻",
      color: "from-blue-500 to-indigo-600",
      details: "Des langages utilisés et récents"
    },
    {
      title: "Frameworks & Libraries",
      period: "Frontend",
      description: "Frameworks modernes pour créer des interfaces utilisateur performantes.",
      tech: ["React", "Next.js", "Tailwind", ".NET", "Flutter"],
      icon: "⚛️",
      color: "from-cyan-500 to-blue-600",
      details: "Librairies de composants, Webassembly, Rendu côté serveur, CSS optimisé"
    },
    {
      title: "Outils & Environnement",
      period: "DevOps",
      description: "Outils de développement et déploiement pour un workflow efficace.",
      tech: ["Git", "VS Code", "JetBrains", "Vercel"],
      icon: "🛠️",
      color: "from-gray-500 to-slate-600",
      details: "Version control, IDE optimization, Cloud deployment"
    },
    {
      title: "Minecraft Development",
      period: "Specialité",
      description: "Développement spécialisé dans l'écosystème Minecraft.",
      tech: ["Bukkit", "Spigot", "Paper"],
      icon: "🎮",
      color: "from-green-500 to-emerald-600",
      details: "Développement de plugins, Mécaniques personnalisées"
    }
  ];

  // Stack 3: School Journey
  const schoolCards = [
    {
      title: "Collège",
      period: "2016-2020",
      description: "Découverte de l'informatique et premiers pas dans la programmation en parallèle des études générales.",
      tech: ["Bases informatiques"],
      icon: "🎓",
      color: "from-green-400 to-teal-600",
      details: "Première approche de la logique algorithmique et de la résolution de problèmes."
    },
    {
      title: "Lycée Général",
      period: "2020-2023",
      description: "Approfondissement des connaissances générales avec spécialisation en mathématiques et sciences. Découverte de Python",
      tech: ["Mathématiques", "Physique", "NSI"],
      icon: "📚",
      color: "from-blue-400 to-indigo-600",
      details: "Développement de la logique mathématique appliquée à la programmation."
    },
    {
      title: "BUT Informatique",
      period: "2023-2026",
      description: "Formation professionnelle en développement d'applications, alternant développeur FullStack C# pour découvrir les bonnes pratiques et les méthodes de travail professionnelles",
      tech: ["Développement Full-Stack"],
      icon: "💼",
      color: "from-purple-400 to-pink-600",
      details: "Apprentissage en alternance, projets réels, méthodologies agiles."
    },
    {
      title: "Projets Futurs",
      period: "À venir...",
      description: "Objectifs de spécialisation et d&apos;évolution professionnelle dans le développement logiciel ou la cyber sécurité.",
      tech: ["Spécialisation avancée"],
      icon: "🚀",
      color: "from-orange-400 to-red-600",
      details: "Architecture logicielle, leadership technique, innovation technologique."
    }
  ];

  const cardStacks = [
    { name: "Mon Parcours", cards: journeyCards, icon: "🚀" },
    { name: "Compétences", cards: skillsCards, icon: "💡" },
    { name: "Formation", cards: schoolCards, icon: "🎓" }
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
    if (stackIndex === currentStackIndex || isStackTransitioning) return;
    
    setIsStackTransitioning(true);
    
    // Fade out current stack
    setTimeout(() => {
      setCurrentStackIndex(stackIndex);
      setCurrentCardIndex(0);
      
      // Fade in new stack
      setTimeout(() => {
        setIsStackTransitioning(false);
      }, 150);
    }, 150);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné par la création d&apos;applications innovantes, 
            toujours en quête de nouveaux défis techniques.
          </p>
        </div>

        {/* Card Stacks */}
        <div className="mb-32">
          {/* Stack Navigation - Separated container */}
          <div className="mb-4">
            <StackNavigation
              cardStacks={cardStacks}
              currentStackIndex={currentStackIndex}
              onSelectStack={selectStack}
            />
          </div>

          {/* Card Stack Display - Separated container */}
          <div 
            className={`transition-all duration-300 ease-in-out ${
              isStackTransitioning 
                ? 'opacity-0 transform scale-95' 
                : 'opacity-100 transform scale-100'
            }`}
          >
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
        </div>

        {/* Personal Touch */}
        <div className="text-center mb-16">
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