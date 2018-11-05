const INITIAL_STATE = {
  users: []
};

export const USERS_SET_USERS = 'USERS_SET-USERS';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_SET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}