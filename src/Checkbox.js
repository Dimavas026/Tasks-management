import React from 'react'

export default class Checkbox extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: true
		}
		this.handlerCheck = this.handlerCheck.bind(this);
	}
	handlerCheck() {
		this.setState({checked: !this.state.checked})
	}
	render() {
		var message;
		if (this.state.checked) {
			message = 'checked';
		} else {
			message = 'not checked';
		}
		return (
			<div>
				<input type="checkbox" onChange={this.handlerCheck} defaultChecked={this.state.checked} />
				<p>{message}</p>
			</div>
		);
	}
}