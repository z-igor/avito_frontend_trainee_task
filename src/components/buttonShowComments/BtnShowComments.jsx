import React from "react";

export function BtnShowComments({ setShow, kidsID, ...props }) {
  const onLoadSubCommentsClick = (e) => {
    setShow((prev) => !prev);
  };

  return (
    kidsID !== undefined &&
    kidsID.length !== 0 && (
      <button
        className="btn btn-outline-secondary comments__btn-ans"
        onClick={onLoadSubCommentsClick}
      >
        Ответов {kidsID.length}
      </button>
    )
  );
}
