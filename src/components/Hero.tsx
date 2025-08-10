import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import profilePhoto from './asset/2025-08-10 20.47.33.jpg';

const ROLES = ['DevOps Engineer', 'ML Engineer']; // Define your roles here

const HeroSection: React.FC = () => {
  // Remove unused state since showIntro is never used
  const showHero = true;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0); // State to manage current role

  useEffect(() => {
    // Loop through roles every 3 seconds
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="min-h-screen bg-transparent relative overflow-hidden">
      {/* WhatsApp-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100" height="100" className="w-full h-full">
          <defs>
            <pattern id="whatsapp-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#000000" />
              <circle cx="5" cy="5" r="0.5" fill="#000000" />
              <circle cx="35" cy="15" r="0.5" fill="#000000" />
              <circle cx="15" cy="35" r="0.5" fill="#000000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whatsapp-pattern)" />
        </svg>
      </div>

      <AnimatePresence>
        {showHero && (
          <motion.div
            className="relative z-10 min-h-screen flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-4">
                  <motion.p
                    className="text-lg text-gray-600 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Hi! I'm 
                  </motion.p>

                  <motion.h1
                    className="text-5xl md:text-7xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Riya Sharma
                  </motion.h1>

                  <motion.h2
                        key={currentRoleIndex}
                        className="absolute text-3xl md:text-5xl font-bold text-gray-600 "
                        initial={{ opacity: 0, x: 100 }} // Starts from right, invisible
                        animate={{ opacity: 1, x: 0 }} // Move to center, fade in
                        exit={{ opacity: 0, x: -100 }} // Move left, fade out
                        transition={{
                          delay: currentRoleIndex === 0 ? 1.5 : 0, // <--- THIS IS THE KEY CHANGE
                          duration: 0.7,
                          ease: "easeInOut"
                        }}
                          >
                            {ROLES[currentRoleIndex]}
                          </motion.h2>
                </div>

                <motion.p
                  className="text-xl text-gray-600 max-w-lg pt-12 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Building the backbone of innovation. Optimizing performance. Driven by DevOps and ML
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    href="/RiyaSharma.pdf"
                    download="RiyaSharma_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="flex items-center space-x-2 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View My Work</span>
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex space-x-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  {[
                    { icon: Github, href: 'https://github.com/Riya-1702', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/riya-sharma-638a6b217', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:riyasharmaabcd334@gmail.com', label: 'Email' },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-all duration-300"
                        // UPDATED whileHover and transition for a better pop-up
                        whileHover={{ scale: 1.2, y: -8 }} // Scale more and lift higher
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 1 + index * 0.1,
                          type: "spring", // Use spring for a bouncy pop
                          stiffness: 400, // Adjust stiffness for more/less bounce
                          damping: 10 // Adjust damping for more/less wobble
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                     );
                  })}
                </motion.div>
              </motion.div>

              {/* Right Content - Floating Deformed Image */}
              <motion.div
                className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Floating Background Elements */}
                  <motion.div
                    className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
                    animate={{
                      y: [0, 20, 0],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main Deformed Image Container */}
                  <motion.div
                    className="relative w-80 h-80 md:w-96 md:h-96"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Glassmorphism Frame */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] shadow-2xl transform rotate-3" />

                    {/* Deformed Image */}
                    <motion.div
                      className="relative w-full h-full overflow-hidden rounded-[3rem] transform -rotate-3"
                      style={{
                        clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 0,
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img
                        src={profilePhoto}
                        alt="Riya - DevOps Engineer"
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </motion.div>

                    {/* Removed Floating Tech Icons section */}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="#projects"
                className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* <span className="text-sm font-medium">Scroll Down</span> */}
                <ChevronDown className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;