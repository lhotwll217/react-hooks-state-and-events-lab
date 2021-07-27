import React from "react";
import Item from "./Item";
import { useState } from "react"

function ShoppingList({ items, selectChanger }) {

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectChanger} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
