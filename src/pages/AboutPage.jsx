import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-slate-900 to-black relative overflow-hidden flex items-center justify-center py-20 px-6 text-gray-100">

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

      <div className={`relative z-10 p-8 md:p-12 lg:p-16 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 max-w-4xl mx-auto
        transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>


        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-center leading-tight">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Me</span>
        </h1>

        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
          Hello! I'm <span className="text-gray-50 font-semibold">Suraj Shrivastav</span>, a <span className="text-emerald-300 font-semibold">full-stack developer</span> passionate about building dynamic web applications. My expertise includes the <span className="text-emerald-300 font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js), where I focus on creating robust and user-friendly solutions.
        </p>

        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
          I believe in <span className="text-emerald-300 font-semibold">continuous learning and collaboration</span> to drive innovation. Let's connect and explore how we can turn your ideas into reality!
        </p>

        <div className="text-center">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-indigo-700 to-blue-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 border-2 border-transparent hover:border-emerald-400">
            <span className="relative z-10 flex items-center gap-3">
              Connect with Me
              <Mail className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
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

        /* Using the same pulse effect for the underline, though not present on this page by default */
        @keyframes animate-pulse-subtle {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default AboutPage;
