import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [lightDarkMode, setlightDarkMode] = useState(false)
  const [selectCategory, setSelectValue] = useState('All')

  const selectChanger = e => {
    setSelectValue(e.target.value)
    console.log(items.filter((item => item[selectCategory])))


  }







  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = lightDarkMode ? "App dark" : "App light"
  const lightDark = () => {
    setlightDarkMode(() => !lightDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={lightDark}>Dark Mode</button>
      </header>
      <ShoppingList selectChanger={selectChanger} items={items} />
    </div>
  );
}

export default App;
