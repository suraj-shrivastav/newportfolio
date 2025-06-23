import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import SocialPopup from '../components/SocialPopup';

function HomePage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen font-inter bg-gradient-to-br from-slate-900 to-black relative overflow-hidden text-gray-100">
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

            <div className="relative z-10 container mx-auto px-6 py-20 min-h-[80vh] flex items-center justify-center">
                <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-6xl">
                    <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                        <div className="relative">
                            <h1
                                className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 flex items-center justify-start"
                            >
                                FULLSTACK DEVELOPER
                            </h1>
                        </div>

                        <div className="w-40 h-2 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full shadow-lg shadow-sky-500/30 animate-pulse-subtle"></div>

                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 tracking-wide leading-tight">
                                <span className="text-gray-300">Building Tomorrow's Web</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500">
                                    One Line of Code at a Time.
                                </span>
                            </h2>

                            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                                I specialize in crafting high-performance, user-centric web applications with a focus on
                                <span className="text-emerald-300 font-semibold"> modern MERN stack solutions</span> and
                                <span className="text-indigo-300 font-semibold"> elegant user experiences</span>.
                                Let's innovate together.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-8">
                            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'GitHub', 'VSCode', 'MySQL', "Python"].map((tech, index) => (
                                <div
                                    key={tech}
                                    className="px-4 py-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-teal-700/40 rounded-full text-sm text-teal-200 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-teal-500/20"
                                    style={{
                                        animation: `fadeInUp 0.7s ease-out ${index * 0.08}s both`
                                    }}
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative group w-full max-w-md mx-auto rotate-3">
                            <div className="absolute inset-0 z-0 opacity-8" style={{
                                backgroundSize: '50px 50px'
                            }}></div>

                            <img
                                src="suraj.png"
                                alt="Developer Profile"
                                className="w-full h-full object-cover "
                            />
                        </div>

                        <div className="absolute -top-6 -right-6 bg-teal-900/90 bg-transparent rounded-lg p-3 border border-teal-600/50 text-xs font-mono text-teal-200 animate-float-subtle-1 -rotate-6">
                            {'<Component />'}
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-indigo-900/90 bg-transparent rounded-lg p-3 border border-indigo-600/50 text-xs font-mono text-indigo-200 animate-float-subtle-2 rotate-6" style={{ animationDelay: '1.2s' }}>
                            {'{} data = fetch()'}
                        </div>
                        <div className="text-7xl absolute -bottom-6 -right-6 bg-gray-900/90 rounded-lg p-3 border-2 border-r-4 bg-transparent font-bold text-indigo-200 animate-float-subtle-2 rotate-12" style={{ animationDelay: '1.2s' }}>
                            {'</>'}
                        </div>
                    </div>
                </div>
                <div>
                    <SocialPopup />
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

        @keyframes animate-float-subtle-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(5px); }
        }

        @keyframes animate-float-subtle-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(8px) translateX(-5px); }
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

export default HomePage;
