import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="info" onClick={() => console.log("Click")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
