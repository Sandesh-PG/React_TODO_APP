import { useState } from "react";
import Tasks from "./Tasks";

function ToDoContainer() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    let newValue = event.target.value;
    setInputValue(newValue);
    console.log(inputValue);
  }

  function handleClick(event) {
    setTasks((prevTask) => {
      return [...prevTask, inputValue];
    });
    setInputValue("");
    event.preventDefault();
  }

  function deleteTask(id) {
    console.log("clicked");
    setTasks((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          TO-DO-LIST{" "}
          <img
            className="img-logo"
            src="https://cdn-icons-png.flaticon.com/128/3176/3176366.png"
            alt="todo-img"
          />
        </h2>

        <div className="row">
          <input
            onChange={handleChange}
            type="text"
            id="input-btn"
            placeholder="Add Your Text"
            value={inputValue}
          />
          <button onClick={handleClick} className="add-btn">
            Add
          </button>
        </div>

        <ul id="list-container">
          {tasks.map((todo, index) => (
            <Tasks id={index} key={index} value={todo} onChecked={deleteTask} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoContainer;
