import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

// const buildControls = (props) => {
//   let btns = Object.keys(props.ingredients).map((i) => {
//     return <BuildControl ingredient={i} inc={props.inc} dec={props.dec} />;
//   });
//   return <div className={classes.BuildControls}>{btns}</div>;
// };

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            inc={() => props.inc(ctrl.type)}
            dec={() => props.dec(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          ></BuildControl>
        );
      })}

      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
