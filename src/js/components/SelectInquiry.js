import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import ButtonExit from './ButtonExit.js';
import '../../css/Button.css';
import '../../css/SelectInquiry.css';

class Inquiry extends Component {
	render() {
		return (
			<div>
				<div className="select-inquiry-left">
					<p><MenuButton>预问诊</MenuButton></p>
				</div>
				<div className="select-inquiry-right">
					<p><MenuButton>智能小七</MenuButton></p>
				</div>
				<div className="select-inquiry-exit">
					<p><ButtonExit>退卡</ButtonExit></p>
				</div>

			</div>
		);
	}
}

export default Inquiry;
