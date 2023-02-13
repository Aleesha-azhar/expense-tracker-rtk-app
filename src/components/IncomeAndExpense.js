import React from 'react'
import { useSelector } from 'react-redux'

export const IncomeAndExpense = () => {
  const income = useSelector((state) => state.transactions.income)
  const expenses = useSelector((state) => state.transactions.expense)
  return (
    <div>
        <div>
        Expenses<div></div>
        <span>$ {expenses}</span>
        </div>
        <div>
        Income<div></div>
        <span>$ {income}</span>
        </div>
    </div>
  )
}
