import React from "react";
import logo from "../../img/logo.png";
import classes from "../Ticket/Ticket.module.css";
import ButtonTicket from './ButtonTicket/ButtonTicket';

const Ticket = ({ticket}) => {
  return (
  <div className={classes.Ticket}>
    <div className={classes.LeftBlock}>
      <img src={logo} alt="logo"/>
      <ButtonTicket
        value={ticket.priceCurrency ? ticket.priceCurrency : ticket.price}
      />
    </div>
    <div className={classes.RightBlock}>
      <div className={classes.Departure}>
        <span className={classes.Time}>
          {ticket.departure_time}
        </span>
        <span className={classes.Name}>
          {ticket.origin + ',' + ticket.origin_name}
        </span>
        <span className={classes.Date}>
          {ticket.departure_date}
        </span>
      </div>
      <span className={classes.Stops}>
        {ticket.stops } пересадка
      </span>
      <div className={classes.Destination}>
        <span className={classes.Time}>
          {ticket.arrival_time }
        </span>
        <span className={classes.Name}>
          {ticket.destination_name + ',' +  ticket.carrier}
        </span>
        <span className={classes.Date}>
          {ticket.arrival_date}
        </span>
      </div>
    </div>
  </div>
  )
};
export default Ticket;