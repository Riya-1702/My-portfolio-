import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const timelineItems = [
    {
      type: 'education',
      title: '12th Grade',
      institution: 'St. Francis Sr. Sec. School',
      year: '2022',
      description: 'Completed higher secondary education with focus on Science and Mathematics.',
      side: 'left'
    },
    {
      type: 'education',
      title: 'B.Tech Computer Science & AI',
      institution: 'Jaipur Engineering College and Research Centre (JECRC Foundation)',
      year: '2023 - 2027',
      description: 'Pursuing Bachelor\'s degree in Computer Science with specialization in Artificial Intelligence.',
      side: 'left'
    },
    {
      type: 'experience',
      title: 'Volunteer Educator',
      institution: 'Zarurat (Social Club)',
      year: '2023 - Present',
      description: 'Teaching underprivileged children and contributing to community development through education.',
      side: 'right'
    },
    {
      type: 'experience',
      title: 'DevOps & ML Intern',
      institution: 'Linux World Informatics Pvt. Ltd.',
      year: '2025',
      description: 'Working on cutting-edge AI, Machine Learning, DevOps, and automation projects.',
      side: 'right'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-12 text-center">
        Education & Experience
      </h2>
      
      <div ref={elementRef} className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
        {/* Timeline items */}
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <div key={item.title} className="flex flex-col items-center w-full">
              {/* Content */}
              <div className="w-full flex justify-center">
                <div 
                  className={`bg-white p-6 rounded-xl shadow-thin-black-neon border border-black transition-all duration-700 ease-out hover:opacity-100 hover:shadow-thin-black-neon-hover hover:transform hover:-translate-y-1 animate-border-pulse-black ${
                    isVisible ? 'opacity-70 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms`, maxWidth: '420px' }}
                >
                  <div className="flex items-center mb-2 justify-center">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-green-500 mr-2" />
                    )}
                    <span className="text-sm font-medium text-slate-500">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-2 text-center">{item.institution}</p>
                  <p className="text-slate-500 text-sm text-center">{item.description}</p>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="flex justify-center mt-2 mb-2">
                <div 
                  className={`w-4 h-4 rounded-full bg-white border-4 ${
                    item.type === 'education' ? 'border-blue-400' : 'border-green-400'
                  } z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;