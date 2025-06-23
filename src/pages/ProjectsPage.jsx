import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Google Gemini Clone",
      description: "A responsive web app that emulates the UI and features of Google Gemini, focusing on polished design and seamless interaction.",
      imageUrl: "gemini.png",
      projectUrl: "https://chatbot-vert-psi.vercel.app/",
      codeUrl: "https://github.com/suraj-shrivastav/chatbot"
    },
    {
      id: 2,
      title: "Zerodha Clone",
      description: "A frontend replica of the Zerodha trading platform.",
      imageUrl: "zerodha.png",
      projectUrl: "https://frontend-opal-eta-40.vercel.app/",
      codeUrl: "https://github.com/suraj-shrivastav/frontend"
    },
    {
      id: 3,
      title: "Listing Site",
      description: "This is a simple property listing site that allows users to list their hotels.",
      imageUrl: "listing.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/StaySpot"
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: "A lightweight tool to track personal expenses, visualize spending, and manage categories in real-time.",
      imageUrl: "expense-tracker.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/money-tracker"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A chat app built with WebSockets, supporting instant messaging, group chats, and user presence indicators.",
      imageUrl: "chat.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/chat-app"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A personal portfolio built with React to showcase projects, skills, and contact information with a modern UI.",
      imageUrl: "portfolio.png",
      projectUrl: "#",
      codeUrl: "https://github.com/suraj-shrivastav/"
    },
    {
      id: 7,
      title: "Conference Website",
      description: "A modern and responsive conference website built with Svelte, featuring detailed information about the event, speakers, topics, schedule, and more.",
      imageUrl: "conference.png",
      projectUrl: "https://technext-one.vercel.app/",
      codeUrl: "https://github.com/suraj-shrivastav/conference"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-slate-900 to-black relative overflow-hidden py-20 text-gray-100">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 200, 200, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 200, 200, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-pan 90s linear infinite'
        }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              backgroundColor: `rgba(100, 255, 218, ${0.4 + Math.random() * 0.4})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${7 + Math.random() * 5}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 7}s`,
            }}
          ></div>
        ))}
      </div>

      <div className={`relative z-10 container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-12 text-center leading-tight">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              codeUrl={project.codeUrl}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes grid-pan {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectsPage;
