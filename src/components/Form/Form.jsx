import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div class="formc">
      <div>
        <h3>Add Task</h3>
      </div>
      <div class="inputdiv">
        <input type="text" class="todo-input"></input>
        <div class="select">
          <select name="priority" class="filter-todo">
            <option value="all">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}
