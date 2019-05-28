import React, { Component, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

function List() {
  const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

  const [todos, setTodos] = useState([
    { },
   
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default List;
