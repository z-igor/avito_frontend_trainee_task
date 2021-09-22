import React, { useEffect, useState } from "react";
import { getComments } from "../../API";
import { SubComments } from "../../components/subComments/SubComments";
import { BtnShowComments } from "../../components/buttonShowComments/BtnShowComments";

export function Comments({ comment, ...props }) {
  const [gettedComs, setGetComs] = useState([]);
  const [showComs, setShowComs] = useState(false);

  // const onLoadCommentsClick = (e) => {
  //   setShowComs((prev) => !prev);
  // };

  useEffect(() => {
    // console.log(comments);
    if (showComs) {
      getComments(comment.kids, setGetComs);
    }
  }, [showComs]);

  return (
    <section className="comments">
      <i className="text-secondary">
        {comment.by} {new Date(comment.time).toLocaleTimeString()}
      </i>
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      <BtnShowComments setShow={setShowComs} kidsID={comment.kids} />
      {gettedComs !== undefined &&
        gettedComs.length !== 0 &&
        gettedComs.map((c, i) => <SubComments comment={c} keys={c.id} />)}
    </section>
  );
}
