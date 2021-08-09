import logo from './logo.svg';
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import Card from './components/Card';
import Card2 from './components/Card2';

function App() {
  const motto = "Seni yenecegim react!!!!";
  return (

    //props----
    <div className="App">
      <Card2 name="Cody Pines" job="React Inst."/>
      <Card2 name="Emre Özdemir" job="Aviation Inst."/>
      <Card2 name="Efe Özdemir" job="React Inst."/>
    </div>



    //------------------
    // <div className="App">
    //   <h1>App Component</h1>
    //   <ClassComponent/>
    //   <FunctionalComponent/>
    //   {/* <ClassComponent name="Ege"/> */}
    //   {/* <FunctionalComponent name="Ela"/> */}
    // </div>
  );
}
export default App;


