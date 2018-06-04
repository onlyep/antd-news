import React, { Component } from 'react';
import logoUrl from '../images/logo.png'
import { Row, Col } from 'antd';

export default class MobileHeader extends Component {
	render() {
		return (
			<header className="mobile_header">
				<Row>
					<Col span={2}></Col>
					<Col span={3}>
						<a className="logo" href="/">
							<img src={logoUrl} alt="logo"/>
							<span>React News</span>
						</a>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	}
}