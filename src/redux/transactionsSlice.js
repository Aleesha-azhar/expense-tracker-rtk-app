import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState:{
        balance: 0,
        income: 0,
        expense: 0,
        items: []
    },
    reducers: {
        addTransaction: function(state, action){
            //console.log(action);
            if(action.payload.amount !== "number"){
                state.items.push(
                    {
                        text: action.payload.text,
                        amount: parseFloat(action.payload.amount),
                    }
                )
               // state.items.push( action.payload )
            }
           
        },
        calculateBalance: function(state, action) {

            state.balance = state.items.reduce(
                (acc, item) => acc + item.amount,
                 0
                 )
        },
        calculateIncome: function(state, action){
            state.income = state.items.reduce((acc, item) => {
                if(item.amount > 0) {
                    return Math.abs(acc + item.amount)
                }
             return acc
            }, 0)
        },
        calculateExpense: function(state, action) {
            state.expense = state.items.reduce((acc, item) => {
                if(item.amount < 0) {
                 return Math.abs(acc + item.amount)
                }
                return 0
            }, 0)
            
        },
           
  
        

       
    },
})

export const { addTransaction, calculateBalance, calculateIncome, calculateExpense  } = transactionsSlice.actions;
export default transactionsSlice.reducer;