import {useState,useEffect} from 'react'
import Card from './components/Card'
// import data from './data.json'
import axios from 'axios'

function App(){
  const [itemList,setitemList] =useState([]);

  useEffect(() => {
    // fetch('https://breakingbadapi.com/api/characters')
    // .then(response => response.json())
    // .then(data=>setitemList(data));
    axios.get('https://breakingbadapi.com/api/characters')
    .then((res)=> setitemList(res.data))
    //res ile bana object döndü. icerisinde data diye bir degisken var ve bilgileri ordan cekiyoruz.

  }, [])

  return(
    <div className='App'>
      <header className='header'>
        <img src="https://www.logolynx.com/images/logolynx/55/55a537ca9549600cf7d1d0b274b3bc61.png" alt="Breaking Bad Logo" />
      </header>
      <div className="cards">
        {itemList.map((item)=>(
          <Card key={item.char_id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default App