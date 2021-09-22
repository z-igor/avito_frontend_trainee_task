import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { House } from "react-bootstrap-icons";

import { getComments, fetchStory } from "../../API";
import Loader from "../../components/loader/Loader";
import { Comments } from "../../components/Comments/Comments";

export function OpenNews(props) {
  const news = useSelector((s) => s.news.newsList);
  // const seconds = useSelector((s) => s.news.newsSeconds);
  const urlParams = useParams();
  const [comments, setComments] = useState([]);
  const [oneNews, setOneNews] = useState({});

  useEffect(() => {
    if (news !== undefined) {
      let one = news.find((n) => n.id === +urlParams.id);

      if (one !== undefined) {
        setOneNews(news.find((n) => n.id === +urlParams.id));
      } else {
        fetchStory(+urlParams.id, setOneNews);
      }
    }
  }, [news]);

  useEffect(() => {
    if (oneNews !== undefined && oneNews.kids !== undefined) {
      getComments(oneNews.kids, setComments);
    }
  }, [oneNews]);

  return (
    <Container fluid className="my-4">
      <Row>
        <Col xs="auto" sm="auto" className="text-center">
          <Link to="/">
            <Button variant="light">
              <House color="black" size={24} />
            </Button>
          </Link>
        </Col>
        {!oneNews ? (
          <Loader />
        ) : (
          <Col xs={11} sm={11} className="bg-light p-4">
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
                  рейтинг: <i>{oneNews.score}</i>{" "}
                </p>
              </Col>
              <Col>
                <p>
                  дата: <i>{new Date(+oneNews.time * 1000).toLocaleString()}</i>
                </p>
              </Col>
            </Row>
            <Row>
              <p>Комментарии {!oneNews.kids ? 0 : oneNews.kids.length}</p>
            </Row>
            <Row>
              <div>
                {oneNews.kids !== undefined && comments[0] === undefined ? (
                  <Loader />
                ) : (
                  comments.map((c, i) => <Comments comment={c} keys={c.id} />)
                )}
              </div>
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
