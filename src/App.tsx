import './App.css';
import { NotesProvider } from './pages/notes/context/NotesProvider';
import NotesPage from './pages/notes/Index';
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
