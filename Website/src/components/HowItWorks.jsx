const steps = [
  {
    title: 'Reserve Your Spot',
    desc: 'Travelers select a destination and reserve a seat for the group trip.',
  },
  {
    title: 'Board From Nearby Cities',
    desc: 'A charter bus picks up travelers from selected cities near the national park route.',
  },
  {
    title: 'Arrive at Base Camp',
    desc: 'The group reaches the base camp, settles in, joins a welcome meetup, and connects around a campfire.',
  },
  {
    title: 'Explore Together',
    desc: 'Over 3–4 days, the group enjoys planned hikes, scenic tours, photos, meals, and social activities.',
  },
  {
    title: 'Return Together',
    desc: 'After the adventure, the bus drops travelers back at their original pickup locations.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-white p-7 rounded-2xl shadow-lg">
              <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-black mb-6">
                {index + 1}
              </div>

              <h3 className="text-xl font-black mb-4">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}