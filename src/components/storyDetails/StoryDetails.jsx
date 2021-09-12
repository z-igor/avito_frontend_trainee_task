import React, { useEffect, useState } from "react";
import * as Icons from "react-bootstrap-icons";

export function StoryDetails({data, c, size = 18, ...props}) {
  const [Icon, setIcon] = useState(Icons.CircleFill);

  useEffect(() => {
    setIcon(Icons[c]);
  }, [c]);

  return (
    <div className="story-details">
      <span className="story-details__div">
        <Icon size={size} />
      </span>
      <span className="">{data}</span>
    </div>
  );
}
