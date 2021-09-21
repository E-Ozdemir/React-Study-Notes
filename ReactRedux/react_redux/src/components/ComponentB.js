import React from 'react'
import { useSelector } from 'react-redux'


const ComponentB = () => {
    const myCounter = useSelector((state)=>state.counter)
    return (
        <div className='App' style={{backgroundColor: 'green',height:'35vh'}}>
            <h2>Comp B</h2>
            <h2>Count:{myCounter}</h2>
            
        </div>
    )
}

export default ComponentB
