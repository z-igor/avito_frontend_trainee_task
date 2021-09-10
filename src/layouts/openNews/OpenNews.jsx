import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { House } from "react-bootstrap-icons";

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
    <Container className="mt-4">
      <Row>
        <Col sm={1} className="text-center">
          <Link to="/">
            <House color="black" size={24} />
          </Link>
        </Col>
        {gettedNews[0] && (
          <Col className="bg-light p-4">
            <Row>
              <Col className="">
                <a
                  href={oneNews.url}
                  className="text-black-50 text-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {oneNews.url}
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="story-title">{oneNews.title}</p>
              </Col>
            </Row>
            <Row className="text-secondary" xs="auto">
              <Col>
                <p>
                  от: <i>{oneNews.by}</i>
                </p>
              </Col>
              <Col>
                <p>
                  рейтинг: <i>{oneNews.descendants}</i>{" "}
                </p>
              </Col>
              <Col>
                <p>
                  дата: <i>{new Date(+oneNews.time * 1000).toLocaleDateString()}</i>
                </p>
              </Col>
            </Row>
            <Row>
              <div>Комменты</div>
            </Row>
          </Col>
        )}
      </Row>
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
