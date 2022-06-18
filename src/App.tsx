import './App.css';
import { TaskProvider } from './pages/tasks/context/TaskProvider';
import TasksPage from './pages/tasks/TasksPage';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <TasksPage />
      </TaskProvider>
    </div>
  );
}

export default App;
