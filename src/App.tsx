import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Aurora from "./components/aurora/Aurora";
import SplashCursor from "./components/SplashCursor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

// Importiere die Seitenkomponenten
import ExperiencePage from "./pages/experience-page/ExperiencePage";
import ProjectPage from "./pages/project-page/ProjectPage";
import TechPage from "./pages/tech-page/TechPage";
import CertificatePage from "./pages/certificate-page/CertificatePage";
import LeizurePage from "./pages/leizure-page/LeizurePage";
import ContactPage from "./pages/contact-page/ContactPage";

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
        <div className="content">
          {/* Routen */}
          <Routes>
            {/* Home als Startseite */}
            <Route path="/" element={<Layout />}>
              <Route index element={<h1>Home</h1>} />
              {/* Exakte Pfade für alle Seiten */}
              <Route
                path="/react-app/pages/experience-page/ExperiencePage"
                element={<ExperiencePage />}
              />
              <Route
                path="/react-app/pages/project-page/ProjectPage"
                element={<ProjectPage />}
              />
              <Route
                path="/react-app/pages/tech-page/TechPage"
                element={<TechPage />}
              />
              <Route
                path="/react-app/pages/certificate-page/CertificatePage"
                element={<CertificatePage />}
              />
              <Route
                path="/react-app/pages/leizure-page/LeizurePage"
                element={<LeizurePage />}
              />
              <Route
                path="/react-app/pages/contact-page/ContactPage"
                element={<ContactPage />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Layout() {
  return (
    <div className="App">
      <Outlet /> {/* Hier wird die spezifische Seite geladen */}
    </div>
  );
}

export default App;
