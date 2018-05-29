import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../css/Button.css';

class MenuButton extends Component {
	render() {
		return (
			<a className="menu-button glossy green">
				{ this.props.children }
			</a>
		);
	}
}

export default MenuButton;
