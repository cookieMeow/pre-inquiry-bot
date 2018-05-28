import React, { Component } from 'react';

import './App.css';
import Wrapper from './js/components/Wrapper.js';
import Container from './js/components/Container.js';
import Question from './js/components/Question.js';
import Answer from './js/components/Answer.js';
import ButtonToolBar from './js/components/ButtonToolBar.js';
import InquiryProgress from './js/components/InquiryProgress.js';
import RadioSelect from './js/components/RadioSelect.js';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Wrapper>
					<Container>
						<InquiryProgress />
						<Question>
							请选择性别:
						</Question>
						<Answer>
							<RadioSelect />
						</Answer>
						<ButtonToolBar />
					</Container>
				</Wrapper>
			</div>
		);
	}
}

export default App;
