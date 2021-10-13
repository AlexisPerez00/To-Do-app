import './App.css';
import {TaskProvider} from './context/TaskContext'
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Home/>
      </TaskProvider>
    </div>
  );
}

export default App;
