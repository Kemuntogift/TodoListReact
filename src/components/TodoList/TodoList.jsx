import React, { useState } from "react";
import Form from "../Form/Form";
import Todo from "../Todos/Todo";
import "./todolist.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [handleSearch, setHandleSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const addTodo = (todo) => {
    const addedTodos = [todo, ...todos];

    setTodos(addedTodos);
    console.log(todo, ...todos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const searchItems = (searchValue) => {
    setHandleSearch(searchValue);
    if (handleSearch !== "") {
      const filteredData = todos.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(handleSearch.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(todos);
    }
  };

  return (
    <div className="forsearch">
      <input
        type="text"
        onChange={(e) => searchItems(e.target.value)}
        placeholder="Search"
      />
      <Form onSubmit={addTodo} />
      <div className="list-container">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}
