import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index'

class App extends Component {
	render() {
		return (
			<div className="App">
				<MediaQuery query="(min-device-width: 1224px)">
					<PCIndex/>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1224px)">
					<MobileIndex/>
				</MediaQuery>
			</div>
		);
	}
}

export default App;
