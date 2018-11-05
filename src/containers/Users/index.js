import React, { Component } from 'react'
import { connect } from "react-redux";
import style from "./style.module.css";
import { bindActionCreators } from "redux";
import { findAllUsers } from "./UsersActions";

class Users extends Component {
  componentDidMount() {
    this.props.findAllUsers();
  }

  renderAllUsers() {
    return (
      <ul>
        {this.props.users.map((todo, index) => (
          <li key={index}>{todo.name}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className={style.todo}>
        Users
        {this.renderAllUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.users,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  findAllUsers
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Users);