import { GET_NEWS, RESET_NEWS_SECONDS, SET_NEWS_SECONDS } from "../actionTypes";

export const getNews = (news) => ({
  type: GET_NEWS,
  news,
});

export const resetNewsSeconds = (news) => ({
  type: RESET_NEWS_SECONDS,
  action: undefined,
});

export const setNewsSeconds = (seconds) => ({
  type: SET_NEWS_SECONDS,
  seconds,
});
