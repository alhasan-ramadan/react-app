import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Aurora from "./components/aurora/Aurora";
import SplashCursor from "./components/SplashCursor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SplashCursor
          SPLAT_RADIUS={0.01}
          BACK_COLOR={{ r: 255, g: 255, b: 255 }}
          COLOR_UPDATE_SPEED={0.1}
        />
        {/* Navigation Bar & Aurora immer sichtbar */}
        <NavigationBar />
        <Aurora colorStops={["#50ff29", "#288d14", "#32ffb0"]} speed={0.5} />

        {/* Routen */}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route
            path="/react-app/pages/certificate-page/ExperiencePage"
            element={<h1>Experience</h1>}
          />
          <Route
            path="/react-app/pages/project-page/ProjectPage"
            element={<h1>Projects</h1>}
          />
          <Route
            path="/react-app/pages/tech-page/TechPage"
            element={<h1>Technologies</h1>}
          />
          <Route
            path="/react-app/pages/certificate-page/CertificatePage"
            element={<h1>Certificates</h1>}
          />
          <Route
            path="/react-app/pages/leizure-page/LeizurePage"
            element={<h1>Leizure</h1>}
          />
          <Route
            path="/react-app/pages/contact-page/ContactPage"
            element={<h1>Contact</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
