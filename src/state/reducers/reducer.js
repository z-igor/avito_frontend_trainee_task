import { GET_NEWS } from "../actionTypes";

const initialState = {
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
    default: {
      return state;
    }
  }
};
