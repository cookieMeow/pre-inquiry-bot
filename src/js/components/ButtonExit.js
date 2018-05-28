import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonExit extends Component {
	render() {
		return (
			<Button className="large-button main-button" bsStyle="danger" bsSize="large">
				退卡
			</Button>
		);
	}
}

export default ButtonExit;
