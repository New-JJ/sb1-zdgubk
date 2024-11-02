import React from 'react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Crafting Digital Success</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We specialize in bringing your vision to life through tailored website development,
            impactful marketing, and strategic branding solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </header>
  );
}