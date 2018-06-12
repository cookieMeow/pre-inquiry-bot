import React, { Component } from "react";
import MenuButton from "./MenuButton.js";
import ButtonExit from "./ButtonExit.js";
import "../../css/Button.css";
import "../../css/SelectInquiry.css";

class Inquiry extends Component {
  render() {
    return (
      <div>
        <div className="select-inquiry-left">
          <div className="select-button-left">
            <MenuButton link="/inquiry">预问诊</MenuButton>
          </div>
        </div>
        <div className="select-inquiry-right">
          <div className="select-button-right">
            <MenuButton>智能小七</MenuButton>
          </div>
        </div>
        <div className="select-inquiry-exit">
          <div>
            <ButtonExit>退卡</ButtonExit>
          </div>
        </div>
      </div>
    );
  }
}

export default Inquiry;
