import { config } from "./config/config.local";

import {
  Footer,
  HeroSectionContainer,
  NavigationContainer,
} from "./components";

import "./App.css";

function App() {
  const { isComingSoon } = config;
  return (
    <div className="container">
      <NavigationContainer />

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
