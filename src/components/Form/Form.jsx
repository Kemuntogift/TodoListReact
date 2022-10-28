import React, { useState } from "react";

import "./form.css";

export default function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 2000),
      text: input
    });
    setInput("");
  };
  return (
    <div class="formc">
      <div>
        <h3>Add Task</h3>
      </div>
      <div class="inputdiv">
        <form onSubmit={handleSubmit} class="todo-form">
          {props.edit ? (
            <>
              <input
                type="text"
                placeholder="Update/Edit"
                value={input}
                class="todo-edit"
                onChange={handleChange}
              ></input>
              <button onClick={handleChange} class="todo-button-edit">
                Update
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Add a Task"
                value={input}
                class="todo-input"
                onChange={handleChange}
              ></input>

              <button onClick={handleSubmit} class="todo-button">
                Submit
              </button>
            </>
          )}
        </form>
        <div class="select">
          <select name="priority" class="filter-todo">
            <option value="all">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
    </div>
  );
}
