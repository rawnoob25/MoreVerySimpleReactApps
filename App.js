import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './NavBar'; 
import {Elephant} from './Elephant';
import {List} from './List';
import {ToggleButton} from './ToggleButton';
class App extends React.Component {
  render() {
    const q = "The world is full of objects, more or less interesting; I do not wish to add any more";
    return (
      <div>
        <NavBar />
        <div id = 'hueblerDiv'>
          <h2>Douglas Huebler</h2>
          <img src = 'https://upload.wikimedia.org/wikipedia/en/a/a4/Douglas_Huebler.jpg' alt = 'Douglas Huebler' height = '400' />
          <blockquote>
            <p>
            The world is full of objects, more or less interesting; I do not wish to add any more.
            </p>
            <cite><a href = 'https://en.wikipedia.org/wiki/Douglas_Huebler' target='_blank'>Douglas Huebler Wikipedia Page</a></cite>
          </blockquote>
        </div>
        <Elephant specs={{height:'2.60 meters', weight:'3,000 kilograms', speed:'25 kilometers/hour'}} />
        <h2>Placental Mammals</h2>
        <p>Placental mammals have long gestation periods.</p>
        <List type = 'placental mammal'>
          <li>aardvark</li>
          <li>Elephant Shrew</li>
          <li>tenrec</li>
        </List>
        <h2>Marsupials</h2>
        <p>Marsupials have short gestation periods.</p>
        <List type = 'marsupial'>
          <li>kangaroo</li>
        </List>
        {
          /*class ToggleButton makes use of both this.state and this.setState*/
        }
        <ToggleButton />
      </div>
    );
  }
}

export default App;
