import React, { Component } from 'react';
import '../style/pc_index.less';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCIndex extends Component {
	render() {
		return (
			<div>
				<PCHeader/>
				<PCFooter/>
			</div>
		);
	}
}