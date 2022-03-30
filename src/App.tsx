import { Routes, Route } from "react-router-dom";
import { ROUTEPATHS } from "./libs";

import { Footer, NavigationContainer } from "./components";
import { AboutPage, LandingPage, RegistrationPage, RoadmapPage } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <NavigationContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={ROUTEPATHS.ABOUT} element={<AboutPage />} />
        <Route path={ROUTEPATHS.ROADMAP} element={<RoadmapPage />} />
        <Route path={ROUTEPATHS.REGISTER} element={<RegistrationPage />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
