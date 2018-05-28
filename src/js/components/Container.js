import React, { Component } from 'react';
import '../../css/Container.css';

class Container extends Component {  
	render() {
		return (
			<div className="inquiry-container">
				{ this.props.children }
			</div>
		);
	}
}

export default Container;
