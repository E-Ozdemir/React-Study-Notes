import React from 'react'

// storedaki state i almak icin;
import {useSelector,useDispatch} from 'react-redux'
import {increase,decrease,reset} from '../redux/Actions'



const ComponentA = () => {
    const myCounter = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    return (
        <div className='App' style={{backgroundColor: 'yellow', height:'35vh'}}>
            <h2>Comp A</h2>
            <h2>Count:{myCounter}</h2>
            <button onClick={()=>dispatch(increase())}>+</button>
            <button onClick={()=>dispatch(decrease())}>-</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}
// const ComponentA = () => {
//     const myCounter = useSelector((state)=>state.counter);
//     const dispatch = useDispatch();
//     return (
//         <div className='App' style={{backgroundColor: 'yellow', height:'35vh'}}>
//             <h2>Comp A</h2>
//             <h2>Count:{myCounter}</h2>
//             <button onClick={()=>dispatch({type:"INCREASE_COUNTER"})}>+</button>
//             <button onClick={()=>dispatch({type:"DECREASE_COUNTER"})}>-</button>
//             <button onClick={()=>dispatch({type:"RESET_COUNTER",payload: 0})}>Reset</button>
//         </div>
//     )
// }

export default ComponentA
