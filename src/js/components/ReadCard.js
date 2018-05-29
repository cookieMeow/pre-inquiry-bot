import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ButtonExit from './ButtonExit.js'
import ButtonNext from './ButtonNext.js'
import '../../css/ReadCard.css';

class ReadCard extends Component {
	render() {
		return (
			<div className="read-card-container">
				<div className="banner">
					<Row>
						<Col>
							<p>请刷医保卡</p>
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
