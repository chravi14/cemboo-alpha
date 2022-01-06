import { Routes, Route } from "react-router-dom";

import {
  Footer,
  HeroSectionContainer,
  NavigationContainer,
} from "./components";
import { AboutPage, LandingPage, RoadmapPage } from "./pages";
import { config } from "./config/config";
import "./App.css";

function App() {
  const { isComingSoon } = config;
  return (
    <div className="container">
      {!isComingSoon && (
        <>
          <NavigationContainer />
          <div className="main">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="roadmap" element={<RoadmapPage />} />
            </Routes>
          </div>
        </>
      )}

      {isComingSoon && (
        <div className="main" id="coming-soon">
          <HeroSectionContainer />
        </div>
      )}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
