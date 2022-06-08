import './App.css';
import { NotesProvider } from './pages/notes/context/NotesProvider';
import NotesPage from './pages/notes/Index';

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <NotesPage />
      </NotesProvider>
    </div>
  );
}

export default App;
