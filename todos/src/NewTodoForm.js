import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ addTodo }) {
  const [todoData, setTodoData] = useState({ todo: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((todoData) => ({ ...todoData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...todoData, id: uuid() });
    setTodoData({ todo: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">todo</label>
        <input
          id="todo"
          type="text"
          name="todo"
          placeholder="todo"
          value={todoData.todo}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
