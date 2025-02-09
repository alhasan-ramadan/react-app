import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Aurora from "./components/aurora/Aurora";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Aurora colorStops={["#50ff29", "#288d14", "#32ffb0"]} speed={0.5} />
    </div>
  );
}

export default App;
