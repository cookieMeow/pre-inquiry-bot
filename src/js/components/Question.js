import React, { Component } from 'react';
import '../../css/Question.css';

class Question extends Component {  
	render() {
		return (
			<div className="question">
				{ this.props.children }
			</div>
		);
	}
}

export default Question;
