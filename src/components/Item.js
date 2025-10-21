import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleDeleteClick() {
    onDeleteItem(item.id);
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className="add" onClick={() => onUpdateItem({ ...item, isInCart: !item.isInCart })}>
        {item.isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}


export default Item;
