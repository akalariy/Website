const steps = [
  {
    title: 'Choose a Destination',
    desc: 'Pick a United States adventure like Yosemite, Yellowstone, Glacier, Zion, or the Grand Canyon.',
  },
  {
    title: 'Join a Social Group',
    desc: 'Connect with solo travelers and small groups who want to explore together.',
  },
  {
    title: 'Travel Together',
    desc: 'Experience beautiful places, shared memories, new friendships, and meaningful adventures.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-blue-700 font-bold mb-3">
          Simple Process
        </p>

        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-black mb-6">
                {index + 1}
              </div>

              <h3 className="text-2xl font-black mb-4">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}