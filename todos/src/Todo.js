import React from "react";

function Todo({ id, task = "", handleRemove }) {
  const remove = () => {
    handleRemove(id);
  };

  return (
    <div>
      <li>{task}</li>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Todo;
