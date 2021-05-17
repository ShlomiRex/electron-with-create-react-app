import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Terminal } from 'xterm';
import '../node_modules/xterm/css/xterm.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">
          Hello Electron! Shlomid
        </p>
		<div id="terminal"></div>
      </div>
    );
  }

  componentDidMount() {
	console.log("Test")

	var term = new Terminal();
	term.open(document.getElementById("terminal"));
	term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }
}

export default App;
