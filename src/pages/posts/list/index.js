import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsActions from '../actions';

class PostsList extends Component {
  componentWillMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <p>
          <a href="/posts/add">New Post</a>
        </p>
        <ul>
          {this.props.posts.list.map(list => (
            <li>
              <p>
                <a href={`/posts/view/${list.id}`}>
                  <strong>{list.title}</strong>
                </a>
              </p>
              <p>{list.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllPosts: PostsActions.getAllPosts
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
