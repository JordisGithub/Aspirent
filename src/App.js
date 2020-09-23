import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Team from './Components/Team/Team'
import AboutUs from './Components/AboutUs/AboutUs'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Team />
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;
