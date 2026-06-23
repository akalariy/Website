import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaUsers, FaMapMarkedAlt } from 'react-icons/fa';

const trips = [
  {
    title: 'Solo Traveler Trips',
    desc: 'Join friendly group trips designed for solo travelers who want to explore and meet new people.',
    icon: <FaUsers />,
  },
  {
    title: 'Group Adventures',
    desc: 'Travel with friends or join a curated group experience filled with fun, culture, and memories.',
    icon: <FaPlaneDeparture />,
  },
  {
    title: 'Custom Experiences',
    desc: 'Personalized travel plans for students, young professionals, and communities.',
    icon: <FaMapMarkedAlt />,
  },
];

export default function Trips() {
  return (
    <section
      id="trips"
      className="snap-start min-h-screen flex items-center justify-center px-6 bg-base"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-12">Our Trips</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {trips.map((trip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-surface/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg text-center space-y-4"
            >
              <div className="text-4xl text-accent flex justify-center">
                {trip.icon}
              </div>
              <h3 className="text-2xl font-bold">{trip.title}</h3>
              <p>{trip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}