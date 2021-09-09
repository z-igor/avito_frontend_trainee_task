import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function OpenNews(props) {
  const news = useSelector((s) => s.news.newsList);
  const urlParams = useParams();
  const [thatNews] = news.filter((n) => n.id == urlParams.id);

  console.log(thatNews)

  return (
    <Container fluid>
      <Row>
        <Col>
          <Link to="/">
            <p>Home</p>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>{thatNews.url}</Col>
        <Col>{thatNews.title}</Col>
        <Col>{thatNews.time}</Col>
        <Col>{thatNews.descendants}</Col>
      </Row>
      <div>Комменты</div>
    </Container>
  );
}
