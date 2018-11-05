import axios from 'axios';
import { API_URL } from '../../config';
import { POSTS_SET_POSTS, POSTS_VIEW } from './constants';

export const setPosts = posts => ({ type: POSTS_SET_POSTS, payload: posts });
export const viewPost = post => ({ type: POSTS_VIEW, payload: post });

const getAllPosts = () => {
  return dispatch => {
    axios.get(`${API_URL}/posts`).then(res => {
      dispatch(setPosts(res.data));
    });
  };
};

const getPost = id => {
  return dispatch => {
    axios.get(`${API_URL}/posts/${id}`).then(res => {
      dispatch(viewPost(res.data));
    });
  };
};

const addPost = data => {
  return dispatch => {
    axios.post(`${API_URL}/posts`, data);
  };
};

export default {
  getAllPosts,
  getPost,
  addPost
};
