import React from "react";

function Input({ inputHandler, inputValue }) {
  return (
    <div>
      <input type="text" onChange={inputHandler} value={inputValue} />
    </div>
  );
}

export default Input;
