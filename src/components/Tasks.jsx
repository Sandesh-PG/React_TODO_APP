import React, { useState } from "react";

function Tasks(props) {
  const [isClicked, setIsClicked] = useState(false);

  function changeImage() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="task-container">
      <li style={{ textDecoration: isClicked ? "line-through" : "none" }}>
        <img
          className="tick"
          src={
            isClicked
              ? "https://cdn-icons-png.flaticon.com/128/1442/1442912.png"
              : "https://cdn-icons-png.flaticon.com/128/481/481078.png"
          }
          alt="error"
          onClick={changeImage}
        />
        <span> {props.value} </span>
        <button
          className="delete-btn"
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default Tasks;
