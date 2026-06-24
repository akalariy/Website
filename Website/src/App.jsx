import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import TripDetails from './components/TripDetails';

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const previousScrollPosition = useRef(0);

  useEffect(() => {
    const handleBrowserBack = (event) => {
      if (event.state && event.state.trip) {
        setSelectedTrip(event.state.trip);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      } else {
        setSelectedTrip(null);
        setTimeout(() => {
          window.scrollTo(0, previousScrollPosition.current);
        }, 0);
      }
    };

    window.addEventListener('popstate', handleBrowserBack);

    return () => {
      window.removeEventListener('popstate', handleBrowserBack);
    };
  }, []);

  const openTrip = (trip) => {
    previousScrollPosition.current = window.scrollY;

    window.history.pushState(
      { trip },
      '',
      `#${trip}`
    );

    setSelectedTrip(trip);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const closeTrip = () => {
    setSelectedTrip(null);

    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }

    setTimeout(() => {
      window.scrollTo(0, previousScrollPosition.current);
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