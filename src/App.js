import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
