import './App.css';
import { NotesProvider } from './pages/notes/context/NotesProvider';
import NotesPage from './pages/notes/Index';
import TasksPage from './pages/tasks/TasksPage';

function App() {
  return (
    <div className="App">
      {/* <NotesProvider> */}
        {/* <NotesPage /> */}
      {/* </NotesProvider> */}

      <TasksPage />
    </div>
  );
}

export default App;
