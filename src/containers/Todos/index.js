import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.module.css';
import { bindActionCreators } from 'redux';
import { findAllTodos, add } from './TodosActions';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      completed: false
    };
    
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  componentDidMount() {
    this.props.findAllTodos();
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  add() {
    this.props.add(this.state);
  }

  render() {
    return (
      <div className={style.todo}>
        Todos
        <ul>
          {this.props.posts.map((todo, index) => (
            <li key={index}>{todo.description}</li>
          ))}
        </ul>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" onChange={this.onDescriptionChange} />
        
        <label htmlFor="completed">Completed ?</label>
        <input type="checkbox" name="completed" onChange={() => this.setState(prevState => ({ completed: !prevState.complete }))} />
        
        <button type="submit" onClick={() => this.add()}>
          Salvar
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.todos
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      findAllTodos,
      add
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
