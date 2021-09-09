import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ListNews } from "./layouts/listNews/ListNews";
import { OpenNews } from "./layouts/openNews/OpenNews";
import { fetchNews } from "./API";
import { getNews } from "./state/actionsCreator/action";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  let [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNews(setNewsList);
  }, []);

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
