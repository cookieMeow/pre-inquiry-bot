import React, { Component } from 'react';
import '../../css/Container.css';

class InquiryContainer extends Component {  
	render() {
		return (
			<div className="inquiry-container">
				{ this.props.children }
			</div>
		);
	}
}

export default InquiryContainer;
