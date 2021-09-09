import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../API";
import { getNews } from "../../state/actionsCreator/action";
import { Container, ListGroup } from "react-bootstrap";

export function ListNews() {
  const dispatch = useDispatch();
  const { newsList } = useSelector((s) => s.news);

  let [getNewsList, setGetNewsList] = useState([]);

  useEffect(() => {
    fetchNews(setGetNewsList);
  }, []);

  useEffect(() => {
    dispatch(getNews(getNewsList));
  }, [newsList]);

  return (
    <Container>
      {getNewsList.map((n, i) => {
        return (
          <ListGroup>
            <ListGroup.Item>
              <Link to={`/news/${n.id}`} key={n.id}>
                <p>{n.title}</p>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </Container>
  );
}
