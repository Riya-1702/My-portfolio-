import React, { useState, useEffect } from 'react';
import { Home, User, Wrench, FolderOpen, FileText, Award, GraduationCap, Mail, BookOpen } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Wrench, label: 'Skills' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'research', icon: FileText, label: 'Research' },
    { id: 'blog', icon: BookOpen, label: 'Blog' },
    { id: 'certificates', icon: Award, label: 'Certificates' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-3">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative p-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-slate-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                  title={item.label}
                >
                  <Icon size={20} />
                  <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;