import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsActions from '../actions';

class PostsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.postAdd = this.postAdd.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
  }

  postAdd() {
    alert(JSON.stringify(this.state));
    this.props.addPost(this.state);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <p>
          <a href="/posts">Back to Posts</a>
        </p>

        <label>Title</label>
        <input type="text" onChange={this.handleTitle} />

        <label htmlFor="">Body</label>
        <input type="text" onChange={this.handleBody} />

        <button type="button" onClick={() => this.postAdd()}>
          ADD
        </button>
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
      getAllPosts: PostsActions.getAllPosts,
      addPost: PostsActions.addPost
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsAdd);
