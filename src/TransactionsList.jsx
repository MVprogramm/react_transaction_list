import React from 'react';

import Transaction from './Transaction.jsx';

import './transactionsList.scss';

const TransactionsList = (props) => {
  return (
    <ul className='transactions'>
      { 
        props.transactions.map(
          transaction => (
            <Transaction key={transaction.id} {...transaction} />
          )
        )
      } 
    </ul>
  )
};

export default TransactionsList;

