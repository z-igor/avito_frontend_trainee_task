import React, { useEffect, useState } from "react";
import { getComments } from "../../API";
// import Loader from "../../components/loader/Loader";

export function SubComments({ isShow, commentsID, ...props }) {
  // const [comments, setComments] = useState([]);
  const [gettedComs, setGetComs] = useState([]);
  const [showComs, setShowComs] = useState(false);

  const onLoadCommentsClick = (e) => {
    setShowComs((prev) => !prev);
  };

  useEffect(() => {
    if (isShow) {
      getComments(commentsID, setGetComs);
    }
  }, [commentsID, isShow]);

  return (
    <div>
      <div className="comments">
        {isShow &&
          gettedComs.map((c, i) => {
            return (
              <div keys={c.id} className="subcomments">
                <span className="text-secondary">
                  {c.by} {c.deleted && "(удален)"}
                </span>
                <p dangerouslySetInnerHTML={{ __html: c.text }} />
                {c.kids !== undefined && c.kids.length !== 0 && (
                  <button
                    className="btn btn-outline-secondary comments__btn-ans"
                    onClick={onLoadCommentsClick}
                  >
                    Ответов {c.kids.length}
                  </button>
                )}
                <SubComments isShow={showComs} commentsID={c.kids} />
              </div>
            );
          })}
      </div>
      {/* )} */}
    </div>
  );
}
