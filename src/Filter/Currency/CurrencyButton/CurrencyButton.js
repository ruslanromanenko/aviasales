import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = () => ({
  button: {
    height: '40px',
    width: '160px',
    color: '#2196f3',
    marginTop: '16px',
    marginBottom: '35px',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '18px',
    backgroundColor: 'white',
    border: '1px solid #d2d5d6',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#f2fcff',
      border: '1px solid #2196f3',
      color: '#2196f3'
    },
    '&:active': {
      backgroundColor: '#2196f3',
      color: 'white',
    }
  },
  active:{
    backgroundColor: '#2196f3',
    color: '#f2fcff'
  }
});

const CurrencyButton = props => {
  const {classes} = props;
  const cls = [classes.button];
  if(props.activeClass){
    cls.push(classes.active)
  }
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={props.onClickCurrency}
      className={cls.join(' ')}
      id={props.currency}
    >
      { props.currency }
    </Button>
  )
};

export default withStyles(styles)(CurrencyButton);