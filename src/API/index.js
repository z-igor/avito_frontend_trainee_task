import axios from "axios";
import { NEWSCOUNT } from "../consts";

export const Axios = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
  // timeout: 4000,
});

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
    const ids = await Axios.get("newstories.json");

    const newsPromises = ids.data
      .slice(0, NEWSCOUNT)
      .map((n) => Axios.get(`item/${n}.json`));

    Promise.all(newsPromises).then((val) => {
      setData(val.map((a) => a.data));
    });
  } catch (err) {
    console.error("API error:", err);
  }
}

export async function getComments(kids, setData) {
  try {
    const comments = kids.map((c, i) => {
      return Axios.get(`item/${c}.json`);
    });

    Promise.all(comments).then((res) => {
      setData(res.map((r) => r.data));
    });
  } catch (err) {
    console.error("API error:", err);
  }
}

export function fetchStory(id, setData) {
  Axios.get(`item/${id}.json`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.error("API error:", err);
    });
}
