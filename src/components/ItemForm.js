import React, { useState } from "react";

// ItemForm.js
function ItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({ name: "", category: "Produce" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      isInCart: false,
    };
    onAddItem(newItem); // <- must call this
    setFormData({ name: "", category: "Produce" });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}


export default ItemForm;
