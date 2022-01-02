import React from "react";
import "./App.css";
import { HeroSectionContainer } from "./components/hero-section/HeroSection.container";
import { Footer } from "./components/Footer/Footer.container";

function App() {
  return (
    <div className="container">
      <div className="main">
        <HeroSectionContainer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
