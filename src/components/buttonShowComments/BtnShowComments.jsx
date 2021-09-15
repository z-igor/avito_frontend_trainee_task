import React from "react";

export function BtnShowComments({ isShow, kidIDs, ...props }) {
  // const [showComs, setShowComs] = useState(false);

  const onLoadSubCommentsClick = (e) => {
    isShow((prev) => !prev);
  };

  return (
    kidIDs !== undefined &&
    kidIDs.length !== 0 && (
      <button
        className="btn btn-outline-secondary comments__btn-ans"
        onClick={onLoadSubCommentsClick}
      >
        Ответов {kidIDs.length}
      </button>
    )
  );
}
