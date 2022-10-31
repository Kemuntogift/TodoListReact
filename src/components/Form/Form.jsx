import React, { useState, useEffect, useRef } from "react";

import "./form.css";

export default function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
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
    
      <div class="inputdiv">
        <form onSubmit={handleSubmit} class="todo-form">
          {props.edit ? (
            <>
              <input
                name="text"
                placeholder="Update/Edit"
                value={input}
                ref={inputRef}
                class="todo-input edit"
                onChange={handleChange}
              ></input>
              <button onClick={handleChange} class="todo-button-edit">
                Update
              </button>
            </>
          ) : (
            <>
              <div class="inp">
                <input
                  name="text"
                  placeholder="Add a Task"
                  value={input}
                  ref={inputRef}
                  class="todo-input"
                  onChange={handleChange}
                ></input>
                <button onClick={handleSubmit} class="todo-button">
                  Add Task
                </button>
                
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
