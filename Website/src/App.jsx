import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import TripDetails from './components/TripDetails';

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  if (selectedTrip) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <TripDetails trip={selectedTrip} onBack={() => setSelectedTrip(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Destinations onSelectTrip={setSelectedTrip} />
        <HowItWorks />
        <Contact />
      </main>
    </div>
  );
}

export default App;