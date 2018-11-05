import axios from 'axios';
import { API_URL } from '../../config';
import { TODOS_ADD, TODOS_SET_TODOS } from './TodosReducers';

export const findAllTodos = () => {
  return dispatch => {
    axios.get(`${API_URL}/posts`).then(res => {
      if (res.status === 200) {
        dispatch({
          type: TODOS_SET_TODOS,
          payload: res.data.todos
        });
      }
    });
  };
};

export const add = body => {
  return dispatch => {
    axios.post(`${API_URL}/posts`, body).then(res => {
      if (res.status === 200) {
        dispatch({ type: TODOS_ADD, payload: res.data });
      }
    });
  };
};
