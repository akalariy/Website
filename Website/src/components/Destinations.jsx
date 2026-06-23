import React from 'react';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Yosemite',
    state: 'California',
    image: 'https://images.unsplash.com/photo-1562310503-a918c4c61e38?auto=format&fit=crop&w=900&q=80',
    desc: 'Waterfalls, granite cliffs, scenic hikes, and unforgettable group moments.',
  },
  {
    name: 'Yellowstone',
    state: 'Wyoming / Montana / Idaho',
    image: 'https://images.unsplash.com/photo-1504598318550-17eba1008a68?auto=format&fit=crop&w=900&q=80',
    desc: 'Geysers, wildlife, hot springs, and classic road-trip adventure energy.',
  },
  {
    name: 'Glacier',
    state: 'Montana',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    desc: 'Alpine lakes, mountain views, peaceful hikes, and meaningful connections.',
  },
  {
    name: 'Zion',
    state: 'Utah',
    image: 'https://images.unsplash.com/photo-1539443081802-969645429d5f?auto=format&fit=crop&w=900&q=80',
    desc: 'Red cliffs, canyon trails, sunset views, and social weekend escapes.',
  },
  {
    name: 'Grand Canyon',
    state: 'Arizona',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=900&q=80',
    desc: 'Epic canyon views, sunrise moments, easy hikes, and group memories.',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-blue-700 font-semibold mb-3">
          Destinations
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-center mb-5">
          Travel within the United States
        </h2>

        <p className="max-w-3xl mx-auto text-center text-slate-600 mb-14 text-lg">
          Explore iconic national parks with like-minded travelers through social group adventures.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place, idx) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100 hover:shadow-2xl transition"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6 space-y-3">
                <p className="text-blue-700 font-semibold">{place.state}</p>
                <h3 className="text-2xl font-bold">{place.name}</h3>
                <p className="text-slate-600">{place.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}