import { Routes, Route } from "react-router-dom";

import { Footer, NavigationContainer } from "./components";
import { AboutPage, LandingPage, LoginPage, RoadmapPage } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <NavigationContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
