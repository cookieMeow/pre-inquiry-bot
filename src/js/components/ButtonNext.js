import React, { Component } from 'react';
import { Button } from "antd";
import 'antd/dist/antd.css';

class ButtonNext extends Component {
	render() {
		return (
			<Button 
				className="large-button main-button" href={ this.props.link }
				type="primary"
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
