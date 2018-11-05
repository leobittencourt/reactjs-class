const INITIAL_STATE = {
  posts: []
};

export const TODOS_SET_TODOS = 'TODOS/SET-TODOS';
export const TODOS_ADD = 'TODOS/ADD';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_SET_TODOS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
