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


class App extends Component {
	render() {
		return (
			<div className="App">
				<Wrapper>
					<Start>
					</Start>
				</Wrapper>
			</div>
		);
	}
}

export default App;
