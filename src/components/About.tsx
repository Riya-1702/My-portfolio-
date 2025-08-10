import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');
  const { elementRef, isVisible } = useScrollAnimation();

  const story = `I'm Riya Sharma, a B.Tech CSE (AI) student at JECRC, passionate about AI innovation and knowledge-sharing to build a smarter, kinder world.

As an intern at Linux World Informatics Pvt. Ltd., I'm hands-on with AI, ML, DevOps, and automation, streamlining processes and developing intelligent systems—like AI tutors and optimized workflows with Docker and Jenkins—all aimed at empowering others to learn and grow.
Beyond tech, I mentor at Zarurat, teaching underprivileged children, and I'm a published researcher always seeking new insights. I also find balance and inspiration in art and design. I strive to be more than a developer; I'm a dedicated problem-solver, a supportive guide, and a creator focused on meaningful impact.`;

  const highlights = [
    {
      title: 'AI & DevOps Architect',
      description: 'I bridge the gap between innovation and reliable delivery, expertly building and scaling intelligent systems using AI, ML, DevOps (Docker, Kubernetes, Jenkins, AWS).'
    },
    {
      title: 'Impact-Driven Educator',
      description: 'Passionate about knowledge-sharing, I mentor underprivileged children at Zarurat and develop tools like AI tutors to empower learning and growth.'
    },
    {
      title: 'Researcher & Creative Thinker',
      description: 'As a published researcher and artist, I bring a unique blend of analytical rigor and imaginative thinking to every challenge.'
    },
    {
      title: 'Problem-Solver & Positive Creator',
      description: 'More than just a developer, I focus on being a problem-solver and a guide, dedicated to making a tangible, positive impact through all my projects.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div
        ref={elementRef}
        className={`bg-transparent rounded-2xl shadow-thin-black-neon p-4 lg:p-6 transition-all duration-1000 ease-out border border-black hover:shadow-thin-black-neon-hover animate-border-pulse-black ${
          isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-full'
        }`}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8 text-center">
          About Me
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'story'
                  ? 'bg-white text-slate-800 border border-black shadow-thin-black-neon'
                  : 'text-slate-600 hover:text-slate-800 border border-transparent hover:border-black hover:shadow-thin-black-neon'
              }`}
            >
              My Story
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'highlights'
                  ? 'bg-white text-slate-800 border border-black shadow-thin-black-neon'
                  : 'text-slate-600 hover:text-slate-800 border border-transparent hover:border-black hover:shadow-thin-black-neon'
              }`}
            >
              Highlights
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-[400px]">
          {activeTab === 'story' && (
            <div className="animate-fadeIn">
              <div className="prose prose-lg prose-slate max-w-none">
                {story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'highlights' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl border border-black shadow-thin-black-neon hover:shadow-thin-black-neon-hover hover:bg-slate-100 transition-all duration-300 animate-border-pulse-black"
                >
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;