import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonExit extends Component {
	render() {
		return (
			<Button 
				className="large-button main-button button-exit menu-button glossy" 
				bsSize="large"
				onClick={ this.props.onClick }
			>
				退卡
			</Button>
		);
	}
}

export default ButtonExit;
