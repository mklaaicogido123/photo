import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./About.js";
import Gallery from "./Gallery.js";
import Home from "./Home.js";
import Navbar from "./NavBar.js";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const NoMatchPage = () => {
  return <h3 className="homeTitle">404 - Not found</h3>;
};

ReactDOM.render(<App />, document.getElementById("root"));
