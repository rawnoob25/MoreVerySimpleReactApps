import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './NavBar'; 

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
      /*<div><img src = {logo} alt = 'logo' height = '200' style={{display:'block'}}/>Hello World</div>*/
    );
  }
}

export default App;
