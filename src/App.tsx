import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Email from "./components/Email";

const Home = React.lazy(() => import("./components/Home"));

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <NavLink to="/home" activeStyle={{ background: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ background: "green" }}>
              about
            </NavLink>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Cargando</div>}>
          <Switch>
            <Route path="/contact/email">
              <Email />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path="/about/:section">
              <About />
            </Route>
            <Route path="/*">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}
