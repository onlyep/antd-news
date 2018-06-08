import React, { Component } from 'react';
import logoUrl from '../images/logo.png';
import { Row, Col, message, Menu, Icon, Button, Modal, Tabs, Form, Input } from 'antd';
import 'whatwg-fetch'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 18 }
};

export class PCHeader extends Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: true,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: ''
		};
	}

	handleClick = (e) => {
		if (e.key === 'register') {
			this.setState({ modalVisible: true });
		}
		this.setState({
			current: e.key
		});
	};
	handleOk = (e) => {
		console.log(e);
		this.setState({
			modalVisible: false
		});
	};
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			modalVisible: false
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		let myFetchOptions = {
			method: 'GET'
		};
		this.props.form.validateFields((err, values) => {
			if (!err) {
				fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=' + this.state.action
					+ '&username=' + values.userName + '&password=' + values.password
					+ '&r_userName=' + values.r_userName + '&r_password='
					+ values.r_password + '&r_confirmPassword='
					+ values.r_confirmPassword, myFetchOptions)
					.then(response => response.json())
					.then(json => {
						console.log(json);
						this.setState({ userNickName: json.NickUserName, userid: json.UserId });
					});
			}
			if (this.state.action === 'login') {
				this.setState({ hasLogined: true });
			}
			message.success('请求成功！');
			this.setState({ modalVisible: false });
		});
	};

	render() {
		const { getFieldProps } = this.props.form;
		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
				<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
				&nbsp;&nbsp;
				<Button type="dashed" htmlType="button">个人中心</Button>
				&nbsp;&nbsp;
				<Button type="ghost" htmlType="button">退出</Button>
			</Menu.Item>
			: <Menu.Item key="register" className="register">
				<Icon type="appstore"/>注册/登录
			</Menu.Item>;
		return (
			<header className="pc_header">
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a className="logo" href="/">
							<img src={logoUrl} alt="logo"/>
							<span>React News</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu onClick={this.handleClick} mode="horizontal" selectedKeys={[this.state.current]}>
							<Menu.Item key="top">
								<Icon type="appstore"/>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore"/>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"/>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"/>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"/>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore"/>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"/>科技
							</Menu.Item>
							<Menu.Item key="shishang">
								<Icon type="appstore"/>时尚
							</Menu.Item>
							{userShow}
						</Menu>
						<Modal
							title="登录注册"
							visible={this.state.modalVisible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}>
							<Tabs defaultActiveKey="1">
								<TabPane tab="登录" key="1">
									<Form layout="horizontal" onSubmit={this.handleSubmit}>
										<FormItem {...formItemLayout} label="用户名">
											<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
											       placeholder="请输入用户名" {...getFieldProps('userName')}/>
										</FormItem>
										<FormItem {...formItemLayout} label="密码">
											<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password"
											       placeholder="请输入密码" {...getFieldProps('password')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
								<TabPane tab="注册" key="2">
									<Form layout="horizontal" onSubmit={this.handleSubmit}>
										<FormItem {...formItemLayout} label="用户名">
											<Input placeholder="请输入用户名" {...getFieldProps('r_userName')}/>
										</FormItem>
										<FormItem {...formItemLayout} label="密码">
											<Input type="password" placeholder="请输入密码" {...getFieldProps('r_password')}/>
										</FormItem>
										<FormItem {...formItemLayout} label="确认密码">
											<Input type="password" placeholder="请再次输入密码" {...getFieldProps('r_confirmPassword')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	}
}

export default PCHeader = Form.create({})(PCHeader);