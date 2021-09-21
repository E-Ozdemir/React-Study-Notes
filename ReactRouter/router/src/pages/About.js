import { useLocation } from "react-router"
const About = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <h1 style={{color:'red', }}>About Page</h1>
            <p>Current Location:{pathname}</p>
        </div>
    )
}

export default About
