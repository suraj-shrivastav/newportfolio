import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-slate-900 to-black relative overflow-hidden py-20 text-gray-100 flex items-center justify-center">
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

      <div className={`relative z-10 p-8 md:p-12 lg:p-16 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 max-w-4xl mx-auto w-full
        transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-center leading-tight">
          Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">Touch</span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 text-center max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className='flex justify-center items-center'>
          <form
            action="https://getform.io/f/agdppmqb"
            method='POST'
            className='flex flex-col w-full md:w-3/4 lg:w-2/3 space-y-6'
          >
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              className='p-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300 placeholder-slate-400'
            />
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              className='p-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300 placeholder-slate-400'
            />
            <textarea
              name="message"
              rows="6"
              placeholder='Enter your message'
              className='p-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300 placeholder-slate-400 resize-y'
            />
            <button className='group relative px-10 py-4 bg-gradient-to-r from-indigo-700 to-blue-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 border-2 border-transparent hover:border-emerald-400 mx-auto mt-6'>
              <span className="relative z-10 flex items-center gap-3">
                Send Message
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
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

        /* Note: fadeInUp is not directly used on this page, but kept for consistency if needed */
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
};

export default ContactPage;
