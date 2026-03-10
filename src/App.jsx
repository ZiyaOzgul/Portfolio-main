import { Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  CV,
  CustomCursor,
} from "./components/index";

const App = () => {
  return (
    <div className="relative z-0 bg-primary cursor-none selection:bg-accent/30">
      <CustomCursor />
      {/* Global stars background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsCanvas />
      </div>

      <div className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
