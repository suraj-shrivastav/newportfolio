import React, { useState, useEffect } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://getform.io/f/agdppmqb", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Enter your full name',
      icon: User,
      required: true
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email address',
      icon: Mail,
      required: true
    }
  ];

  return (
    <>
      <div className="min-h-screen font-inter bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden py-20 text-gray-100 flex items-center justify-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 animate-grid-pan" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 200, 200, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 200, 200, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-particle-float"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                backgroundColor: `rgba(100, 255, 218, ${0.4 + Math.random() * 0.4})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${7 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 7}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className={`relative z-10 p-8 md:p-12 lg:p-16 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 max-w-4xl mx-auto w-full transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Connect</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm here to help with your next project. Drop me a message and let's create something amazing together.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full md:w-3/4 lg:w-2/3 space-y-6"
            >
              {/* Input Fields */}
              {inputFields.map(({ type, name, placeholder, icon: Icon, required }) => (
                <div key={name} className="relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-400 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-slate-400 hover:border-gray-600"
                  />
                </div>
              ))}

              {/* Message Textarea */}
              <div className="relative group">
                <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-emerald-400 transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Tell me about your project or idea..."
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder-slate-400 resize-y hover:border-gray-600"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mx-auto mt-8"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className={`w-5 h-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        .animate-grid-pan {
          animation: grid-pan 90s linear infinite;
        }

        .animate-particle-float {
          animation: particle-float 1s ease-in-out infinite alternate;
        }

        @keyframes grid-pan {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
      `}</style>
    </>
  );
};

export default ContactPage;
