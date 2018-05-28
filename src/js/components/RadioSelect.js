import React, { Component } from 'react';
import { ToggleButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import '../../css/Button.css';

class RadioSelect extends Component {  
	render() {
		return (
			<div>
				<ToggleButtonGroup type="radio" name="options" defaultValue={''}>
					<ToggleButton className="large-button" bsSize="large" value={'m'}>男</ToggleButton>
					<ToggleButton className="large-button" bsSize="large" value={'f'}>女</ToggleButton>
				</ToggleButtonGroup>
			</div>
		);
	}
}

export default RadioSelect;
