import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Slider from './components/Slider';
import BootCamps from './components/BootCamps'
import Ranking from './components/Ranking'
import Cards from './components/Cards'
import Topics from './components/Topics'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
      <Slider />
      <BootCamps />
      <Ranking />
      <Cards />
      <Topics />
    </div>
  );
}

export default App;

