import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  function HandleChange() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function HandleInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={HandleInputChange} type="text" value={inputText} />
        <button onClick={HandleChange}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
