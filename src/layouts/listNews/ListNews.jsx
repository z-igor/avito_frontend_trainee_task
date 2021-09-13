import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  ListGroup,
  Col,
  Row,
  Spinner,
  Button,
} from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";

import { StoryDetails } from "../../components/storyDetails/StoryDetails";
import { resetNewsSeconds } from "../../state/actionsCreator/action";

export function ListNews() {
  const dispatch = useDispatch();
  const { newsList } = useSelector((s) => s.news);
  let [news, setNews] = useState([]);
  let [disabled, setDisabled] = useState(false);

  const onUpdateNewsClick = (e) => {
    dispatch(resetNewsSeconds());

    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 6000);
  };

  // const onToggleDisableClick = (e) => {
  //   if (sReset) {
  //     setTimeout(() => {
  //       return true;
  //     }, 2000);
  //   }
  // };

  useEffect(() => {
    setNews(newsList);
  }, [newsList]);

  return (
    <Container fluid className="my-4">
      <Row>
        <Col sm={1} className="text-center">
          <div className="position-sticky">
            <Button
              variant="light"
              onClick={onUpdateNewsClick}
              disabled={disabled}
            >
              <ArrowClockwise color="black" size={24} />
            </Button>
          </div>
        </Col>
        <Col>
          <ListGroup variant="flush">
            {!newsList[0] ? (
              <div className="text-center">
                <Spinner animation="grow" role="status" size="sm" />{" "}
                <Spinner animation="grow" role="status" size="sm" />{" "}
                <Spinner animation="grow" role="status" size="sm" />
              </div>
            ) : (
              news.map((n, i) => {
                return (
                  <Link
                    to={`/news/${n.id}`}
                    key={n.id}
                    className="text-secondary n-underline"
                    tabIndex="-1"
                  >
                    <ListGroup.Item variant="light" action tabIndex="0">
                      {i + 1}){"  "}
                      <strong>({n.kids && n.kids.length})</strong>
                      <span >{n.title} </span>
                      <StoryDetails c="StarHalf" data={n.score} />
                      <StoryDetails c="PersonFill" data={n.by} />
                      <StoryDetails
                        c="Calendar3"
                        data={new Date(+n.time * 1000).toLocaleDateString()}
                      />
                    </ListGroup.Item>
                  </Link>
                );
              })
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

/*
    последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
    Каждая новость содержит:
        название
        рейтинг
    ник автора
    дату публикации
    По клику на новость происходит переход на страницу новости
    Список новостей должен автоматически обновляться раз в минуту без участия пользователя
    На странице должна быть кнопка для принудительного обновления списка новостей
  */
