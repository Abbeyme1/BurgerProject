import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => {
  let btns = Object.keys(props.ingredients).map((i) => {
    return <BuildControl ingredient={i} inc={props.inc} dec={props.dec} />;
  });
  return <div>{btns}</div>;
};

export default buildControls;
