import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rotationStep = 36; // 360 / 10 cards

  useEffect(() => {
    // Auto-rotation
    autoRotateRef.current = setInterval(() => {
      setCurrentRotation(prev => prev - rotationStep);
    }, 4000);

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentRotation(prev => prev + rotationStep);
      } else if (e.key === 'ArrowRight') {
        setCurrentRotation(prev => prev - rotationStep);
      }
    };

    // Close sub-tabs when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.sub-tab') && !target.closest('.view-projects-btn')) {
        setActiveTab(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentRotation(prev => prev + rotationStep);
  };

  const handleNextClick = () => {
    setCurrentRotation(prev => prev - rotationStep);
  };

  const handleMouseEnter = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
  };

  const handleMouseLeave = () => {
    autoRotateRef.current = setInterval(() => {
      setCurrentRotation(prev => prev - rotationStep);
    }, 4000);
  };

  const handleViewProjects = (tabId: string) => {
    setActiveTab(tabId);
    // Smooth scroll to the sub-tab
    const targetSubTab = document.getElementById(tabId);
    if (targetSubTab) {
      targetSubTab.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="projects-section">
      <h1 className="section-title">Projects</h1>
      
      <div className="scene">
        <div 
          className="carousel" 
          ref={carouselRef}
          style={{ transform: `rotateY(${currentRotation}deg)` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 3)) translateZ(300px)` }}>
            <h3>AWS</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('aws-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 4)) translateZ(300px)` }}>
            <h3>DevOps</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('devops-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 5)) translateZ(300px)` }}>
            <h3>CI/CD</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('cicd-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 6)) translateZ(300px)` }}>
            <h3>Git</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('git-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 7)) translateZ(300px)` }}>
            <h3>Linux & Kubernetes</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('linux&kubernetes-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 8)) translateZ(300px)` }}>
            <h3>ML</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('ml-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 9)) translateZ(300px)` }}>
            <h3>Agentic-AI</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('agentic-ai-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 1)) translateZ(300px)` }}>
            <h3>Python & Javacript</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('python&javascript-projects')}>View Projects</button>
          </div>
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 2)) translateZ(300px)` }}>
            <h3>DevOpsAI-Suite</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('DevOpsAI-Suite')}>View Projects</button>
          </div>
          
          <div className="carousel-card" style={{ transform: `rotateY(calc(36deg * 10)) translateZ(300px)` }}>
            <h3>Clean Go</h3>
            <button className="view-projects-btn" onClick={() => handleViewProjects('Clean Go')}>View Projects</button>
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button className="nav-btn" onClick={handlePrevClick}>← Previous</button>
        <button className="nav-btn" onClick={handleNextClick}>Next →</button>
      </div>

      <div className="sub-tabs-container">
        <div id="python-projects" className={`sub-tab ${activeTab === 'python&javascript-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>Python Email</h4>
            <p>A Python script to send emails programmatically using the smtplib library, with support for attachments and HTML content.</p>
            <a href="https://github.com/Riya-1702/python-email.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Python SMS</h4>
            <p>A Python script to send SMS messages using the Twilio API, enabling automated notifications and messaging services.</p>
            <a href="https://github.com/Riya-1702/python-sms.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Python Call</h4>
            <p>A Python script to make phone calls using the Twilio API, enabling automated voice notifications and messaging services.</p>
            <a href="https://github.com/Riya-1702/python-call.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Python WhatsApp</h4>
            <p>A Python script to send WhatsApp messages using the Twilio API and Pywhtkit, enabling automated messaging services.</p>
            <a href="https://github.com/Riya-1702/python-whatsapp_msg.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Python Menu</h4>
            <p>A Python-powered interactive menu for instant actions like calls, SMS, emails, WhatsApp messages, Instagram posts, web searches, and more.</p>
            <a href="https://github.com/Riya-1702/python-menu.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Javascript Menu</h4>
            <p>Interactive menu with JavaScript that allows users to perform actions like sending emails, capture photo, recording videos,web search, and more.</p>
            <a href="https://github.com/Riya-1702/Javascript_menu.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>

        

    

        <div id="aws-projects" className={`sub-tab ${activeTab === 'aws-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>Aws Automation</h4>
            <p>Automate AWS resources using Python and Boto3, including EC2.</p>
            <a href="https://github.com/Riya-1702/Aws-Automation.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>

        <div id="devops-projects" className={`sub-tab ${activeTab === 'devops-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>Flask-Docker</h4>
            <p>A simple Flask application containerized using Docker for easy deployment and scaling.</p>
            <a href="https://github.com/Riya-1702/flask-docker.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Linear Regression Docker</h4>
            <p>Linear regression model containerized using Docker for easy deployment and reproducibility.</p>
            <a href="https://github.com/Riya-1702/linear-regression-docker.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Apache Docker</h4>
            <p> Apache application containerized using Docker for easy deployment and reproducibility.</p>
            <a href="https://github.com/Riya-1702/Docker-apache.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Python Menu-Based</h4>
            <p>Python menu-based application with Docker for easy deployment and reproducibility.</p>
            <a href="https://github.com/Riya-1702/docker-python_menubased.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Interactive Dashboard</h4>
            <p>Docker dashboard that automates container management—launch, delete, pull images, manage networks, and more—all in one place.</p>
            <a href="https://github.com/Riya-1702/Docker_dashboard.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Firefox Docker</h4>
            <p>Firefox browser containerized using Docker for easy deployment and reproducibility.</p>
            <a href="https://github.com/Riya-1702/firefox-docker.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4> DinD Docker</h4>
            <p> DinD Docker containerized using Docker for easy deployment and reproducibility.</p>
            <a href="https://github.com/Riya-1702/dind-docker.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4> Gesture Docker Commands</h4>
            <p>A gesture-controlled Docker dashboard that lets you pull images, launch, start, stop, and remove containers—fully automated with intuitive finger movements.</p>
            <a href="https://github.com/Riya-1702/Gesture-Docker-Commands.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>

        <div id="cicd-projects" className={`sub-tab ${activeTab === 'cicd-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>CI/CD pipeline</h4>
            <p>Automated CI/CD pipeline using Jenkins with Docker, automated testing, and deployment to multiple environments.</p>
            <a href="https://github.com/Riya-1702/CI-CD-pipeline.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>

        <div id="git-projects" className={`sub-tab ${activeTab === 'git-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>Git Automation</h4>
            <p>Custom Git hooks and scripts for automating code quality checks, commit message validation, and branch management, delete and view repository.</p>
            <a href="https://github.com/Riya-1702/git-automation.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>

        <div id="linux-projects" className={`sub-tab ${activeTab === 'linux&kubernetes-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>Linux Dashboard</h4>
            <p>A Streamlit-powered Linux dashboard that lists all available commands and lets you run them instantly from your browser.</p>
            <a href="https://github.com/Riya-1702/Linux-dashboard.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Kubernetes-server</h4>
            <p>A Flask-based Kubernetes server interface to deploy, manage, and monitor clusters, pods, and services with ease.</p>
            <a href="https://github.com/Riya-1702/kubernetes-dashboard.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>

        <div id="ml-projects" className={`sub-tab ${activeTab === 'ml-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>Temperature Prediction Model</h4>
            <p>Machine learning model for temperature prediction using linear regression with scikit-learn and TensorFlow.</p>
            <a href="https://github.com/Riya-1702/temperature_prediction_linear_regression.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>ML Dashboard</h4>
            <p>ML dashboard that lets you train, evaluate, and deploy machine learning models with ease.</p>
            <a href="https://github.com/Riya-1702/ml-dashboard.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>

        <div id="agentic-ai-projects" className={`sub-tab ${activeTab === 'agentic-ai-projects' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>AI Tutor</h4>
            <p>AI-powered tutoring system that adapts to individual learning styles using machine learning algorithms.</p>
            <a href="https://github.com/Riya-1702/Ai-tutor.git" className="source-code-btn">View Source Code</a>
          </div>
          <div className="project-card">
            <h4>Mood Swift</h4>
            <p>AI-powered chatbot that helps users manage their moods and emotions with personalized recommendations and song playlist.</p>
            <a href="https://github.com/Riya-1702/mood-swift-langchaintool.git" className="source-code-btn">View Source Code</a>
          </div>
          
        </div>
       
        <div id="DevOpsAI-Suite-projects" className={`sub-tab ${activeTab === 'DevOpsAI-Suite' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>DevOpsAI-Suite</h4>
            <p>DevOpsAI-Suite is a collection of tools and scripts that help DevOps teams automate their workflows and improve their productivity with AI, AWS,Git, Kuberntes.</p>
            <a href="https://github.com/Riya-1702/DevOpsAI-suite.git" className="source-code-btn">View Source Code</a>
          </div>
        </div>
        <div id="Clean-Go-projects" className={`sub-tab ${activeTab === 'Clean Go' ? 'active' : ''}`}>
          <div className="project-card">
            <h4>Clean Go</h4>
            <p>CleanGo is a website where you can book cleaners as per your needs, they arrive after booking, and you pay only for what you want cleaned.</p>
            <a href="https://github.com/raghavtiwari974/cleango-app.git" className="source-code-btn">View Source Code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;