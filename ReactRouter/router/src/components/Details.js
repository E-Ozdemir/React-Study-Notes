import React from 'react'
import { useParams } from 'react-router'

// >>>>>match.params kullanimi


// const Details = (props) => {
//     return (
//         <div>
//             <h1 style={{color:'blue'}}>This is Details page!</h1>
//             <p>{props.match.params.id}</p>
//         </div>
//     )
// }

// useParams kullanimi

const Details = () => {
    const {id} =useParams();
    return (
        <div>
            <h1 style={{color:'blue'}}>This is Details page!</h1>
            <p>Details - {id}</p>
        </div>
    )
}

export default Details
