import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { fetchNews } from "../../API";
// import { getNews } from "../../state/actionsCreator/action";
import { Container, ListGroup } from "react-bootstrap";

export function ListNews() {
  const { newsList } = useSelector((s) => s.news);
  let [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsList);
  }, [newsList]);

  return (
    <Container>
      <ListGroup>
        {news.map((n, i) => {
          return (
            <ListGroup.Item key={n.id}>
              {i + 1}
              {"  "}
              <Link to={`/news/${n.id}`}><span text='test'>{n.title}</span></Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}
