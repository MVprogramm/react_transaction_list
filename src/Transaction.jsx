import React from 'react';
import moment from 'moment';

import './transaction.scss';

const Transaction = ({rate, time, amount, to, from}) => {
  const assets = `${from}⟶${to}`;
  const date = moment(time).format('ll').split(',')[0];
  const hours = moment(time).format('LT').split(' ')[0];
  const sum = new Intl.NumberFormat('en-gb').format(amount);

  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{hours}</span>
      <span className="transaction__assets">{assets}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{sum}</span>
    </li>
  )
}

export default Transaction;