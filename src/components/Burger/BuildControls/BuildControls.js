import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <div>
      Total Price: $<strong>{props.price.toFixed(2)}</strong>
    </div>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.added(ctrl.type)}
        removed={() => props.removed(ctrl.type)}
        ingredientTypes={props.ingredientTypes}
      />
    ))}
    <button
      disabled={!props.noPurchase}
      className={classes.OrderButton}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
