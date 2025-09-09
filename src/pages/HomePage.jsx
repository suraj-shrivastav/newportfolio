import React, { useState, useEffect } from 'react';
import { Code, Sparkles, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

function HomePage() {
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

    const FloatingCode = ({
        position,
        text,
        textSize = 'text-xs',
        fontWeight = 'font-mono',
        bgColor,
        borderColor,
        textColor,
        animation,
        rotation,
        delay = '0s',
        icon: Icon,
    }) => {
        return (
            <div
                className={`absolute ${position} ${bgColor} rounded-2xl p-4 border ${borderColor} ${textSize} ${fontWeight} ${textColor} ${animation} ${rotation} backdrop-blur-xl shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer group`}
                style={{ animationDelay: delay }}
            >
                <div className="flex items-center gap-2">
                    {Icon && <Icon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />}
                    <span className="group-hover:text-white transition-colors">{text}</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        );
    };

    const TechBadge = ({ tech, index }) => (
        <div
            className="relative px-5 py-3 bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl text-sm text-emerald-100 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:via-cyan-500/20 hover:to-blue-500/20 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-emerald-500/25 hover:border-emerald-400/40 group overflow-hidden"
            style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
            }}
        >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{tech}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </div>
    );

    return (
        <div className="min-h-screen font-inter bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden text-gray-100">
            {/* Cursor gradient effect */}
            <div
                className="fixed pointer-events-none z-0 opacity-20"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
                    left: 0,
                    top: 0,
                    width: '100vw',
                    height: '100vh',
                }}
            />

            {/* Enhanced grid background */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                        animation: 'grid-drift 120s linear infinite'
                    }}
                />
            </div>

            {/* Floating particles with improved animation */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full blur-sm"
                        style={{
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                            background: `linear-gradient(45deg, rgba(16, 185, 129, ${0.6 + Math.random() * 0.4}), rgba(59, 130, 246, ${0.4 + Math.random() * 0.4}))`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `particle-dance ${15 + Math.random() * 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-8 py-24 min-h-screen flex items-center justify-center">
                <div className="grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl">
                    {/* Left column - Content */}
                    <div className={`space-y-12 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'}`}>
                        <div className="relative">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 mb-8 animate-glow">
                                <Sparkles size={16} className="animate-pulse" />
                                <span>Available for Projects</span>
                            </div>

                            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-300 to-cyan-400 leading-none tracking-tight">
                                FULLSTACK
                                <br />
                                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text">
                                    DEVELOPER
                                </span>
                            </h1>
                        </div>

                        {/* Enhanced separator */}
                        <div className="relative w-48 h-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full animate-pulse-glow"></div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                                <span className="text-gray-100">Crafting Digital</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                                    Experiences
                                </span>
                                <span className="text-gray-100"> That Matter</span>
                            </h2>

                            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                                I transform complex ideas into elegant, scalable web applications using cutting-edge technologies.
                                Specializing in the <span className="text-emerald-300 font-semibold">MERN stack</span> with a passion for
                                <span className="text-cyan-300 font-semibold"> performance optimization</span> and
                                <span className="text-blue-300 font-semibold"> intuitive user interfaces</span>.
                            </p>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-2xl shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300">
                                    Let's Build Something Amazing
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Enhanced tech stack */}
                        <div className="space-y-6 pt-8">
                            <h3 className="text-lg font-semibold text-gray-300 flex items-center gap-2">
                                <Code size={20} />
                                Tech Stack & Tools
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS'].map((tech, index) => (
                                    <TechBadge key={tech} tech={tech} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right column - Interactive Code Display */}
                    <div className={`relative flex items-center justify-center min-h-[600px] transition-all duration-1200 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                        {/* Central code editor mockup */}
                        <div className="relative w-full max-w-md h-80 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl border border-gray-700/50 shadow-2xl backdrop-blur-xl overflow-hidden">
                            <div className="flex items-center gap-2 p-4 border-b border-gray-700/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-xs text-gray-400 ml-4">App.jsx</div>
                            </div>
                            <div className="p-6 font-mono text-sm space-y-2">
                                <div className="text-purple-400">import React from 'react';</div>
                                <div className="text-blue-400">function <span className="text-yellow-300">App</span>() </div>
                                <div className="ml-4 text-gray-300">return (</div>
                                <div className="ml-8 text-emerald-400">&lt;div className="amazing"&gt;</div>
                                <div className="ml-12 text-cyan-300">&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                                <div className="ml-8 text-emerald-400">&lt;/div&gt;</div>
                                <div className="ml-4 text-gray-300">);</div>
                                <div className="text-blue-400"></div>
                                <div className="animate-pulse">|</div>
                            </div>
                        </div>

                        {/* Floating code elements */}
                        <FloatingCode
                            position="top-0 right-8"
                            text="useState()"
                            icon={Code}
                            bgColor="bg-emerald-900/80"
                            borderColor="border-emerald-500/50"
                            textColor="text-emerald-200"
                            animation="animate-float-1"
                            rotation="-rotate-3"
                        />

                        <FloatingCode
                            position="bottom-4 left-0"
                            text="async/await"
                            icon={Code}
                            bgColor="bg-blue-900/80"
                            borderColor="border-blue-500/50"
                            textColor="text-blue-200"
                            animation="animate-float-2"
                            rotation="rotate-3"
                            delay="0.8s"
                        />

                        <FloatingCode
                            position="top-20 left-8"
                            text="{ API }"
                            bgColor="bg-purple-900/80"
                            borderColor="border-purple-500/50"
                            textColor="text-purple-200"
                            animation="animate-float-3"
                            rotation="-rotate-6"
                            delay="1.5s"
                        />

                        <FloatingCode
                            position="bottom-16 right-0"
                            text="</>"
                            textSize="text-4xl"
                            fontWeight="font-bold"
                            bgColor="bg-gray-800/80"
                            borderColor="border-gray-500/50"
                            textColor="text-cyan-300"
                            animation="animate-float-1"
                            rotation="rotate-12"
                            delay="2s"
                        />
                    </div>
                </div>

                {/* Social links */}
                <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-20">
                    {[
                        { icon: Github, color: 'hover:text-gray-300', link: "https://github.com/suraj-shrivastav" },
                        { icon: Linkedin, color: 'hover:text-blue-400', link: "https://www.linkedin.com/in/suraj-shrivastav/" },
                        { icon: Mail, color: 'hover:text-emerald-400', link: "mailto:surajshrivastav07@gmail.com" }
                    ].map(({ icon: Icon, color, link }, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (link.startsWith('mailto:')) {
                                    window.location.href = link;
                                } else {
                                    window.open(link, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            className={`p-3 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}
                        >
                            <Icon size={20} />
                        </button>
                    ))}
                </div>

            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

                body {
                    font-family: 'Inter', sans-serif;
                }

                @keyframes grid-drift {
                    0% { background-position: 0 0; }
                    100% { background-position: 80px 80px; }
                }

                @keyframes particle-dance {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(-20px, -20px) rotate(90deg); }
                    50% { transform: translate(20px, -10px) rotate(180deg); }
                    75% { transform: translate(-10px, 20px) rotate(270deg); }
                }

                @keyframes animate-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
                    50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.6), 0 0 40px rgba(59, 130, 246, 0.3); }
                }

                @keyframes animate-pulse-glow {
                    0%, 100% { opacity: 1; transform: scaleX(1); }
                    50% { opacity: 0.7; transform: scaleX(1.05); }
                }

                @keyframes animate-float-1 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(-3deg); }
                    33% { transform: translateY(-12px) translateX(8px) rotate(0deg); }
                    66% { transform: translateY(-6px) translateX(-4px) rotate(-6deg); }
                }

                @keyframes animate-float-2 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(3deg); }
                    33% { transform: translateY(10px) translateX(-6px) rotate(6deg); }
                    66% { transform: translateY(-8px) translateX(8px) rotate(0deg); }
                }

                @keyframes animate-float-3 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(-6deg); }
                    50% { transform: translateY(-15px) translateX(10px) rotate(-3deg); }
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
            `}</style>
        </div>
    );
}

export default HomePage;