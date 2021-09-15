import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div className="text-center">
      <Spinner animation="grow" role="status" size="sm" />{" "}
      <Spinner animation="grow" role="status" size="sm" />{" "}
      <Spinner animation="grow" role="status" size="sm" />
    </div>
  );
}
