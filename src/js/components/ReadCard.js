import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ButtonExit from './ButtonExit.js';
import ButtonNext from './ButtonNext.js';
import MenuButton from './MenuButton.js';
import '../../css/ReadCard.css';

class ReadCard extends Component {
	constructor(props) {
		super(props);
		this.state = { Text: "请刷医保卡...", isLoggedIn: false };

		// This binding is necessary to make `this` work in the callback
		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent(event) {
		this.setState(prevState => ({
			Text: "",
			isLoggedIn: true
		}));
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		let button = null;
		if (isLoggedIn) {
			button = (
				<MenuButton link="/select_inquiry" className="readcard-confirm-button">确定</MenuButton>
			);
		}

		let confirmation = null;
		if (isLoggedIn) {
			confirmation = (
			<div>
				<h2>请核对挂号信息</h2>
				<div className="confirmation-container">
					<p>患者姓名：张三</p>
					<p className="red">医生亚专业：呼吸内科</p>
					<p className="red">就诊科室：温江综合楼二楼诊断室10</p>
					<p>医生姓名：李四</p>
					<p>就诊时间：2018-07-07</p>
					<p>预计等待时间:40分钟</p>
					<p>挂号号码:0077</p>
				</div>
			</div>
			);
		}

		return (
			<div className="read-card-container" onMouseDown={ this.handleEvent }>
				<div className="banner">
					<Row>
						<Col>
							<p className="readcard-title">{this.state.Text}</p>
						</Col>
					</Row>
				</div>
				<Row>
					{confirmation}
				</Row>
				<div className="readcard-confirm-button">
					{button}
				</div>
			</div>
		);
	}
}

export default ReadCard;
