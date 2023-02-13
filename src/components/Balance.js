import React from 'react'
import { useSelector } from 'react-redux';

export default function Balance() {
  const balance = useSelector((state) => state.transactions.balance)
  //const amount = transactions.map((transaction) => Number(transaction.amount));

  return (
    <div>
      Your Balance: <span>${balance}</span>
    </div>
  );
}
