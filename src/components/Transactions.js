import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, calculateBalance, calculateIncome, calculateExpense } from '../redux/transactionsSlice';

export default function Transactions() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const transactions = useSelector((state) => state.transactions.items)
  
  //console.log(title, description);

  const dispatch = useDispatch();

  return (
    <div>
        <div className='form'>
            <input
             type="text"
             value={text}
              placeholder='enter transaction name'
              onChange={(e) => setText(e.target.value)}
              />
            <input type="number"
            value={amount}
             placeholder='enter amount'
             onChange={(e) => setAmount(e.target.value)}
             />
            <button onClick={() => {
                dispatch(addTransaction({id: transactions.length + 1, text, amount}));
                dispatch(calculateBalance());
                dispatch(calculateIncome());
                dispatch(calculateExpense());
                setText("");
                setAmount();

              
                  
                                
            }}>Add Transaction</button>
                {/*dispatch(addTransaction({id: transactions.length + 1, text, amount}));*/}

        </div>

        <div className='Posts'>
            {transactions.length > 0 ? transactions.map(transaction => <div key={transaction.id} className='post'>
                  <h1>Transactions</h1>
                  <h2>{transaction.text}</h2>
                  <p>{transaction.amount}</p>
                </div>): 'There is no transactions'}
           </div>
    
  
    



        </div>
        
        

  )


}
