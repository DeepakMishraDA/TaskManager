import React from "react";

import Button from "@material-ui/core/Button";

function Buttons({ label, onButtonclick }) {
  return (
    <Button variant="contained" className="btn" onClick={onButtonclick}>
      {label}
    </Button>
  );
}

export default Buttons;
