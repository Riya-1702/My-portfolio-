import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Riya-1702', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/riya-sharma-638a6b217', label: 'LinkedIn' },
    { icon: MessageCircle, url: 'https://wa.me/9782981204', label: 'WhatsApp' },
    { icon: Mail, url: 'mailto:riyasharmaabcd3342@gmail.com', label: 'Email' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-12 text-center">
        Get In Touch
      </h2>
      
      <div ref={elementRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform -translate-x-8'
          }`}
        >
          <div className="bg-transparent rounded-xl shadow-lg p-8 border border-black shadow-neon-black hover:shadow-neon-black-hover animate-border-pulse-black transition-all duration-300">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Links */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform translate-x-8'
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border border-black shadow-neon-black hover:shadow-neon-black-hover animate-border-pulse-black transition-all duration-300">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Connect with me
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all duration-300 perspective-1000 flip-y hover:flip-y border border-transparent hover:border-black hover:shadow-neon-black ${isVisible ? 'animate-[flip_0.6s_ease-out_forwards]' : ''}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <span className="flip-y hover:flip-y">
                    <Icon size={24} className="text-slate-700 mb-2" />
                    </span>
                    <span className="text-sm text-slate-600">{link.label}</span>
                  </a>
                );
              })}
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-black shadow-neon-black hover:shadow-neon-black-hover animate-border-pulse-black transition-all duration-300">
              <p className="text-slate-600 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation. Feel free to reach out through any of the channels above!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;