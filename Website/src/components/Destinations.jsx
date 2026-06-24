const destinations = [
  {
    slug: 'yosemite',
    title: 'Yosemite National Park',
    location: 'California',
    image: '/Images/Yosemite.avif',
    duration: '4 Days • 3 Nights',
    price: 'Pricing Yet To Be Announced',
  },
  {
    slug: 'yellowstone',
    title: 'Yellowstone National Park',
    location: 'Wyoming, Montana & Idaho',
    image: '/Images/Yellowstone.avif',
    duration: '6 Days • 5 Nights',
    price: 'Pricing Yet To Be Announced',
  },
  {
    slug: 'glacier',
    title: 'Glacier National Park',
    location: 'Montana',
    image: '/Images/Glacier.avif',
    duration: '6 Days • 5 Nights',
    price: 'Pricing Yet To Be Announced',
  },
  {
    slug: 'zion',
    title: 'Zion National Park',
    location: 'Utah',
    image: '/Images/Zion.jpeg',
    duration: '5 Days • 4 Nights',
    price: 'Pricing Yet To Be Announced',
  },
  {
    slug: 'grand-canyon',
    title: 'Grand Canyon National Park',
    location: 'Arizona',
    image: '/Images/GrandCanyon.avif',
    duration: '4 Days • 3 Nights',
    price: 'Pricing Yet To Be Announced',
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
          Featured Adventures
        </h2>

        <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-16">
          Explore iconic destinations with like-minded travelers and create unforgettable memories.
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

                <h3 className="text-2xl font-black mb-5">{item.title}</h3>

                <div className="mb-6">
                  <p className="text-lg font-black text-slate-900">
                    {item.duration}
                  </p>

                  <p className="text-blue-700 text-xl font-black">
                    {item.price}
                  </p>
                </div>

                <button
                  onClick={() => onSelectTrip(item.slug)}
                  className="w-full px-5 py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition"
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