import React, { Component } from 'react';
import classes from "./App.module.css";
import plane from "./img/plane.png";
import Tickets from "./Tickets/Tickets";
import Filter from "./Filter/Filter";
import {tickets} from "./tickets.json";

class App extends Component {

  state = {
    stopsFilter: ['all'],
    currency: 'rub'
  };

  handleTransferChange = evt => {
    const name = evt.currentTarget.id;
    const value = evt.currentTarget.checked;
    const { stopsFilter } = this.state;

    if (!stopsFilter.includes(name) && value) {
      this.setState({
        stopsFilter: [...stopsFilter, name]
      });
      return
    }
    if(!value){
      this.setState({
        stopsFilter: stopsFilter.filter(stop => stop !== name)
      })
    }
  };

  getSortedTicketsByPrice = (tickets) => {
    const initialTickets = tickets;
    const mapped = initialTickets.map( (ticket, i) => {
      return {
        index: i, value: ticket.price
      }
    });
    mapped.sort(function(a, b) {
      if (a.value > b.value) {
        return 1; }
      if (a.value < b.value) {
        return -1; }
      return 0;
    });
    return mapped.map(function(el) {
      return initialTickets[el.index];
    });
  };

  getFilteredTickets = () => {
    const sortedTickets = this.getSortedTicketsByPrice(tickets);
    if(this.state.stopsFilter.includes('all')){
      return sortedTickets.map(ticket => {
        ticket.priceCurrency = this.getPriceInCurrency(ticket.price);
        return ticket
      });
    }
    return sortedTickets.reduce((acc, ticket) => {
      if(this.state.stopsFilter.includes(ticket.stops.toString())) {
        acc.push({
          ...ticket,
          priceCurrency: this.getPriceInCurrency(ticket.price)
        });
      }
      return acc;
    }, []);
  };

  handleCurrencyClick = evt => {
    this.setState({
      currency: evt.currentTarget.id
    });
  };

  getPriceInCurrency = price => {
    const rateUsd = 0.0155;
    const rateEur = 0.0138;
    const rateRub = 1;

    const options = { style: 'currency', currency: this.state.currency, minimumFractionDigits: 0 };
    const numberFormat = new Intl.NumberFormat('ru-RU', options);

    switch(this.state.currency){
      case 'rub':
        return numberFormat.format(price*rateRub);
      case 'usd':
        return numberFormat.format(Math.round(price*rateUsd));
      case 'eur':
        return numberFormat.format(Math.round(price*rateEur));
      default:
        return price
    }
  };

  handleOnlyClick = evt => {
    this.setState({
      stopsFilter: [evt.currentTarget.name]
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <header className={classes.Header}>
          <img src={plane} alt="plane"/>
        </header>
        <main className={classes.Main}>
          <Filter
            onTransferChange={this.handleTransferChange}
            onClickCurrency={this.handleCurrencyClick}
            checkedTransfer={this.state.stopsFilter}
            currentCurrency={this.state.currency}
            onClickOnly={this.handleOnlyClick}
          />
          <Tickets
            tickets={this.getFilteredTickets()}
            getPriceInCurrency={this.getPriceInCurrency}
          />
        </main>
      </div>
    );
  }
}

export default App;
