import React from "react";
import { getMaxItemId, getNewTopBestStories } from "../../API";
import {} from "../../"

async function onClick(e) {
  const maxItem = await getMaxItemId();
  const listStory = await getNewTopBestStories();
  console.log(maxItem);
  console.log(listStory);
}

export default function Button() {
  return <button onClick={onClick}>Get max ID</button>;
}
