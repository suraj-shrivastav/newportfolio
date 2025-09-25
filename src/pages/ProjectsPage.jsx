import React, { useState, useEffect } from 'react';

const techColors = {
  ReactJs: "bg-sky-500/20 text-sky-400",
  "HTML/CSS": "bg-orange-500/20 text-orange-400",
  JavaScript: "bg-yellow-500/20 text-yellow-400",
  TailwindCSS: "bg-cyan-500/20 text-cyan-400",
  "Bootstrap CSS": "bg-purple-500/20 text-purple-400",
  MongoDB: "bg-green-500/20 text-green-400",
  MySQL: "bg-blue-500/20 text-blue-400",
  Socketio: "bg-gray-500/20 text-gray-300",
  Svelte: "bg-red-500/20 text-red-400",
  GeminiAPI: "bg-pink-500/20 text-pink-400",
};

const ProjectCard = ({ title, description, imageUrl, projectUrl, codeUrl, stack = [], delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105"
      style={{
        animationDelay: `${delay}s`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image container with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Action buttons overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {projectUrl !== "#" && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Live Demo
            </a>
          )}
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech, idx) => {
            const colorClasses = techColors[tech] || "bg-emerald-500/20 text-emerald-400";
            return (
              <span
                key={idx}
                className={`px-2 py-1 text-xs rounded-full ${colorClasses}`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};



function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      id: 1,
      title: "Google Gemini Clone",
      description: "A responsive web app that emulates the UI and features of Google Gemini, focusing on polished design and seamless interaction.",
      imageUrl: "gemini.png",
      projectUrl: "https://chatbot-vert-psi.vercel.app/",
      codeUrl: "https://github.com/suraj-shrivastav/chatbot",
      stack: ["GeminiAPI", "ReactJs", "HTML/CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Zerodha Clone",
      description: "A frontend replica of the Zerodha trading platform with modern UI/UX principles.",
      imageUrl: "zerodha.png",
      projectUrl: "https://frontend-opal-eta-40.vercel.app/",
      codeUrl: "https://github.com/suraj-shrivastav/frontend",
      stack: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Listing Site",
      description: "A modern property listing platform that allows users to list their hotels with beautiful imagery.",
      imageUrl: "listing.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/StaySpot",
      stack: ["ReactJs", "Bootstrap CSS", "HTML/CSS"]
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: "A lightweight tool to track personal expenses, visualize spending patterns, and manage categories in real-time.",
      imageUrl: "expense-tracker.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/money-tracker",
      stack: ["ReactJs", "TailwindCSS", "JavaScript", "MongoDB"]
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A modern chat app built with WebSockets, supporting instant messaging, group chats, and user presence indicators.",
      imageUrl: "chat.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/chat-app",
      stack: ["ReactJs", "Socket.io", "TailwindCSS", "JavaScript", "MongoDB"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A personal portfolio built with React to showcase projects, skills, and contact information with a modern UI.",
      imageUrl: "portfolio.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/",
      stack: ["ReactJs", "TailwindCSS", "JavaScript"]
    },
    {
      id: 7,
      title: "Conference Website",
      description: "A modern and responsive conference website built with Svelte, featuring detailed information about the event, speakers, and schedule.",
      imageUrl: "conference.png",
      projectUrl: "https://technext-one.vercel.app/",
      codeUrl: "https://github.com/suraj-shrivastav/conference",
      stack: ["Svelte"]
    },
    {
      id: 8,
      title: "Rating System",
      description: "A Full Stack Web Application that allows users to register, submit ratings for stores, and manage operations through role-based access control.",
      imageUrl: "roxiler.png",
      projectUrl: "https://github.com/suraj-shrivastav/Roxiler",
      codeUrl: "https://github.com/suraj-shrivastav/Roxiler",
      stack: ["ReactJs", "MySQL", "TailwindCSS", "JavaScript"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen font-inter relative overflow-hidden">
      {/* Dynamic background with mouse-following gradient */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(16, 185, 129, 0.15), 
              rgba(14, 165, 233, 0.1), 
              transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #000000 100%)
          `
        }}
      ></div>

      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-drift 60s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-sm"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(45deg, 
                rgba(16, 185, 129, ${0.4 + Math.random() * 0.6}), 
                rgba(14, 165, 233, ${0.4 + Math.random() * 0.6})
              )`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-orb ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight relative">
              My{' '}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 animate-pulse">
                  Projects
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 blur-lg -z-10"></div>
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mb-8 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore my collection of innovative web applications and creative solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              codeUrl={project.codeUrl}
              delay={index * 0.1}
              stack={project.stack}
            />
          ))}
        </div>

        {/* Bottom call-to-action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-400 font-medium hover:from-emerald-500/30 hover:to-sky-500/30 transition-all duration-300 cursor-pointer">
            <span className="mr-2">✨</span>
            More projects coming soon
            <span className="ml-2">🚀</span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes float-orb {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: translate(-20px, -30px) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #0ea5e9);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0284c7);
        }
      `}</style>
    </div>
  );
}

export default ProjectsPage;