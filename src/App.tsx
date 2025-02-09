import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Aurora from "./components/aurora/Aurora";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <div className="App">
      <SplashCursor
        SPLAT_RADIUS={0.01}
        BACK_COLOR={{ r: 255, g: 255, b: 255 }}
        COLOR_UPDATE_SPEED={0.1}
      />
      <NavigationBar />
      <Aurora colorStops={["#50ff29", "#288d14", "#32ffb0"]} speed={0.5} />
    </div>
  );
}

export default App;
