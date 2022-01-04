import { Routes, Route } from "react-router-dom";

import {
  Footer,
  HeroSectionContainer,
  NavigationContainer,
} from "./components";
import {
  AboutPageContainer,
  LandingPageContainer,
  RoadmapPageContainer,
} from "./pages";
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
              <Route path="/" element={<LandingPageContainer />} />
              <Route path="about" element={<AboutPageContainer />} />
              <Route path="roadmap" element={<RoadmapPageContainer />} />
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
