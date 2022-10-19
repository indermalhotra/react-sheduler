import './App.css';
import Layout from './components/Layout';
import TaskContextProvider from './store/TaskContextProvider';

function App() {
  return (
    <TaskContextProvider><Layout/></TaskContextProvider>
  );
}

export default App;
