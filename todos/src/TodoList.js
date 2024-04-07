import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [things, setThings] = useState([]);
  const addTodo = (thingTodo) => {
    setThings((things) => [...things, thingTodo]);
  };
  const remove = (id) => {
    setThings((things) => things.filter((thing) => thing.id !== id));
  };

  const tasksToBeDisplayed = things.map((thing) => (
    <Todo
      key={thing.id}
      task={thing.todo}
      id={thing.id}
      handleRemove={remove}
    />
  ));

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>{tasksToBeDisplayed}</ul>
    </div>
  );
}

export default TodoList;
