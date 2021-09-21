import {useHistory} from 'react-router'

// const Contact = (props) => {
//     return (
//         <div>
//             <h1 style={{color:'green'}}>Contact Page</h1>
//             <button onClick={()=>props.history.push("/")}>Go to Home</button>
//         </div>
//     )
// }

// >>>>>useHistory hook yapisiyla kullanimi.
const Contact = () => {
    const history = useHistory();
    return (
        <div>
            <h1 style={{color:'green'}}>Contact Page</h1>
            <button onClick={()=>history.push("/about")}>Go to About</button>
        </div>
    )
}



export default Contact
