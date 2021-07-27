import React from "react";
import { useState } from 'react'



function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const liClass = inCart ? "in-cart " : "li"

  const buttonHandler = () => {
    setInCart(!inCart)
  }


  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={buttonHandler} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
