import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import '../../css/Button.css';
import '../../css/Home.css';
import Holderjs from 'holderjs';

class Inquiry extends Component {
	render() {
		return (
			<div className="home-container">
				<div className="home-banner-container">
					<div className="home-banner">
						<h1 className="home-title-1">智能预问诊</h1>
						<img src="holder.js/250x300" />
						<h1 className="home-title-2">让看病更快捷 智能!</h1>
					</div>
				</div>

				<div className="home-buttons-container">
					<p><MenuButton link="/readcard">插卡签到</MenuButton></p>
					<p><MenuButton link="/inquiry">预问诊</MenuButton></p>
					<p><MenuButton>智能小七</MenuButton></p>
				</div>
			</div>
		);
	}
}

export default Inquiry;
