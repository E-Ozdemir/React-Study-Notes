import React from "react";
// import Header from "./components/Header";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <h1>React Router Dom Class</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/details/You must write hier something to see the id of details component!!!">Details</Link>
            </li>
            
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/details/:id" component={Details} />
          <Route  path="" component={NotFound}/>
        </Switch>

        {/* Artik bunlara ihtiyac yok linklemeyi route ile yapacagiz */}
        {/* <Home />
        <About />
        <Contact /> */}
      </div>
    </Router>
  );
};

export default App;
