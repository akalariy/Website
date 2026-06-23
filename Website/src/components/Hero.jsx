import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-5xl text-center px-6 space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Arrive solo, <br /> leave as friends
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Social small-group adventures for travelers exploring the United States together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#destinations"
            className="px-8 py-4 bg-white text-slate-900 rounded-md font-semibold hover:bg-slate-100 transition"
          >
            Explore Destinations
          </a>

          <a
            href="#how-it-works"
            className="px-8 py-4 border border-white text-white rounded-md font-semibold hover:bg-white/10 transition"
          >
            How It Works
          </a>
        </div>
      </motion.div>
    </section>
  );
}