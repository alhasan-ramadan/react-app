import "../style/NavigationBar.css";
import { Link } from "react-router-dom";

interface Props {
  iconUrl: string;
  description: string;
  link: string;
}

const navigationItems: Props[] = [
  {
    iconUrl: "/react-app/public/home_icon.svg", // Absoluter Pfad ab /public
    description: "Home",
    link: "/",
  },
  {
    iconUrl: "/react-app/public/business_icon.svg",
    description: "Experience",
    link: "/react-app/pages/certificate-page/ExperiencePage",
  },
  {
    iconUrl: "/react-app/public/folder_icon.svg",
    description: "Projects",
    link: "/react-app/pages/project-page/ProjectPage",
  },
  {
    iconUrl: "/react-app/public/gear_icon.svg",
    description: "Technologies",
    link: "/react-app/pages/tech-page/TechPage",
  },
  {
    iconUrl: "/react-app/public/medal_icon.svg",
    description: "Certificates",
    link: "/react-app/pages/certificate-page/CertificatePage",
  },
  {
    iconUrl: "/react-app/public/business_icon.svg",
    description: "Leizure",
    link: "/react-app/pages/leizure-page/LeizurePage",
  },
  {
    iconUrl: "/react-app/public/email_icon.svg",
    description: "Contact",
    link: "/react-app/pages/contact-page/ContactPage",
  },
];

/* Diese Navigation-Komponente rendert eine Navigationsleiste (`<nav>`),
die eine Liste von Navigations-Elementen (`navigationItems`) durchläuft.
Jedes Element wird als `div` mit der Klasse `nav-item` dargestellt,
das ein Bild (`<img>`) und eine Beschreibung (`<span>`) enthält.
Die `key`-Eigenschaft wird mit `index` gesetzt, um jedes Element eindeutig zu identifizieren. */

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      {navigationItems.map((item, index) => (
        <Link key={index} to={item.link} className="nav-link">
          <div className="nav-item">
            <img src={item.iconUrl} alt={item.description} />
            <span className="nav-text">{item.description}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;
