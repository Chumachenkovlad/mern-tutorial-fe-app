import React from 'react';

import TodosApi from '../api/todos.api';
import TodoForm from './TodoForm';

const todosApi = new TodosApi();

const CreateTodo = () => {
  const createTodo = (todo) => todosApi.create(todo);

  return <TodoForm title="Create Todo" onSubmit={createTodo} todo={{}} />;
};

export default CreateTodo;
