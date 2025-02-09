import "../style/NavigationBar.css";

interface Props {
  iconUrl: string;
  description: string;
}

const navigationItems: Props[] = [
  { iconUrl: "react-app/src/assets/svg/home_icon.svg", description: "Home" },
  {
    iconUrl: "react-app/src/assets/svg/business_icon.svg",
    description: "Experience",
  },
  {
    iconUrl: "react-app/src/assets/svg/folder_icon.svg",
    description: "Projects",
  },
  {
    iconUrl: "react-app/src/assets/svg/gear_icon.svg",
    description: "Technologies",
  },
  {
    iconUrl: "react-app/src/assets/svg/medal_icon.svg",
    description: "Certificates",
  },
  {
    iconUrl: "react-app/src/assets/svg/tennis_icon.svg",
    description: "Leizure",
  },
  {
    iconUrl: "react-app/src/assets/svg/email_icon.svg",
    description: "Contact",
  },
];

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
