import React, { Component } from 'react';
import Wrapper from './Wrapper.js';
import InquiryContainer from './InquiryContainer.js';
import Question from './Question.js';
import Answer from './Answer.js';
import ButtonToolBar from './ButtonToolBar.js';
import InquiryProgress from './InquiryProgress.js';
import RadioSelect from './RadioSelect.js';
import TextInput from './TextInput.js';
import fakeData from './fakeData.jsx';
import '../../css/Button.css';

class Inquiry extends Component {
	constructor(props) {
		super(props);
		this.state = { currentCase: "头痛", index: 0, maxLength: 11, complete:false };
	}

	onNextClick = (e) => {
		if (this.state.index < this.state.maxLength){
			this.setState({
				index: this.state.index + 1
			});
		}
		else {
			this.setState({
				complete: true
			});
		}	
		
	}

	onPrevClick = (e) => {
		if (this.state.index > 0){
			this.setState({
				index: this.state.index - 1
			});
		}
		
	}

	

	getQuestion(data) {
		let progress = parseInt(this.state.index / this.state.maxLength * 100);
		if (data.type == "input") {
			return (
				<InquiryContainer>
					<InquiryProgress progress={progress} />
						<Question>
							{data.question}
						</Question>
						<Answer>
							<TextInput />
						</Answer>
					<ButtonToolBar onNextClick={this.onNextClick} onPrevClick={this.onPrevClick}/>
				</InquiryContainer>
			);
		}
		else if (data.type == "choice") {
			return (
				<InquiryContainer>
					<InquiryProgress progress={progress} />
						<Question>
							{data.question}
						</Question>
						<Answer>
							<RadioSelect data={data.answer} index={this.state.index}/>
						</Answer>
					<ButtonToolBar onNextClick={this.onNextClick} onPrevClick={this.onPrevClick}/>
				</InquiryContainer>
			);
		}
	};

	InquiryPage() {
		console.log(this.state.complete)
		if (!this.state.complete) {
			return this.getQuestion(fakeData[this.state.currentCase][this.state.index]);
		}
		else {
			return (
				<InquiryContainer>
					<h1>已完成预问诊</h1>
				</InquiryContainer>
			);
		}
	}


	render() {
		return  this.InquiryPage();
	}
}

export default Inquiry;
