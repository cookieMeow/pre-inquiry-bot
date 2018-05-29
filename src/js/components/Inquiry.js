import React, { Component } from 'react';
import Wrapper from './Wrapper.js';
import InquiryContainer from './InquiryContainer.js';
import Question from './Question.js';
import Answer from './Answer.js';
import ButtonToolBar from './ButtonToolBar.js';
import InquiryProgress from './InquiryProgress.js';
import RadioSelect from './RadioSelect.js';
import '../../css/Button.css';

class Inquiry extends Component {
	render() {
		return (

			<InquiryContainer>
				<InquiryProgress />
				<Question>
					请选择性别:
				</Question>
				<Answer>
					<RadioSelect />
				</Answer>
				<ButtonToolBar />
			</InquiryContainer>

		);
	}
}

export default Inquiry;
