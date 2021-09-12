import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ListNews } from "./layouts/listNews/ListNews";
import { OpenNews } from "./layouts/openNews/OpenNews";
import { fetchNews } from "./API";
import { getNews, setNewsSeconds } from "./state/actionsCreator/action";
import { SECONDS } from "./consts";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { S, sReset } = useSelector((s) => s.news.newsSeconds);
  const [newsList, setNewsList] = useState([]);
  const [timerSeconds, setTimerSeconds] = useState(S);
  let interval;

  const countDown = () => {
    interval = setInterval(() => {
      setTimerSeconds((prev) => {
        prev = prev !== 1 ? prev - 1 : SECONDS;
        return prev;
      });
    }, 1000);
  };

  useEffect(() => {
    fetchNews(setNewsList);
    countDown();

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    dispatch(setNewsSeconds(timerSeconds));

    if (sReset === true) {
      fetchNews(setNewsList);

      dispatch(getNews(newsList));
      dispatch(setNewsSeconds(S));
      setTimerSeconds(S);

      clearInterval(interval);
    }

    if (S === 1) {
      fetchNews(setNewsList);
      dispatch(getNews(newsList));
      // dispatch(setNewsSeconds(S));
      // setTimerSeconds(S);

      // clearInterval(interval);
    }
  }, [timerSeconds]);

  useEffect(() => {
    dispatch(getNews(newsList));
  }, [newsList]);

  return (
    <Router>
      <p className="d-none">Секунды: {S}</p>
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
