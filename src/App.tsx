import { StudentData, StudentDefault } from "./components/StudentData.tsx";

function App() {
  return (
    <div>
      <h1>Student Data</h1>
      <StudentData name="Max" age={25} grade={1.7} />
      <StudentData name="Manu" age={26} grade={1.4} />
      <StudentDefault />
    </div>
  );
}

export default App;
