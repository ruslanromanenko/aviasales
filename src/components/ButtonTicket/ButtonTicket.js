import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = () => ({
  button: {
    height: '55px',
    width: '160px',
    margin: 'auto',
    fontSize: '16px',
    lineHeight: '18px',
    textTransform: 'none',
    backgroundColor: '#ff6d00',
    '&:hover':{
      backgroundColor: '#ff8124',
    }
  }
});

const ButtonTicket = props => {
  const { classes } = props;
  return (
    <Button
      style={{marginTop: '20px'}}
      variant="contained"
      color="primary"
      onClick={props.onClick}
      className={classes.button}
    >
      Купить <br/> за {props.value}
    </Button>
  )
};

export default withStyles(styles)(ButtonTicket);