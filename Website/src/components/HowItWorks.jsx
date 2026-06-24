const steps = [
  {
    title: 'Choose a Destination',
    desc: 'Pick an adventure that interests you and reserve your spot.',
  },
  {
    title: 'Meet New People',
    desc: 'Connect with fellow travelers before the trip begins.',
  },
  {
    title: 'Travel Together',
    desc: 'Join the group, explore amazing places, and enjoy shared experiences.',
  },
  {
    title: 'Create Memories',
    desc: 'Build friendships, capture unforgettable moments, and make lasting memories.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-black mb-6">
                {index + 1}
              </div>

              <h3 className="text-2xl font-black mb-4">
                {step.title}
              </h3>

              <p className="text-slate-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}