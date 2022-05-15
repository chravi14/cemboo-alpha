import { Routes, Route } from "react-router-dom";
import { ROUTEPATHS } from "./libs";

import { useNavigation } from "./behavioral";
import { Footer, NavigationContainer } from "./components";
import {
  AboutPage,
  DashboardPage,
  LandingPage,
  LoginPage,
  RegistrationPage,
  RoadmapPage,
} from "./pages";
import "./App.css";

function App() {
  const showNavigation = useNavigation();
  return (
    <>
      {showNavigation && <NavigationContainer />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={ROUTEPATHS.ABOUT} element={<AboutPage />} />
        <Route path={ROUTEPATHS.ROADMAP} element={<RoadmapPage />} />
        <Route path={ROUTEPATHS.REGISTER} element={<RegistrationPage />} />
        <Route path={ROUTEPATHS.LOGIN} element={<LoginPage />} />
        <Route path={ROUTEPATHS.DASHBOARD} element={<DashboardPage />} />
      </Routes>
      {showNavigation && (
        <div className="footer">
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
