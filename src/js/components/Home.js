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
						<div className="home-banner-content">
							<h1 className="home-title-1">智能预问诊</h1>
							<img src="images/banner-img.png" />
							<h1 className="home-title-2">让看病更快捷 智能!</h1>
						</div>
					</div>
				</div>

				<div className="home-buttons-container">
					<div className="home-buttons-bar">
					<div className="home-button-div"><MenuButton link="/readcard">插卡签到</MenuButton></div>
					<div className="home-button-div"><MenuButton link="/inquiry">预问诊</MenuButton></div>
					<div className="home-button-div"><MenuButton>智能小七</MenuButton></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Inquiry;
