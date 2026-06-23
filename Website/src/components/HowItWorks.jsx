import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  'Choose a trip or travel experience.',
  'Join a group of like-minded travelers.',
  'Explore together and create lifelong memories.',
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="snap-start min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-surface/40 backdrop-blur-lg rounded-xl p-6 shadow-md text-lg"
            >
              <span className="font-bold text-accent">Step {idx + 1}: </span>
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}