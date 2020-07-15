import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props) => {
  var ing = props.ingredient;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{ing}</div>
      <button className={classes.Less} onClick={() => props.dec(ing)}>
        -
      </button>
      <button className={classes.More} onClick={() => props.inc(ing)}>
        +
      </button>
    </div>
  );
};

export default buildControl;
