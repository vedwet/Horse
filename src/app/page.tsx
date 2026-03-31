"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="app-container">
      <div className="hero-section text-white">
        {/* Video Background */}
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/BG_Video.mp4" type="video/mp4" />
        </video>

        {/* Navigation */}
        <div className="nav-container-wrapper">
          <motion.nav 
            initial={{ y: -40, opacity: 0, maxWidth: "160px" }}
            animate={{ y: 0, opacity: 1, maxWidth: "1300px" }}
            transition={{ 
              y: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8 },
              maxWidth: { duration: 1, type: "spring", bounce: 0.4, delay: 0.8 }
            }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            className="navbar-pill"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="nav-links"
            >
              <a href="#solutions">Solutions</a>
              <a href="#insight">Insight</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </motion.div>
            
            <div className="nav-logo">
              Lumenet
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="nav-action"
            >
              <button className="btn-get-started">
                Get Started
                <span className="btn-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.nav>
        </div>

        {/* Main Content */}
        <div className="hero-content">

          <div className="hero-bottom">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="huge-title"
            >
              Neutrals
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bottom-right-content"
            >
              <p className="description-text">
                Lumenet blends AI, system architecture, and design to build intuitive, perception-driven digital environments—redefining how humans interact with technology.
              </p>
              <button className="btn-get-started mt-4">
                Get Started
                <span className="btn-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
