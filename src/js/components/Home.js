import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import '../../css/Button.css';
import '../../css/Home.css';

class Inquiry extends Component {
	render() {
		return (
			<div className="home-container">
				<div className="home-banner-container">
					<div className="home-banner">
						<h1>关爱健康</h1>
						<h1>享受生活</h1>
					</div>
				</div>

				<div className="home-buttons-container">
					<p><MenuButton>插卡签到</MenuButton></p>
					<p><MenuButton>预问诊</MenuButton></p>
					<p><MenuButton>智能小七</MenuButton></p>
				</div>
			</div>
		);
	}
}

export default Inquiry;
