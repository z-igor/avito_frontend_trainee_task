import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { fetchNews } from "../../API";
// import { getNews } from "../../state/actionsCreator/action";
import { Container, ListGroup } from "react-bootstrap";
import { StarHalf, PersonFill, Calendar3 } from "react-bootstrap-icons";

export function ListNews() {
  const { newsList } = useSelector((s) => s.news);
  let [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsList);
  }, [newsList]);

  return (
    <Container fluid className="my-4">
      <ListGroup variant="flush">
        {news.map((n, i) => {
          return (
            <Link
              to={`/news/${n.id}`}
              key={n.id}
              className="text-secondary n-underline"
            >
              <ListGroup.Item variant="light" action>
                {i + 1}
                {"  "}
                <span>{n.title} </span>
                <div className="story-details">
                  <span className="story-details__div">
                    <StarHalf size={18} />
                  </span>
                  <span className="">{n.descendants}</span>
                </div>
                <div className="story-details">
                  <span className="story-details__div">
                    <PersonFill size={18} />
                  </span>
                  <span className="">{n.by}</span>
                </div>
                <div className="story-details">
                  <span className="story-details__div">
                    <Calendar3 size={18} />
                  </span>
                  <span className="">
                    {new Date(+n.time * 1000).toLocaleString()}
                  </span>
                </div>
              </ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
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
