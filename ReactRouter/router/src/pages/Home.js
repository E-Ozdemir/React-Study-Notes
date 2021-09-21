import { useLocation } from "react-router"

// const Home = (props) => {
//     return (
//         <div>
//             <h1>Home Page</h1>
//             <p>Current URL: {props.location.pathname}</p>
//         </div>
//     )
// }
const Home = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <h1>Home Page</h1>
            <p>Current URL: {pathname}</p>
        </div>
    )
}

export default Home
