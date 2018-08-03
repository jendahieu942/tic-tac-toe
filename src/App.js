import React, { Component } from 'react';
import './App.css';
import { Game } from './Components/Game';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello Tic-Tac-Toe App</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
