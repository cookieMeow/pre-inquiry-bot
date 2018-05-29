import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../css/Button.css';

class MenuButton extends Component {
	render() {
		return (
			<a className="home-button menu-button glossy green" href={ this.props.link }>
				{ this.props.children }
			</a>
		);
	}
}

export default MenuButton;
