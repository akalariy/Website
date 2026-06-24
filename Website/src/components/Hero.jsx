export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <img
        src="/Images/Main.avif"
        alt="United States adventure"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        
        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
          Explore together.
          <br />
          Make new friends.
        </h1>

        <p className="text-xl md:text-2xl mb-8">
          SapphireBerries helps travelers discover beautiful places across the United States while connecting with like-minded people.
        </p>

        <a
          href="#destinations"
          className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition"
        >
          Explore Destinations
        </a>
      </div>
    </section>
  );
}