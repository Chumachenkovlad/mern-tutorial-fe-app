import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = (props) => {
  const { onSubmit, todo, title } = props;
  const buttonTitle = todo._id ? "Edit Todo" : "Create Todo";

  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      description: todo.description,
      responsible: todo.responsible,
      priority: todo.priority,
    },
  });

  useEffect(() => {
    setValue("description", todo.description);
    setValue("responsible", todo.responsible);
    setValue("priority", todo.priority);
  }, [todo, setValue]);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="">Description: </label>
          <input
            name="description"
            type="text"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Responsible: </label>
          <input
            name="responsible"
            type="text"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              id="priorityLow"
              value="Low"
              ref={register}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              id="priorityMedium"
              value="Medium"
              ref={register}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priority"
              id="priorityHigh"
              value="High"
              ref={register}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {buttonTitle}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
