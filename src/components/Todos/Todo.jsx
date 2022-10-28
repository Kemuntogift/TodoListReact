import React, { useState } from "react";
import Form from "../Form/Form";
import { MdDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import "./todo.css";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
        id:null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>{" "}
      <div className="radio-buttons">
        <input type="radio" id="low" name="priority" value="Low" />
        <label for="low">Low</label>
        <br />
        <input type="radio" id="medium" name="priority" value="medium" />
        <label for="medium">Medium</label>
        <br />
        <input type="radio" id="high" name="priority" value="high" />
        <label for="high">High</label>
      </div>
      <div className="icons">
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
        <MdDeleteForever
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};
export default Todo;
