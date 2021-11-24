import React from "react";

function Input({ inputHandler, inputValue }) {
  return (
    <input
      className="input"
      placeholder="type something"
      type="text"
      onChange={inputHandler}
      value={inputValue}
    />
  );
}

export default Input;
