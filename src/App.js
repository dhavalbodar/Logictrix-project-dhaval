import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Company from "./Components/Company";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./Components/User";
import { Button } from "@material-ui/core";

function App() {
  return (
    <>
      <Router>
        <div>
          <center>
            <div
              style={{
                width: "50%",
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/company">Company</Link>
              <Link to="/User">User</Link>
            </div>
          </center>
        </div>
        <div style={{ marginTop: 20 }}></div>
        <Switch>
          <Route exact path="/user" component={User} />
          <Route exact path="/" component={Home} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
