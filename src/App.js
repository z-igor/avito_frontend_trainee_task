import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListNews } from "./layouts/listNews/ListNews";
import { OpenNews } from "./layouts/openNews/OpenNews";
// import Button from "./components/Button/Button";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news/:id">
          <OpenNews />
        </Route>
        <Route path="/">
          <ListNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
