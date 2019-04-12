import React from 'react';
import classes from "../Tickets/Tickets.module.css";
import Ticket from "./Ticket/Ticket";

const Tickets = ({ tickets }) => {
  return (
    <div className={classes.Tickets}>
    {
      tickets.map( ( ticket, index )=> {
        return (
          <Ticket
            key={index}
            ticket={ticket}
          />
        )
      })
    }
    </div>
  )
};
export default Tickets;