import React from "react";

function Input({ setInput, inputValue }) {
  return (
    <div>
      <input type="text" onChange={setInput} value={inputValue} />
    </div>
  );
}

export default Input;
