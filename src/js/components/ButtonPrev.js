import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../css/Button.css';

class ButtonPrev extends Component {
	render() {
		return (
			<Button 
				className="large-button main-button button-prev menu-button glossy" 
				bsSize="large"
				onClick={ this.props.onClick }
			>
				上一步
			</Button>
		);
	}
}

export default ButtonPrev;
