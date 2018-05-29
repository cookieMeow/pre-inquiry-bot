import React, { Component } from 'react';
import '../../css/Container.css';

class StartContainer extends Component {  
	render() {
		return (
			<div className="start-container">
				{ this.props.children }
			</div>
		);
	}
}

export default StartContainer;
