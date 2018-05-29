import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ButtonExit from './ButtonExit.js'
import ButtonNext from './ButtonNext.js'
import '../../css/ReadCard.css';

class ReadCard extends Component {
	constructor(props) {
		super(props);
		this.state = { Text: "请刷医保卡" };

		// This binding is necessary to make `this` work in the callback
		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent(event) {
		this.setState(prevState => ({
			Text: "刷卡成功"
		}));
	}

	render() {
		return (
			<div className="read-card-container" onMouseDown={ this.handleEvent }>
				<div className="banner">
					<Row>
						<Col>
							<p>{this.state.Text}</p>
						</Col>
					</Row>
				</div>
				<Row>
					<Col xs={6}>
						<ButtonNext/>
					</Col>
					<Col xs={6}>
						<ButtonExit/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ReadCard;
