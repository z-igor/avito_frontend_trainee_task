import { SECONDS } from "../../consts";
import { GET_NEWS, RESET_NEWS_SECONDS, SET_NEWS_SECONDS } from "../actionTypes";

const initialState = {
  newsSeconds: {
    S: SECONDS,
    sReset: false,
  },
  newsList: [],
};

export const creatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS: {
      return {
        ...state,
        newsList: action.news,
      };
    }
    case SET_NEWS_SECONDS: {
      return {
        ...state,
        newsSeconds: {
          S: action.seconds,
          sReset: false,
        },
      };
    }
    case RESET_NEWS_SECONDS: {
      return {
        ...state,
        newsSeconds: {
          S: SECONDS,
          sReset: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
