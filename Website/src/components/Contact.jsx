export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8">
          Contact
        </h2>

        <p className="text-xl text-slate-600 mb-8">
          Interested in joining an upcoming adventure or learning more about SapphireBerries?
        </p>

        <a
          href="mailto:sapphireberries02@gmail.com"
          className="inline-block px-8 py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition"
        >
          sapphireberries02@gmail.com
        </a>
      </div>
    </section>
  );
}