import React, { useEffect, useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';

function ProjectCard({ title, description, imageUrl, projectUrl, codeUrl, delay }) {
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-lg flex flex-col h-full
        transform transition-all duration-300 ease-out hover:scale-101 hover:shadow-xl hover:border-emerald-500/50 
        ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x250/222222/bbbbbb?text=Image+Not+Found";
          }}
        />
      </div>

      <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">
        {title}
      </h3>
      <p className="text-slate-300 text-base flex-grow mb-6">
        {description}
      </p>

      <div className="mt-auto flex justify-between gap-4 flex-wrap">
        {projectUrl && (
          <a
            href={projectUrl}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-700 to-blue-700 text-white font-semibold rounded-full shadow-md
              transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-indigo-500/30"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-700 to-blue-700 text-white font-semibold rounded-full shadow-md
              transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-indigo-500/30"
          >
            View Code
            <Code className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
