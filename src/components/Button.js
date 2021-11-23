import React from "react";

function Button({ label, onButtonClick }) {
  return <button onClick={onButtonClick}>{label}</button>;
}

export default Button;
