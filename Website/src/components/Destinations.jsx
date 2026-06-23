const destinations = [
  {
    title: 'Yosemite National Park',
    location: 'California',
    image: '/Images/Yosemite.avif',
    desc: 'Granite cliffs, waterfalls, peaceful trails, and unforgettable valley views.',
  },
  {
    title: 'Yellowstone National Park',
    location: 'Wyoming, Montana & Idaho',
    image: '/Images/Yellowstone.avif',
    desc: 'Geysers, wildlife, hot springs, and classic American road-trip energy.',
  },
  {
    title: 'Glacier National Park',
    location: 'Montana',
    image: '/Images/Glacier.avif',
    desc: 'Turquoise lakes, mountain scenery, fresh air, and meaningful group moments.',
  },
  {
    title: 'Zion National Park',
    location: 'Utah',
    image: '/Images/Zion.jpeg',
    desc: 'Red cliffs, canyon trails, desert beauty, and social weekend adventures.',
  },
  {
    title: 'Grand Canyon National Park',
    location: 'Arizona',
    image: '/Images/GrandCanyon.avif',
    desc: 'Epic canyon views, sunrise moments, scenic hikes, and lifelong memories.',
  },
];

export default function Destinations() {
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
              key={item.title}
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
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}