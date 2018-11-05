import { POSTS_ADD, POSTS_SET_POSTS, POSTS_VIEW } from './constants';

export const INITIAL_STATE = {
  list: [],
  post: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_ADD:
      return {
        ...state,
        lists: [...state.lists, action.payload]
      };

    case POSTS_SET_POSTS:
      return {
        ...state,
        list: action.payload
      };

    case POSTS_VIEW:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
};
