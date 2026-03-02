import React from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components/index";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      {/* Global stars background */}
      <div className="fixed inset-0 z-0">
        <StarsCanvas />
      </div>

      <div className="relative z-10">
        <div className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-primary/70" />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default App;
