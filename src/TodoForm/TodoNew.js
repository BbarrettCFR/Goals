import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "../TodoForm/TodoNew.css";

const TodoNew = ({ saveTodo }) => {
  const [value, setValue] = useState("");
  return (
    <div className="todos">
      <h2 id="todo-header">Get these done. Get one step closer.</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          saveTodo(value);
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Add a task"
          margin="dense"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
        />{" "}
      </form>
      <button>Add Task</button>
    </div>
  );
};
export default TodoNew;
