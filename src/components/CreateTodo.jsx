import React, { Component } from 'react';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    const onChangeProp = this.onChangeProp.bind(this);
    this.onChangeFuncs = {
      description: onChangeProp("description"),
      responsible: onChangeProp("responsible"),
      priority: onChangeProp("priority"),
      completed: onChangeProp("completed"),
    };
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: "",
      responsible: "",
      priority: "",
      completed: false,
    };
  }

  onChangeProp(propName) {
    return (e) => this.setState({ [propName]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Description: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeFuncs.description}
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Responsible: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeFuncs.responsible}
              value={this.state.responsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                onChange={this.onChangeFuncs.priority}
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === "Low"}
              />
              <label class="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                onChange={this.onChangeFuncs.priority}
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.priority === "Medium"}
              />
              <label class="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                onChange={this.onChangeFuncs.priority}
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.priority === "High"}
              />
              <label class="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
