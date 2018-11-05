import { combineReducers } from 'redux';
import postsReducer from './pages/posts/reducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
