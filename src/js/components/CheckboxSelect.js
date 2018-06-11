import React, { Component } from "react";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "../../css/Button.css";

import { Radio } from "react-bootstrap";

class CheckboxSelect extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    console.log(this);
    const { handleCheckboxChange } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(this.value);
  };

  Select(data, index) {
    const { isChecked } = this.state;
    var rows = [];
    for (var i = 0; i < data.length; i++) {
      rows.push(
        <p>
          <input
            type="checkbox"
            name={index}
            id={i}
            label={data[i]}
            onChange={this.props.toggleCheckboxChange}
          />
          <label for={i}>{data[i]}</label>
        </p>
      );
    }
    return <div className="radioSelect-vertical">{rows}</div>;
  }
  render() {
    return this.Select(this.props.data, this.props.index);
  }
}

export default CheckboxSelect;
