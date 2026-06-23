import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center space-y-6 bg-surface/40 backdrop-blur-lg rounded-2xl p-10 shadow-lg"
      >
        <h2 className="text-4xl font-bold">About Us</h2>

        <p className="text-lg">
          We believe travel becomes more meaningful when shared with others.
          SapphireBerries brings people together through curated group trips,
          social adventures, and community-driven travel experiences.
        </p>

        <p className="text-lg">
          Whether you are traveling solo or with friends, our goal is to help
          you discover new places, build genuine friendships, and enjoy safe,
          memorable journeys.
        </p>
      </motion.div>
    </section>
  );
}