import React, { Component } from 'react';
import './App.css';
// import { Menu, Icon } from 'antd';
import PCIndex from './components/pc_header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	        <PCIndex/>
        </header>
      </div>
    );
  }
}

export default App;
