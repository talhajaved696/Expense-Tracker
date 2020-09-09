import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import Transaction from './components/Transaction'
import Add from './components/Add'
import GlobalProvider from './context/Globalstate'

function App() {
  return (
    <GlobalProvider>
      <div>
        < Header />
        <div className="container">
          <Balance />
          <Income />
          <Transaction />
          <Add />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
