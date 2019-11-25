import React from 'react';
import logo from './logo.svg';
import PizzaList from './components/PizzaList'
import PizzaDetails from './components/PizzaDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PizzaList />
        <PizzaDetails />
      </header>
    </div>
  );
}

export default App;
