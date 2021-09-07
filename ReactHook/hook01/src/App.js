
import './App.css';
// import SongList from './components/SongList';
// import NameComponent from './components/UserChange';
// import CounterButton from './components/CounterButton';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import {useState} from 'react';

function App() {
  const [isVisible,setVisible]= useState(true);
  console.log('isVisible :>> ', isVisible);
  return (
    <div className="App">
      {/* <SongList/> */}
      {/* <CounterButton/> */}
      {/* <NameComponent/> */}
      <button onClick={()=>setVisible(!isVisible)}>Toogle</button>
      {/* <ClassComponent/> */}
      {true && <ClassComponent/>}
      {/* {isVisible && <ClassComponent/>} */}
      
      {/* class componenti gizleme, isVisible  false gelirse tirnak ici false olur ve gözükmez */}

      {isVisible ? <FunctionalComponent/> : null}

      {/* <FunctionalComponent/> */}
      
    </div>
  );
}

export default App;
