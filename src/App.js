import './App.css';
import Balance from './components/Balance';
import Transactions from './components/Transactions';
import {IncomeAndExpense} from './components/IncomeAndExpense';

function App() {
  return (
    <div className="App">
    <h1>Expense Tracker App using Redux Toolkit</h1>
    <Balance />
    <IncomeAndExpense />
    
      <Transactions />
    </div>
  );
}

export default App;
