import axios from "axios";
import { NEWSCOUNT } from "../consts";

export async function getMaxItemId() {
  try {
    let r = await fetch("https://hacker-news.firebaseio.com/v0/maxitem.json");

    return await r.json();
  } catch (err) {
    console.error(err);
  }
}

export async function fetchNews(setData) {
  try {
    const ids = await axios.get(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );

    const newsPromises = ids.data
      .slice(0, NEWSCOUNT)
      .map((n) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${n}.json`)
      );

    const news = await Promise.all(newsPromises);

    setData(news.map((a) => a.data));
  } catch (err) {
    console.error(err);
  }
}
