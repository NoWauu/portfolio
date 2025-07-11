'use client';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "pulsar",
      title: "Système d'anti-cheat - Pulsar",
      description: "Système complet de détection de tricheurs sur Minecraft à partir de calculs statistiques centralisés.",
      tech: ["Rust", "gRPC", "zmq", "Minecraft", "Java", "Spigot", "Maven", "PostgreSQL", "TimescaleDB", "OpenTelemetry", "Grafana"],
      status: "planned"
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description: "Site web personnel développé avec Next.js, TypeScript et Tailwind CSS. Présente mes compétences, projets et parcours professionnel avec des animations interactives et un design moderne.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Git", "Vercel"],
      githubUrl: "https://github.com/NoWauu/portfolio",
      status: "in-progress"
    },
    {
      id: "website-touchthestars",
      title: "Site web - Toucher les étoiles",
      description: "Site web professionnel en adéquation avec la demande client, validation et création des maquettes par une graphiste et une UI/UX designer.",
      tech: ["Next.js", "Tailwind", "Shadcn"],
      status: "in-progress"
    },
    
    {
      id: "vlib",
      title: "Vlib - Gestion et réservation de vélib'",
      description: "Application web et mobile permettant de regarder les disponibilités des stations vélib' sur une intégration Google Maps, d'ajouter des stations en favoris et de simuler une réservation. Projet semestriel pour le S3 et S4 du BUT Informatique",
      tech: ["Next.js", "Tailwind", "Django", "RestAPI", "CI", "Git", "Google Maps API", "Flutter", "Dart", "PostgreSQL"],
      githubUrl: "https://github.com/NoWauu/V-lib",
      status: "completed"
    },
    {
      id: "arqion-plugins",
      title: "Liste de plugins pour Arqion",
      description: "Une liste des différents plugins réalisés pour l'ancien serveur Minecraft Arqion. Plugins ajoutant des fonctionnalités uniques, comme des récompenses aléatoires personnalisables.",
      tech: ["Minecraft", "Java", "Eclipse", "Spigot", "YAML"],
      githubUrl: "https://github.com/NoWauu/Arqion-plugins",
      status: "completed"
    },
    {
      id: "weather-bot",
      title: "Bot Discord - Météo",
      description: "Bot discord simple permettant de récupérer la météo sur une ville spécifiée, ainsi que toutes les données associées (température, humidité, ...)",
      tech: ["JavaScript", "discord.js", "Discord"],
      githubUrl: "https://github.com/NoWauu/WeatherBot",
      status: "completed"
    }
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in-progress':
        return 'En cours';
      case 'planned':
        return 'Planifié';
      default:
        return 'Inconnu';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mes Projets
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez les projets sur lesquels j&apos;ai travaillé, 
            des applications web aux plugins Minecraft en passant par les APIs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies utilisées :</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm border"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Voir le site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}