import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (boxSpec) => {
    setBoxes((boxes) => [...boxes, boxSpec]);
  };
  const handleRemove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const displayedBoxes = boxes.map((box) => (
    <Box
      id={box.id}
      key={box.id}
      height={box.height}
      width={box.width}
      backgroundColor={box.backgroundColor}
      handleRemove={handleRemove}
    />
  ));
  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {displayedBoxes}
    </div>
  );
}

export default BoxList;
