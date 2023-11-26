import React from "react";
import { WithChildren } from "../../../types/common";
import "./style.css";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small"
};

interface TitleProps extends WithChildren {
  size: string
}

function Title({ size, children }: TitleProps): JSX.Element {
  return <h1 className={`title${size ? ` title_${size}` : ""}`}>
    {children}
  </h1>;
}

export default Title;
