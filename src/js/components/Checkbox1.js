import React, { Component } from "react";
import { Checkbox } from 'antd';
import "../../css/Button.css";

class Checkbox1 extends Component {
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
        <Checkbox
          className="checkbox-options"
          type="checkbox"
          name={label}
          value={label}
          id={label}
          onChange={this.toggleCheckboxChange}
        >
        {label}</Checkbox>
    );
  }
  render() {
    return this.Select(this.props.label, this.props.index);
  }
}

export default Checkbox1;
