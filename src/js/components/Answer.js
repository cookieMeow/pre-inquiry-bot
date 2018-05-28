import React, { Component } from 'react';
import '../../css/Answer.css';

class RadioSelect extends Component {  
	render() {
		return (
			<div className="answer-wrapper">
				{ this.props.children }
			</div>
		);
	}
}

export default RadioSelect;
