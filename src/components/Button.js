import React from "react";

function Button({ label, onButtonclick }) {
  return <button onClick={onButtonclick}>{label}</button>;
}

export default Button;
