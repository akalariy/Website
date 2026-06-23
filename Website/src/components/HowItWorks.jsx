import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Choose your destination',
    desc: 'Pick a United States adventure such as Yosemite, Yellowstone, Glacier, Zion, or the Grand Canyon.',
  },
  {
    title: 'Join a social group',
    desc: 'Connect with solo travelers and small groups who want to explore together.',
  },
  {
    title: 'Travel together',
    desc: 'Experience beautiful places, shared memories, new friendships, and community-driven adventures.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-blue-700 font-semibold mb-3">
          Simple Process
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold mb-6">
                {idx + 1}
              </div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}