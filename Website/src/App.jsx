import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import TripDetails from './components/TripDetails';

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const openTrip = (trip) => {
    setSelectedTrip(trip);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const closeTrip = () => {
    setSelectedTrip(null);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  if (selectedTrip) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <TripDetails trip={selectedTrip} onBack={closeTrip} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Destinations onSelectTrip={openTrip} />
        <HowItWorks />
        <Contact />
      </main>
    </div>
  );
}

export default App;