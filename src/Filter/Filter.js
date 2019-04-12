import React from "react";
import classes from "../Filter/Filter.module.css";
import Currency from "./Currency/Currency";
import Transfers from "./Transfers/Transfers";

const Filter = props => {
  return (
    <div className={classes.Filter}>
      <Currency
        onClickCurrency={props.onClickCurrency}
        currentCurrency={props.currentCurrency}
      />
      <Transfers
        onTransferChange={props.onTransferChange }
        checkedTransfer={props.checkedTransfer}
        onClickOnly={props.onClickOnly}
      />
    </div>
  );
};
export default Filter;