import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <DismissableAlert onClose={() => setAlertVisible(false)}>
          my Alert
        </DismissableAlert>
      )}
      <Button color="dark" onClick={() => setAlertVisible(!alertVisible)}>
        Toggle Alert
      </Button>
    </div>
  );
}

export default App;
