import React, { useEffect, useState } from 'react';

import TodosApi from '../api/todos.api';
import TodoForm from './TodoForm';

const todoApi = new TodosApi();

const EditTodo = (props) => {
  const { id } = props.match.params;
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const loadTodo = async () => {
      const res = await todoApi.get(id);
      setTodo(res.data);
    };

    loadTodo();
  }, [id]);

  const updateTodo = async (todo) => {
    const res = await todoApi.edit(id, todo);
    setTodo(res.data);
  };

  return <TodoForm title="Edit Todo" onSubmit={updateTodo} todo={todo} />;
};

export default EditTodo;
