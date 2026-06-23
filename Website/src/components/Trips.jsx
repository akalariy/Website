import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaMountain, FaUsers } from 'react-icons/fa';

const trips = [
  {
    title: 'Yosemite Social Escape',
    location: 'California',
    duration: '3–4 Days',
    desc: 'Waterfalls, granite cliffs, scenic hikes, photo spots, and group bonding in one of America’s most iconic parks.',
  },
  {
    title: 'Yellowstone Adventure',
    location: 'Wyoming / Montana / Idaho',
    duration: '4–5 Days',
    desc: 'Geysers, hot springs, wildlife, road-trip memories, and unforgettable moments with new travel friends.',
  },
  {
    title: 'Glacier Friendship Trip',
    location: 'Montana',
    duration: '4–5 Days',
    desc: 'Mountain views, alpine lakes, scenic drives, peaceful hikes, and meaningful conversations with your group.',
  },
  {
    title: 'Zion Weekend Escape',
    location: 'Utah',
    duration: '2–3 Days',
    desc: 'Red cliffs, canyon hikes, sunset views, and a perfect social adventure for solo travelers.',
  },
  {
    title: 'Grand Canyon Group Journey',
    location: 'Arizona',
    duration: '2–3 Days',
    desc: 'Epic canyon views, sunrise moments, easy hikes, group photos, and lifelong memories.',
  },
];

export default function Trips() {
  return (
    <section
      id="trips"
      className="snap-start min-h-screen flex items-center justify-center px-6 py-20 bg-base"
    >
      <div className="max-w-6xl w-full">
        <p className="text-center text-accent font-semibold mb-3">
          Featured Adventures
        </p>

        <h2 className="text-4xl font-bold text-center mb-4">
          Explore America’s Most Beautiful Parks Together
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-12">
          SapphireBerries creates social group trips for solo travelers and
          small groups who want to meet new people while exploring iconic U.S.
          national parks.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-surface/40 backdrop-blur-lg rounded-2xl p-7 shadow-lg space-y-4 hover:bg-accent/15 transition"
            >
              <FaMountain className="text-4xl text-accent" />

              <h3 className="text-2xl font-bold">{trip.title}</h3>

              <p className="flex items-center gap-2 text-accent font-semibold">
                <FaMapMarkedAlt /> {trip.location}
              </p>

              <p className="flex items-center gap-2 font-semibold">
                <FaUsers /> Small Group · {trip.duration}
              </p>

              <p>{trip.desc}</p>

              <a
                href="#contact"
                className="inline-block mt-3 px-5 py-3 bg-accent text-white rounded-xl shadow hover:shadow-lg transition"
              >
                Join Waitlist
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}