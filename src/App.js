import "./App.css";
import { Page } from "./components/Page";
import { TasksProvider } from "./contexts/tasksContext";

function App() {
  return (
    <TasksProvider>
      <div className="App">
        <Page />
      </div>
    </TasksProvider>
  );
}

export default App;
