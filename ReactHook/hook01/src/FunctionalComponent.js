import React,{useState,useEffect} from 'react';

const FunctionalComponent = () => {
    const [counter,setCounter] = useState(0);//initial deger burda veriliyor.
    useEffect(()=>{
        console.log('UseEffect');
        return()=>{console.log('func. comp. willUnmount');}
    },[counter]); //dependency, bagimlilik vermede array bossa useEffect icerigi sadece basta render edilir ve class yapisindaki ComponentDidMount() gibi calisir yani sadece ilk basta.Bagimlilik verince de ComponentDidUpdate() gibi calisir yani her güncellemede render edilir.

    // useEffect icerisinde arrow func ile return yazarsak bu,  class yapisindaki componentwillunmount a karsilik gelir.
  
    return (
        <div className='function'>
            <h2>Functional Component</h2>
            <p>Counter: {counter}</p>
            <button onClick= {()=>{setCounter(counter+1)}}>+</button>
            <button onClick= {()=>{setCounter(counter-1)}}>-</button>
        </div>
    )
}

export default FunctionalComponent;
