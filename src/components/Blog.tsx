import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

const Blog: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  // Updated blog posts with descriptions that match their titles
  const blogPosts = [
    {
      title: 'From Startups to Giants: Why Companies Everywhere Are Embracing Docker',
      date: 'July 28, 2025',
      category: 'Docker',
      description: 'An exploration of Docker\'s rise to prominence, detailing how its containerization technology helps startups and large corporations alike build, ship, and run applications efficiently.',
      url: 'https://kubernetesointee.blogspot.com/2025/07/from-startups-to-giants-why-companies.html'
    },
    {
      title: 'Unmasking Ctrl+C and Ctrl+Z: The Hidden Commands Behind Your Interrupts',
      date: 'July 25, 2025',
      category: 'Linux',
      description: 'A deep dive into the world of Linux signals, revealing the powerful system commands that execute when you interrupt or suspend processes with Ctrl+C and Ctrl+Z.',
      url: 'https://kubernetesointee.blogspot.com/2025/07/unmasking-ctrlc-and-ctrlz-hidden.html'
    },
    {
      title: 'How Companies Are Winning Big with AWS: Real Stories, Real Results',
      date: 'July 23, 2025',
      category: 'AWS',
      description: 'Exploring real-world success stories and strategies companies are using to innovate and scale their operations with Amazon Web Services.',
      url: 'https://kubernetesointee.blogspot.com/2025/07/how-companies-are-winning-big-with-aws.html'
    },
    {
      title: 'Pinterest\'s Big Move: How They Mastered the Cloud with Kubernetes',
      date: 'July 19, 2025',
      category: 'Kubernetes',
      description: 'A case study on how Pinterest leveraged Kubernetes to orchestrate its vast, cloud-based infrastructure, achieving unprecedented scale and reliability.',
      url: 'https://kubernetesointee.blogspot.com/2025/07/pinterests-big-move-how-they-mastered.html'
    },
    {
      title: 'Don\'t Just Store It, Store It Smart: A Human\'s Guide to Amazon S3 Storage Classes',
      date: 'July 15, 2025',
      category: 'S3 Storage Classes',
      description: 'A practical guide to Amazon S3, breaking down the different storage classes and helping you choose the most cost-effective option for your data needs.',
      url: 'https://kubernetesointee.blogspot.com/2025/07/dont-just-store-it-store-it-smart-human.html'
    },
    {
      title: '5 Essential GUI Programs for Linux Power Users',
      date: 'July 09, 2025',
      category: 'Linux',
      description: 'Discover five powerful GUI applications that can enhance your productivity and workflow on any Linux distribution.',
      url: 'https://kubernetesointee.blogspot.com/2025/07/5-gui-programs-in-linux-and-find-out.html'
    },
    {
      title: 'Why Our Company Thrives on Linux: A Deeper Dive into the Benefits',
      date: 'July 07, 2025',
      category: 'Linux',
      description: 'An inside look at the technical and strategic advantages of building an infrastructure on Linux, from enhanced security to superior cost-effectiveness.',
      url: 'https://kubernetesointee.blogspot.com/2025/07/why-our-company-thrives-on-linux-deeper.html'
    }

  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-12 text-center">
        Blog Posts
      </h2>
      
      <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-neon-black p-6 transition-all duration-700 ease-out hover:shadow-neon-black-hover hover:-translate-y-2 border border-gray-400 animate-border-pulse-black ${
              isVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="mb-4">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {post.date} • {post.category}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-tight">
              {post.title}
            </h3>
            
            <p className="text-slate-600 mb-4 leading-relaxed text-sm">
              {post.description}
            </p>
            
            <button
              onClick={() => {
                if (post.url) {
                  window.open(post.url, '_blank');
                }
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors duration-300 w-fit inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;