import React from "react";

function Box({
  id,
  height = 8,
  width = 8,
  backgroundColor = "purple",
  handleRemove,
}) {
  const remove = () => {
    handleRemove(id);
  };
  return (
    <div>
      <div
        style={{ height: `${height}em`, width: `${width}em`, backgroundColor }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;
