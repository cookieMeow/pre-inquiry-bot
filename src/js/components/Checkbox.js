import React, { Component } from "react";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "../../css/Button.css";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label);
  };

  Select(data, index) {
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <p>
        <input
          type="checkbox"
          name={label}
          value={label}
          id={label}
          onChange={this.toggleCheckboxChange}
        />
        <label for={label}> {label}</label>
      </p>
    );
  }
  render() {
    return this.Select(this.props.label, this.props.index);
  }
}

export default Checkbox;
