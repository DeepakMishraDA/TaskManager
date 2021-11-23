import React from "react";

function Input({ inputHandler, inputValue }) {
  return <input type="text" onChange={inputHandler} value={inputValue} />;
}

export default Input;
