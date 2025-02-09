import "../style/NavigationBar.css";
import { Link } from "react-router-dom";

interface Props {
  iconUrl: string;
  description: string;
  link: string;
}

const navigationItems: Props[] = [
  {
    iconUrl: "react-app/src/assets/svg/home_icon.svg",
    description: "Home",
    link: "./App",
  },
  {
    iconUrl: "react-app/src/assets/svg/business_icon.svg",
    description: "Experience",
    link: "./App",
  },
  {
    iconUrl: "react-app/src/assets/svg/folder_icon.svg",
    description: "Projects",
    link: "./App",
  },
  {
    iconUrl: "react-app/src/assets/svg/gear_icon.svg",
    description: "Technologies",
    link: "./App",
  },
  {
    iconUrl: "react-app/src/assets/svg/medal_icon.svg",
    description: "Certificates",
    link: "./App",
  },
  {
    iconUrl: "react-app/src/assets/svg/tennis_icon.svg",
    description: "Leizure",
    link: "./App",
  },
  {
    iconUrl: "react-app/src/assets/svg/email_icon.svg",
    description: "Contact",
    link: "./App",
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
        <div key={index} className="nav-item">
          <img src={item.iconUrl} alt={item.description} />
          <span>{item.description}</span>
        </div>
      ))}
    </nav>
  );
}

export default NavigationBar;
