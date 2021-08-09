import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent name="Ege"/>
      <FunctionalComponent name="Ela"/>
    </div>
  );
}
export default App;


