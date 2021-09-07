import React,{useState,useEffect} from 'react'

function CounterButton({initialCount}) {
    const [count,setCount] = useState((initialCount=0));
    useEffect(() => {
        console.log(`You clicked ${count} times`);
    });
    return (
        <>
            <p>Count:{count}</p>
            <button onClick={()=> setCount(initialCount)}>Reset</button>
            <button  onClick={()=> setCount(count+1)}>+</button>
            <button  onClick={()=> setCount(count-1)}>-</button>
        </>
    )
}

export default CounterButton;
