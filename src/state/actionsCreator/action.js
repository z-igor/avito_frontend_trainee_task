import { GET_NEWS } from "../actionTypes";

export const getNews = (news) => ({
  type: GET_NEWS,
  news,
});
