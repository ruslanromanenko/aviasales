import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import classes from './TransferCheckbox.module.css';

const TransferCheckbox = props => {
  return (
    <div className={classes.CheckboxWrapper}>
      <FormControlLabel
        className={classes.FormControlLabel}
        control={
          <Checkbox
            checked={props.checkedTransfer}
            onChange={props.onTransferChange}
            value={props.transferKey}
            color="primary"
            id={props.transferKey}
            className={classes.Checkbox}
          />
        }
        label={props.label}
      />
      <button
        className={classes.Only}
        id={'only-'+props.transferKey}
        name={props.transferKey}
        onClick={props.onClickOnly}
      >
        только
      </button>
    </div>
  );
};

export default TransferCheckbox;