import React, { useState, useEffect } from 'react';
import { Menu, Download, Linkedin, Github, Mail, X } from 'lucide-react';

const SocialPopup = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Placeholder URL for your resume PDF. Replace with your actual resume URL.
  const resumeUrl = 'public/Suraj_Shrivastav_Resume.pdf';

  useEffect(() => {
    // Trigger initial fade-in for the main popup container
    setIsVisible(true);
  }, []);

  // Define social links as an array of objects for easier mapping and styling
  const socialLinks = [
    {
      href: "mailto:surajshrivastav07@gmail.com", // Replace with your email
      icon: Mail,
      title: "Email Me",
      color: "from-teal-500 to-cyan-500",
      glow: "shadow-teal-500/50",
    },
    {
      href: resumeUrl,
      icon: Download,
      title: "Download Resume",
      color: "from-emerald-500 to-teal-500",
      glow: "shadow-emerald-500/50",
      download: "Suraj_Shrivastav_Resume.pdf"
    },
    {
      href: "https://github.com/suraj-shrivastav", // Replace with your GitHub URL
      icon: Github,
      title: "GitHub Profile",
      color: "from-gray-700 to-gray-900",
      glow: "shadow-gray-600/50",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      href: "https://www.linkedin.com/in/suraj-shrivastav/", // Replace with your LinkedIn URL
      icon: Linkedin,
      title: "LinkedIn Profile",
      color: "from-blue-600 to-indigo-700",
      glow: "shadow-blue-500/50",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  // Radius for the circular arrangement of social links - Increased for more gap
  const circleRadius = 130; // Distance from the center of the main button
  // Angle increment for each social link for a 90-degree fan (top-right quadrant)
  const angleIncrement = 90 / (socialLinks.length - 1); // Distribute links over 90 degrees

  return (
    <>
      {/* Backdrop blur when popup is expanded */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isHovered ? 'backdrop-blur-[1px] bg-black/10' : 'pointer-events-none'
        }`}
      />

      {/* Main Social Popup Container - Adjusted to be fixed at top-right */}
      <div
        className={`fixed bottom-8 left-8 z-50 transition-all duration-700 transform origin-top-right ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background glow behind the main button */}
        <div className={`absolute -inset-4 bg-gradient-to-t from-sky-500/20 to-emerald-500/20 rounded-full blur-3xl transition-all duration-500 ${
          isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
        }`} />

        {/* Main circular button group (now the reference for absolute positioning) */}
        <div className="relative w-20 h-20 group"> {/* Set size for relative positioning */}
          {/* Rotating iridescent border */}
          <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 via-sky-500 via-blue-500 to-indigo-500 rounded-full p-0.5 transition-all duration-500 ${
            isHovered ? 'animate-spin' : ''
          }`}>
            <div className="w-full h-full bg-gray-900 rounded-full" />
          </div>

          {/* Main button with gradient, shadow, and hover effects */}
          <button className={`relative w-full h-full bg-gradient-to-br from-emerald-600 via-sky-600 to-blue-600 rounded-full
            shadow-2xl flex items-center justify-center text-white transition-all duration-500
            hover:scale-110 hover:shadow-sky-500/50 group-hover:shadow-3xl
            ${isHovered ? 'rotate-180' : 'rotate-0'}
            border-2 border-white/20 backdrop-blur-sm`}>

            {/* Pulsating glow effect for the main button */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-full blur-xl opacity-50 animate-pulse" />

            {/* Icon that changes on hover */}
            <div className="relative z-10 transition-all duration-300">
              {isHovered ? (
                <X size={32} className="drop-shadow-lg" /> // 'X' icon when hovered
              ) : (
                <Menu size={32} className="drop-shadow-lg" /> // 'Menu' icon when not hovered
              )}
            </div>

            {/* Ripple effect on hover (simulated with scale and opacity) */}
            <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-1000 ${
              isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`} />
          </button>

          {/* Social options - positioned absolutely around the main button */}
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            // Calculate position for each link for top-right fan-out (angles from 0 to 90 degrees)
            const angle = (index * angleIncrement); // Angle from 0 (right) to 90 (up)
            const xOffsetFromCenter = circleRadius * Math.cos(angle * (Math.PI / 180));
            const yOffsetFromCenter = circleRadius * Math.sin(angle * (Math.PI / 180));

            // Assuming social link is 40x40px (p-4 effectively gives this size, half is 20px)
            // Main button is 80x80px, center at 40px, 40px
            const socialLinkSize = 40; // Approximate size of the social link button
            const mainButtonCenter = 40; // Half of main button's 80px width/height

            return (
              <a
                key={index}
                href={link.href}
                download={link.download}
                target={link.target}
                rel={link.rel}
                className={`absolute p-4 rounded-2xl shadow-xl ${link.glow}
                  hover:scale-110 hover:rotate-3 transition-all duration-300 transform origin-center
                  border border-white/20 backdrop-blur-sm overflow-hidden whitespace-nowrap
                  ${isHovered ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-0 pointer-events-none'}
                  bg-gradient-to-br ${link.color}`} // Apply color gradient here
                style={{
                  // Position relative to the main button's top-left corner (0,0)
                  // Then offset from its center (40,40), considering social link's own size
                  top: `calc(${mainButtonCenter - socialLinkSize / 2}px - ${yOffsetFromCenter}px)`,
                  left: `calc(${mainButtonCenter - socialLinkSize / 2}px + ${xOffsetFromCenter}px)`,
                  transitionDelay: isHovered ? `${index * 50}ms` : `${(socialLinks.length - 1 - index) * 50}ms`, // Stagger in, stagger out
                  zIndex: 40,
                }}
                title={link.title}
              >
                {/* Small glowing dot indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />

                {/* Icon with subtle glow effect on hover */}
                <div className="relative">
                  <IconComponent
                    size={24}
                    className="text-white drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Tooltip for each social option */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg
                  opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0
                  border border-gray-700/50 shadow-xl whitespace-nowrap z-10">
                  {link.title}
                  {/* Tooltip arrow */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-gray-700/50" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Status indicator (e.g., "Available for work") - now visible on hover */}
        <div className={`mt-4 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' // Reversed logic
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm font-medium">Available for work</span>
          </div>
        </div>
      </div>

      {/* Global styles and keyframes for the popup */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        @keyframes pulse-main-btn {
          0%, 100% {
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.7); /* Emerald glow */
          }
          50% {
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.7); /* Blue glow */
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
    </>
  );
};

export default SocialPopup;
