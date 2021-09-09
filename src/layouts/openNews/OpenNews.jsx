import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function OpenNews() {
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
        <Col>Cras justo odio</Col>
      </Row>
    </Container>
  );
}
