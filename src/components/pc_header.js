import React, { Component } from 'react';
import logoUrl from '../images/logo.png'
import { Row, Col, Menu, Icon } from 'antd';

export default class PCHeader extends Component {
	constructor() {
		super();
		this.state = {
			current: 'toutiao',
		}
	}
	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	};
	render() {
		return (
			<header className="pc_header">
				<Row>
					<Col span={2}></Col>
					<Col span={3}>
						<a className="logo" href="/">
							<img src={logoUrl} alt="logo"/>
							<span>React News</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu onClick={this.handleClick} mode="horizontal" selectedKeys={[this.state.current]}>
							<Menu.Item key="toutiao">
								<Icon type="appstore" />头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore" />社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore" />国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore" />国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore" />娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore" />体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore" />科技
							</Menu.Item>
							<Menu.Item key="shishang">
								<Icon type="appstore" />时尚
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	}
}