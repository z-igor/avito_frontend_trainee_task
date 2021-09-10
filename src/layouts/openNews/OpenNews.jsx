import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// import "./style.scss";

export function OpenNews(props) {
  const news = useSelector((s) => s.news.newsList);
  const urlParams = useParams();
  const [gettedNews, setGettedNews] = useState([]);

  // const [oneNews, setOneNews] = useState([]);
  const oneNews = gettedNews.find((n) => n.id == urlParams.id);

  useEffect(() => {
    setGettedNews(news);
  }, [news]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Link to="/">
            <p>Home</p>
          </Link>
        </Col>
      </Row>
      {gettedNews[0] && (
        <>
          <Row>
            <Col className="test">
              <a href={oneNews.url} target="_blank" rel="noreferrer">
                {oneNews.url}
              </a>
            </Col>
          </Row>
          <Row>
            <Col>{oneNews.title}</Col>
          </Row>
          <Row>
            <Col>{oneNews.by}</Col>
            <Col>{oneNews.descendants}</Col>
            <Col>{Date(oneNews.time)}</Col>
          </Row>
        </>
      )}
      <div>Комменты</div>
    </Container>
  );
}

/* 
    ссылку на новость
    заголовок новости
    дату
    автора
    счётчик количества комментариев
    список комментариев в виде дерева

    Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
    Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
    На странице должна быть кнопка для принудительного обновления списка комментариев
    На странице должна быть кнопка для возврата к списку новостей

*/
