import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonExit extends Component {
	render() {
		return (
			<Button className="large-button main-button button-exit" bsSize="large">
				退卡
			</Button>
		);
	}
}

export default ButtonExit;
