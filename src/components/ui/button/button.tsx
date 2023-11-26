import React from "react";
import "./button.css";
import { WithChildren } from "../../../types/common";

interface ButtonProps extends WithChildren {}

function Button({ children }: ButtonProps) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}

export default Button;
