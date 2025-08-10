import React, { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Blog from './components/Blog';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import Background3D from './components/Background3D';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <>
      {/* Faded black bubbles background overlay */}
      <div className="bubble-bg">
        <div className="bubble" style={{ width: 180, height: 180, top: 40, left: 60 }} />
        <div className="bubble" style={{ width: 120, height: 120, top: 400, left: 300 }} />
        <div className="bubble" style={{ width: 220, height: 220, top: 700, right: 100 }} />
        <div className="bubble" style={{ width: 140, height: 140, bottom: 120, left: 120 }} />
        <div className="bubble" style={{ width: 100, height: 100, bottom: 60, right: 200 }} />
      </div>
    <div className="relative min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      <Background3D />
      <Navigation />
      <main className="relative z-10">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="education" className="py-20">
          <Education />
        </section>
        <section id="research" className="py-20">
          <Research />
        </section>
        <section id="blog" className="py-20">
          <Blog />
        </section>
        <section id="certificates" className="py-20">
          <Certificates />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <ChatAssistant />
    </div>
    </>
  );
}

export default App;