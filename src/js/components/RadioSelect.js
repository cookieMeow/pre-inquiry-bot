import React, { Component } from "react";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Radio } from "antd";
import "../../css/Button.css";
import "../../css/Select.css";
import 'antd/dist/antd.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class RadioSelect extends Component {
  onChangeData = e => {
    if (this.props.data.length <= 3) {
      this.props.onChangeDataToggle(e);
    } else {
      this.props.onChangeData(e);
    }
  };
  Select(data, index) {
    if (data.length <= 3) {
      var rows = [];
      for (var i = 0; i < data.length; i++) {
        rows.push(
          <ToggleButton className="large-button" bsSize="large" value={data[i]}>
            {data[i]}
          </ToggleButton>
        );
      }
      return (
        <div>
          <ToggleButtonGroup

            name="options"
            defaultValue={""}
            onChange={this.onChangeData}
          >
            {rows}
          </ToggleButtonGroup>
        </div>
      );
    } else {
      var rows = [];
      for (var i = 0; i < data.length; i++) {
        rows.push(
          <p>
            <Radio
              size="large"
              className="radio-options"
              id={i}
              value={data[i]}
              onChange={this.props.onChangeData}
            >
            {data[i]}</Radio>
          </p>
        );
      }
      return <RadioGroup type="radio" name={index} className="radio-option-list">{rows}</RadioGroup>;
    }
  }
  render() {
    return this.Select(this.props.data, this.props.index);
  }
}

export default RadioSelect;
