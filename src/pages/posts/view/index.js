import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsActions from '../actions';

class PostsView extends Component {
  componentWillMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Posts View</h1>
        <p>
          <a href="/posts">Back to Posts</a>
        </p>
        <p>
          <strong>Title</strong>
        </p>
        <p>{this.props.posts.post.title}</p>

        <p>
          <strong>Body</strong>
        </p>
        <p>{this.props.posts.post.body}</p>
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
      getPost: PostsActions.getPost
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsView);
