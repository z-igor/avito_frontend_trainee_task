import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { ListNews } from "./layouts/listNews/ListNews";
import { OpenNews } from "./layouts/openNews/OpenNews";
import Button from "./components/Button/Button";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <p>
          <Link to="/">List</Link>
        </p>
        <p>
          <Link to="/open">News</Link>
        </p>
        <Button />
        <Switch>
          <Route path="/open">
            <OpenNews />
          </Route>
          <Route path="/">
            <ListNews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
