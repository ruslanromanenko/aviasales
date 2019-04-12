import React from "react";
import CurrencyButton from "./CurrencyButton/CurrencyButton";
import classes from "./Currency.module.css";

const Currency = props => {
  const currencies = [
    'rub', 'usd', 'eur'
  ];
  return (
    <div className={classes.Currency}>
      <span>Валюта</span>
      <div className={classes.Currencies}>
      {
        currencies.map( ( currency, index ) => {
          return (
            <CurrencyButton
             key={index}
             currency={currency}
             activeClass={currency === props.currentCurrency}
             onClickCurrency={props.onClickCurrency}
            />
          )
        })
      }
      </div>
    </div>
  )
};

export default Currency;