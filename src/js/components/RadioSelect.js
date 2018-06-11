import React, { Component } from "react";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "../../css/Button.css";
import "../../css/Select.css";

import { Radio } from "react-bootstrap";

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
            type="radio"
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
            <input
              type="radio"
              name={index}
              id={i}
              className="radioSelect-long"
              value={data[i]}
              onChange={this.props.onChangeData}
            />
            <label for={i}>{data[i]}</label>
          </p>
        );
      }
      return <div className="Select-vertical">{rows}</div>;
    }
  }
  render() {
    return this.Select(this.props.data, this.props.index);
  }
}

export default RadioSelect;
