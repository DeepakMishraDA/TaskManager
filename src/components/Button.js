import React from "react";

function Button({ label, onButtonClick }) {
  return (
    <div>
      <button onClick={onButtonClick}>{label}</button>
    </div>
  );
}

export default Button;
