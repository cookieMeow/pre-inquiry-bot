import React, { Component } from 'react';
import ButtonPrev from './ButtonPrev.js';
import ButtonNext from './ButtonNext.js';
import ButtonExit from './ButtonExit.js';

import '../../css/ButtonToolBar.css'

class ButtonToolBar extends Component {  

	render() {
		return (
			<div className="button-tool-bar">
				<ButtonPrev onClick = {this.props.onPrevClick}/>
				<ButtonNext onClick = {this.props.onNextClick} />
				<ButtonExit/>
			</div>
		);
	}
}

export default ButtonToolBar;
