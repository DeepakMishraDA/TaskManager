import React from "react";

function Input({ setInput }) {
  return (
    <div>
      <input type="text" onChange={setInput} />
    </div>
  );
}

export default Input;
