import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home.js';
import ReadCard from './ReadCard.js';
import StartContainer from './StartContainer.js';
import SelectInquiry from './SelectInquiry.js';
import '../../css/Button.css';

class Inquiry extends Component {
	render() {
		return (
			<Router>
				<StartContainer>
					<Route exact path="/" component={Home}/>
					<Route path="/readcard" component={ReadCard}/>
					<Route exact path="/select_inquiry" component={SelectInquiry}/>
				</StartContainer>
			</Router>
		);
	}
}

export default Inquiry;
