import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award } from 'lucide-react';

// Import certificate files
import certificateImage from './asset/2025-07-28 01.16.18.jpg';
import certificatePdf from './asset/INI25CS02S14740008504204239.pdf';

const Certificates: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const certificates = [
    {
      title: 'Programming Language C++',
      issuer: 'NPTEL',
      year: '2024',
      description: 'Certification for successful completion of the NPTEL course on Programming Language C++.',
      certificateFile: certificateImage
    },
    {
      title: 'Machine Learning using Python Programming',
      issuer: 'NPTEL',
      year: '2025',
      description: 'Certification for successful completion of the NPTEL course on Machine Learning using Python Programming.',
      certificateFile: certificatePdf
    },
    {
      title: 'AWS Certified DevOps Engineer',
      issuer: 'Amazon Web Services',
      year: '2024',
      description: 'Professional certification demonstrating expertise in provisioning, operating, and managing distributed application systems on AWS.'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      year: '2023',
      description: 'Comprehensive program covering supervised learning, unsupervised learning, and best practices in machine learning.'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      year: '2023',
      description: 'Certification validating skills in containerization, Docker ecosystem, and orchestration fundamentals.'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM (Coursera)',
      year: '2023',
      description: 'Professional certificate in Python programming for data analysis, visualization, and machine learning applications.'
    },
    {
      title: 'Kubernetes Administrator',
      issuer: 'CNCF',
      year: '2024',
      description: 'Certification demonstrating skills in cluster management, networking, storage, and troubleshooting in Kubernetes.'
    },
    {
      title: 'AI Ethics and Governance',
      issuer: 'MIT xPRO',
      year: '2024',
      description: 'Certificate program focusing on ethical considerations and governance frameworks in artificial intelligence development.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-12 text-center">
        Certifications
      </h2>
      
      <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.slice(0, 2).map((cert, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-neon-gray p-6 transition-all duration-700 ease-out hover:shadow-thin-black-neon-hover hover:-translate-y-2 border border-black shadow-thin-black-neon animate-border-pulse-black ${
              isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Award size={20} className="text-slate-600" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {cert.year} • {cert.issuer}
                </span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-tight">
              {cert.title}
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm">
              {cert.description}
            </p>
            <button 
              onClick={() => {
                if (cert.certificateFile) {
                  window.open(cert.certificateFile, '_blank');
                }
              }} 
              className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors duration-300 w-fit"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;