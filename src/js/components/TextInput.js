import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import "../../css/TextInput.css";

class RadioSelect extends Component {
  render() {
    return (
      <div>
        <FormControl
          className="text-input-box"
          type="text"
          placeholder="请输入答案"
          onChange={this.props.onChangeData}
        />
      </div>
    );
  }
}

export default RadioSelect;
