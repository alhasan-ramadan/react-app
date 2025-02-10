import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Aurora from "./aurora/Aurora";

function Layout() {
  return (
    <div className="App">
      <NavigationBar />
      <Aurora colorStops={["#50ff29", "#288d14", "#32ffb0"]} speed={0.5} />
      <div className="content">
        <Outlet /> <p>Test: Layout wird geladen</p>
        {/* Hier wird die jeweilige Seite eingefügt */}
      </div>
    </div>
  );
}

export default Layout;
