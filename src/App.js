import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ListNews } from "./layouts/listNews/ListNews";
import { OpenNews } from "./layouts/openNews/OpenNews";
import { fetchNews } from "./API";
import { getNews } from "./state/actionsCreator/action";
import { SECONDS } from "./consts";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [newsList, setNewsList] = useState([]);
  const [timer, setTimer] = useState(SECONDS);

  useEffect(() => {
    fetchNews(setNewsList);
  }, []);

  /* useEffect(() => {
    const startInterval = setInterval(() => {
      setTimer(timer - 1);
    }, 3);

    console.log(timer);

    return () => {
      clearInterval(startInterval);
    };
  }, [timer]); */

  useEffect(() => {
    dispatch(getNews(newsList));
  }, [newsList]);

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
