import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
    </div>
  );
}

export default App;

