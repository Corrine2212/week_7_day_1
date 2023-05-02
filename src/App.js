import './App.css';
import React, { useState } from 'react';


function App() {

  // for mvp:
  // const [items, setItems] = useState([
  //   "Buy shopping", "Clean bathroom", "Car's MOT"
  // ]);

  // for extension:
  // setting item state variables with array of objects
  const [items, setItems] = useState([
    {name: "Buy shopping", priority: "high" },
    {name: "Clean bathroom", priority: "low" },
    {name: "Car's MOT", priority: "high" },
  ])
  
  // state variables that hold name and priority
  const[newItemName, setNewItemName] = useState("")
  const[newItemPriority, setNewItemPriority] = useState("")
  
  // This maps through the array of items and generates li elements with class name based on it's priority level. If it's high it changes styling to red. If low it changes to green.
  const itemNodes = items.map((item, index) => {
    return(
      <li key={index} className={item.priority === "high" ? "high" : "low"}>
        <span>{item.name}</span>
        <span>{item.priority}</span>
      </li>
    )
  })

  // This handles the changes made in the input field
  const handleItemInput = (event) => {
    setNewItemName(event.target.value)
  }
  // This handles the changes to the radio buttons for item's priority 
  const handlePriorityChange = (event) => {
    setNewItemPriority(event.target.value)
    
  }

  // This state handles the form submissions for adding new items
  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items];
    copyItems.push({name: newItemName, priority: newItemPriority});
    setItems(copyItems);
    setNewItemName("")
  }

// this renders the component
  return (
    <div className="App">

      <h1>To Do</h1>
      <hr></hr>

      <form onSubmit={saveNewItem}>
        <input id="new-item" type="text" value={newItemName} onChange={handleItemInput}></input>
        <label htmlFor="new-item-high">High</label>
        <input id="new-item-high" name="priority" type="radio" value="high" onChange={handlePriorityChange}></input>
        <label htmlFor="new-item-low">Low</label>
        <input id="new-item-low" name="priority" type="radio" value="low" onChange={handlePriorityChange}></input>
        <input type="submit" value="Save Item"/>
      </form>


      <ul>
        {itemNodes}
      </ul>

    </div>
  );
}

export default App;
