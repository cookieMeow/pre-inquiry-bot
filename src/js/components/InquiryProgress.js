import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap';
import '../../css/InquiryProgress.css';

class InquiryProgress extends Component {  
	render() {
		console.log(this.props.progress)
		return (
			<div className="inquiry-progress-bar">
				<ProgressBar striped bsStyle="info" now={this.props.progress} />
			</div>
		);
	}
}

export default InquiryProgress;
