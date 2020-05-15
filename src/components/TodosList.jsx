import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TodosApi from '../api/todos.api';

const Todo = ({ todo }) => {
  const link = `/edit/${todo._id}`;
  return (
    <tr>
      <th>{todo.description}</th>
      <th>{todo.responsible}</th>
      <th>{todo.priority}</th>
      <th>{todo.completed ? "Completed" : "Not Completed"}</th>
      <th>
        <Link to={link}>Edit</Link>
      </th>
    </tr>
  );
};

export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.todosApi = new TodosApi();

    this.state = { todos: [] };
  }

  componentDidMount() {
    this.loadTodos();
  }

  async loadTodos() {
    const { data } = await this.todosApi.getList();
    this.setState({ todos: data });
  }

  todosList() {
    return this.state.todos.map((todo, i) => {
      return <Todo todo={todo} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todosList()}</tbody>
        </table>
      </div>
    );
  }
}
