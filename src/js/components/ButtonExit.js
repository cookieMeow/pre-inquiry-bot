import React, { Component } from 'react';
import { Button } from "antd";
import 'antd/dist/antd.css';

class ButtonExit extends Component {

	render() {
		let toHome = "/";
		return (
			<Button 
				className="large-button main-button defualt-button" href={this.toHome}
				onClick={ this.props.onClick }
			>
				退卡
			</Button>
		);
	}
}

export default ButtonExit;
