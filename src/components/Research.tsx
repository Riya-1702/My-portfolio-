import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

// Research paper files paths
const dnaStoragePdf = '/ultimate-dna-storage.pdf';
const chatbotPdf = '/USABILITY_OF_CHATBOT[1].pdf';
const cybersecurityPdf = '/cyberserurity-and-vulerability.pdf';
const visionBasedPdf = '/IJSCI02072025013.pdf';

const Research: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const papers = [
    {
      title: 'Navigating The Modern Development Cycle: A Comprehensive Reviewof Devops Practices',
      journal: 'International Journal of Recent Research and Review (IJRRR)',
      year: '2025',
      "description": "A comprehensive review of modern DevOps practices, including key principles, tools, and methodologies that enhance collaboration, automation, and continuous delivery within the software development lifecycle.",
      url: '/ijrrr-Special-Issue-2-2025-paper38.pdf'
    },
    {
      title: 'DNA-Ultimate Storage Device',
      journal: 'Journal of Analysis and Computation (JAC)',
      year: '2024',
      description: 'Research on using DNA as a high-density, long-term data storage solution with unprecedented capacity and durability.',
      url: dnaStoragePdf
    },
    {
      title: 'Cybersecurity and Vulnerability',
      journal: '19th Biyani International Conference (BICON 2024)',
      year: '2024',
      description: 'Comprehensive study on emerging cybersecurity threats and vulnerability assessment methodologies for modern information systems.',
      url: cybersecurityPdf
    },
    {
      title: 'Usability of Chatbot',
      journal: 'Pratibodh',
      year: '2024',
      description: 'Analysis of chatbot usability factors and their impact on user experience and engagement across different domains.',
      url: chatbotPdf
    },
    
    {
      title: 'Vision-Based Vehicle Detection in Adverse Weather',
      journal: 'IEEE Transactions on Intelligent Transportation Systems',
      year: '2024',
      description: 'A hybrid approach using Dark Channel Prior and Lightweight CNNs for enhanced driver safety in challenging weather conditions.',
      url: visionBasedPdf
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-12 text-center">
        Research Publications
      </h2>
      
      <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers.map((paper, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-neon-gray p-6 transition-all duration-700 ease-out hover:shadow-thin-black-neon-hover hover:-translate-y-2 border border-black shadow-thin-black-neon animate-border-pulse-black ${
              isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="mb-4">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {paper.year} • {paper.journal}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-tight">
              {paper.title}
            </h3>
            
            <p className="text-slate-600 mb-4 leading-relaxed text-sm">
              {paper.description}
            </p>
            
            <button
              onClick={() => {
                if (paper.url) {
                  window.open(paper.url, '_blank');
                }
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors duration-300 w-fit inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              View Paper
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;