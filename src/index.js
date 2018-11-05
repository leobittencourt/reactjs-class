import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router';

// Reducers
import reducers from './reducers';

// Pages
import Home from './pages/home';
import PostsList from './pages/posts/list';
import PostsAdd from './pages/posts/add';
import PostsView from './pages/posts/view';

// Components
import Navbar from './components/navbar';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostsList} />
          <Route exact path="/posts/add" component={PostsAdd} />
          <Route exact path="/posts/view/:id" component={PostsView} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
