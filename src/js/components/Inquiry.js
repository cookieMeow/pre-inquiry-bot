import "../../css/Button.css";
import "../../css/Select.css";

import React, { Component } from "react";

import Answer from "./Answer.js";
import ButtonToolBar from "./ButtonToolBar.js";
import Checkbox from "./Checkbox.js";
import fakeData from "./fakeData.jsx";
import InquiryContainer from "./InquiryContainer.js";
import InquiryProgress from "./InquiryProgress.js";
import Question from "./Question.js";
import RadioSelect from "./RadioSelect.js";
import TextInput from "./TextInput.js";
import { getEventHeadache } from "../../actions/SampleActions.js";

class Inquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCase: "头痛",
      index: 0,
      maxLength: 11,
      complete: false,
      summary: []
    };
  }

  onNextClick = e => {
    if (this.state.index < this.state.maxLength) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        complete: true
      });
    }
  };

  onPrevClick = e => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  onChangeData = e => {
    var index = this.state.index;
    var newSummary = this.state.summary;
    newSummary[index] = e.target.value;
    this.setState({ summary: newSummary });
  };

  onChangeDataToggle = e => {
    var index = this.state.index;
    var newSummary = this.state.summary;
    newSummary[index] = e;
    this.setState({ summary: newSummary });
  };

  handleCheckboxChange = label => {
    var index = this.state.index;
    var newSummary = this.state.summary;

    var selectedCheckboxes;
    if (this.state.summary[index] == undefined) {
      selectedCheckboxes = new Set();
    } else {
      selectedCheckboxes = this.state.summary[index];
    }
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
    newSummary[index] = selectedCheckboxes;
    this.setState({ summary: newSummary });
  };

  getQuestion(data) {
    let progress = parseInt((this.state.index / this.state.maxLength) * 100);
    if (data.type == "input") {
      return (
        <InquiryContainer>
          <InquiryProgress progress={progress} />
          <Question>{data.question}</Question>
          <Answer>
            <TextInput onChangeData={this.onChangeData} />
          </Answer>
          <ButtonToolBar
            onNextClick={this.onNextClick}
            onPrevClick={this.onPrevClick}
          />
        </InquiryContainer>
      );
    } else if (data.type == "choice") {
      return (
        <InquiryContainer>
          <InquiryProgress progress={progress} />
          <Question>{data.question}</Question>
          <Answer>
            <RadioSelect
              data={data.answer}
              index={this.state.index}
              onChangeData={this.onChangeData}
              onChangeDataToggle={this.onChangeDataToggle}
            />
          </Answer>
          <ButtonToolBar
            onNextClick={this.onNextClick}
            onPrevClick={this.onPrevClick}
          />
        </InquiryContainer>
      );
    } else if (data.type == "multichoice") {
      var rows = [];
      for (var i = 0; i < data.answer.length; i++) {
        rows.push(
          <Checkbox
            label={data.answer[i]}
            index={this.state.index}
            handleCheckboxChange={this.handleCheckboxChange}
            key={data.answer[i]}
          />
        );
      }
      return (
        <InquiryContainer>
          <InquiryProgress progress={progress} />
          <Question>{data.question}</Question>
          <Answer>
            <div className="Select-vertical" id={this.index}>
              {rows}
            </div>
          </Answer>
          <ButtonToolBar
            onNextClick={this.onNextClick}
            onPrevClick={this.onPrevClick}
          />
        </InquiryContainer>
      );
    }
  }

  showSummary() {
    var reportList = [];
    var summary = this.state.summary;
    for (var i = 0; i < summary.length; i++) {
      if (summary[i] === undefined) {
        continue;
      } else {
        if (fakeData[this.state.currentCase][i].type == "multichoice") {
          var str = "";
          for (const checkbox of summary[i]) {
            str += " " + checkbox;
          }
          reportList.push(
            fakeData[this.state.currentCase][i].summary.replace("%s", str)
          );
        } else {
          reportList.push(
            fakeData[this.state.currentCase][i].summary.replace(
              "%s",
              summary[i]
            )
          );
        }
      }
    }
    var report = reportList.join("\n");
    return (
      <InquiryContainer>
        <h1 className="summary-header">已完成预问诊,总结如下：</h1>
        <div className="summary-comtainer">
          <p>{report}</p>
        </div>
      </InquiryContainer>
    );
  }

  InquiryPage() {
    console.log(this.state.summary);
    if (!this.state.complete) {
      return this.getQuestion(
        fakeData[this.state.currentCase][this.state.index]
      );
    } else {
      return this.showSummary();
    }
  }

  render() {
    return this.InquiryPage();
  }
}

export default Inquiry;
