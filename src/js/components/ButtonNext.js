import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonNext extends Component {
	render() {
		return (
			<Button 
				className="large-button main-button" 
				bsStyle="success" 
				bsSize="large"
				onClick={ this.props.onClick }
			>
				下一步
			</Button>
		);
	}
}

export default ButtonNext;
