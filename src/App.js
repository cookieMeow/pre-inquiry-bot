import React, { Component } from 'react';

import './App.css';
import Wrapper from './js/components/Wrapper.js';
import InquiryContainer from './js/components/InquiryContainer.js';
import Question from './js/components/Question.js';
import Answer from './js/components/Answer.js';
import ButtonToolBar from './js/components/ButtonToolBar.js';
import InquiryProgress from './js/components/InquiryProgress.js';
import RadioSelect from './js/components/RadioSelect.js';
import Start from './js/components/Start.js';
import Inquiry from './js/components/Inquiry.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Wrapper>
						<Route path="/" component={Start}/>
						<Route path="/inquiry" component={Inquiry}/>
					</Wrapper>
				</div>
			</Router>
		);
	}
}

export default App;
