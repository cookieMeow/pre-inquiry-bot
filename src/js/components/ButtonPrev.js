import React, { Component } from "react";
import { Button } from "antd";
import 'antd/dist/antd.css';
import "../../css/Button.css";

class ButtonPrev extends Component {
  render() {
    return (
      <Button
        className="large-button main-button defualt-button"
        bsSize="large"
        onClick={this.props.onClick}
      >
        上一步
      </Button>
    );
  }
}

export default ButtonPrev;
