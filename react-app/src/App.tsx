import ListGroup from "./components/ListGroup";
function App() {
  const items = [
    "New item",
    "Another item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Butter" />
    </div>
  );
}

export default App;
