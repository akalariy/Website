import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Trips from './components/Trips';
import HowItWorks from './components/HowItWorks';
import Founder from './components/Founder';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main
        id="main-scroll"
        className="flex-1 overflow-y-scroll h-screen snap-y snap-proximity scroll-smooth"
      >
        <Hero />
        <About />
        <Trips />
        <HowItWorks />
        <Founder />
        <Contact />
      </main>
    </div>
  );
}

export default App;