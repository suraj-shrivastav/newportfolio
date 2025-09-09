import React, { useEffect, useState } from 'react';
import { Mail, Code, Sparkles, ArrowRight } from 'lucide-react';

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden flex items-center justify-center py-20 px-6 text-gray-100">
      
      {/* Cursor glow effect */}
      <div 
        className="absolute pointer-events-none z-0 rounded-full opacity-20 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Enhanced grid background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-pan 120s linear infinite'
        }}></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-sm"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: i % 3 === 0 
                ? `rgba(16, 185, 129, ${0.3 + Math.random() * 0.4})` 
                : i % 3 === 1 
                ? `rgba(59, 130, 246, ${0.3 + Math.random() * 0.4})`
                : `rgba(168, 85, 247, ${0.3 + Math.random() * 0.4})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${8 + Math.random() * 6}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-emerald-400/20 rounded-full"
              style={{
                width: `${400 + i * 200}px`,
                height: `${400 + i * 200}px`,
                left: `${-200 - i * 100}px`,
                top: `${-200 - i * 100}px`,
                animation: `orbit-${i} ${20 + i * 10}s linear infinite`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      <div className={`relative z-10 p-10 md:p-14 lg:p-20 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/60 max-w-5xl mx-auto
        transition-all duration-1200 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 100px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
        }}>

        {/* Decorative corner elements */}
        <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-emerald-400 rounded-tl-lg opacity-60"></div>
        <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-emerald-400 rounded-tr-lg opacity-60"></div>
        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-emerald-400 rounded-bl-lg opacity-60"></div>
        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-emerald-400 rounded-br-lg opacity-60"></div>

        {/* Header with icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl shadow-lg animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 text-center leading-none tracking-tight">
            About{' '}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 animate-gradient-shift">
                Me
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 rounded-full animate-pulse-subtle"></div>
            </span>
          </h1>
        </div>

        {/* Content with enhanced styling */}
        <div className="space-y-8 mb-12">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-transparent rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed pl-6">
              Hello! I'm <span className="relative text-white font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Suraj Shrivastav</span>, 
              a <span className="relative group cursor-default">
                <span className="text-emerald-300 font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">full-stack developer</span>
                <Code className="inline w-5 h-5 ml-1 text-emerald-400 group-hover:animate-bounce" />
              </span> passionate about building dynamic web applications. 
              My expertise includes the <span className="text-sky-300 font-bold">MERN stack</span> (MongoDB, Express.js, React, Node.js), 
              where I focus on creating robust and user-friendly solutions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-sky-400 to-transparent rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed pl-6">
              I believe in <span className="text-purple-300 font-bold">continuous learning and collaboration</span> to drive innovation. 
              Let's connect and explore how we can turn your ideas into reality!
            </p>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-sky-500 text-white font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/40 border-2 border-transparent hover:border-white/20">
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Mail className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              Connect with Me
              <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <button className="group relative px-12 py-5 bg-transparent text-emerald-400 font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 hover:shadow-lg hover:shadow-emerald-400/30">
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Code className="w-6 h-6 transition-all duration-300 group-hover:rotate-180" />
              View Projects
            </span>
          </button>
        </div> */}

        {/* Skills badges */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600/50 hover:border-emerald-400/50 transition-all duration-300 cursor-default hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? `skill-fade-in 0.6s ease-out forwards` : 'none'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes grid-pan {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        @keyframes particle-float {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-15px) translateX(10px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-5px) translateX(-5px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-20px) translateX(8px) rotate(270deg) scale(1.05); 
          }
        }

        @keyframes orbit-0 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes animate-pulse-subtle {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
          }
          50% {
            opacity: 0.7;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.8);
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes skill-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default AboutPage;