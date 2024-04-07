import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = {
    height: "",
    width: "",
    backgroundColor: "",
  };
  const [formdata, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formdata) => ({ ...formdata, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox({ ...formdata, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          name="height"
          type="text"
          placeholder="Height"
          value={formdata.height}
          onChange={handleChange}
        />
        <label htmlFor="width">Width</label>
        <input
          id="width"
          name="width"
          type="text"
          placeholder="Width"
          value={formdata.width}
          onChange={handleChange}
        />
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          id="backgroundColor"
          name="backgroundColor"
          type="text"
          placeholder="Background color"
          value={formdata.backgroundColor}
          onChange={handleChange}
        />
        <button>Add a box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
