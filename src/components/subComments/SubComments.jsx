import React, { useEffect, useState } from "react";
import { getComments } from "../../API";
import { BtnShowComments } from "../buttonShowComments/BtnShowComments";

export function SubComments({ comment, ...props }) {
  const [gettedComs, setGetComs] = useState([]);
  const [isShow, setShow] = useState(false);

  // const onLoadCommentsClick = (e) => {
  //   setShowSubComs((prev) => !prev);
  // };

  useEffect(() => {
    if (isShow) {
      getComments(comment.kids, setGetComs);
    }
  }, [isShow, comment.kids]);

  return (
    <div className="subcomments">
      <span className="text-secondary">
        {comment.by} {comment.deleted && "(удален)"}
      </span>
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      <BtnShowComments setShow={setShow} kidsID={comment.kids} />
      {gettedComs !== undefined &&
        gettedComs.length !== 0 &&
        gettedComs.map((c, i) => <SubComments comment={c} keys={c.id} />)}
    </div>
  );
}
