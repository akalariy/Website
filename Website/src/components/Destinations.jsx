const destinations = [
  {
    slug: 'yosemite',
    title: 'Yosemite National Park',
    location: 'California',
    image: '/Images/Yosemite.avif',
    desc: 'Granite cliffs, waterfalls, peaceful trails, and unforgettable valley views.',
  },
  {
    slug: 'yellowstone',
    title: 'Yellowstone National Park',
    location: 'Wyoming, Montana & Idaho',
    image: '/Images/Yellowstone.avif',
    desc: 'Geysers, wildlife, hot springs, and classic American road-trip energy.',
  },
  {
    slug: 'glacier',
    title: 'Glacier National Park',
    location: 'Montana',
    image: '/Images/Glacier.avif',
    desc: 'Turquoise lakes, mountain scenery, fresh air, and meaningful group moments.',
  },
  {
    slug: 'zion',
    title: 'Zion National Park',
    location: 'Utah',
    image: '/Images/Zion.jpeg',
    desc: 'Red cliffs, canyon trails, desert beauty, and social weekend adventures.',
  },
  {
    slug: 'grand-canyon',
    title: 'Grand Canyon National Park',
    location: 'Arizona',
    image: '/Images/GrandCanyon.avif',
    desc: 'Epic canyon views, sunrise moments, scenic hikes, and lifelong memories.',
  },
];

export default function Destinations({ onSelectTrip }) {
  return (
    <section id="destinations" className="py-28 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-blue-700 font-bold mb-3">
          Destinations
        </p>

        <h2 className="text-4xl md:text-6xl font-black text-center mb-5">
          Travel Within the United States
        </h2>

        <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-16">
          Explore iconic destinations with like-minded travelers through social group adventures.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((item) => (
            <div
              key={item.slug}
              className="rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition border border-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-blue-700 font-bold mb-2">{item.location}</p>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-5">{item.desc}</p>

                <button
                  onClick={() => onSelectTrip(item.slug)}
                  className="px-5 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition"
                >
                  View Itinerary
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}