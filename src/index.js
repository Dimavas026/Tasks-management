import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox'
import './index.css'

var place = document.getElementById('root');

class Task extends React.Component {
	constructor() {
		super();
		this.state = {
			edit: false
		}
		this.edit = this.edit.bind(this);
		this.save = this.save.bind(this);
		this.delete = this.delete.bind(this);



	}
	 edit() {
	 	this.setState ({edit: true})
	}
	delete() {
		this.props.removeBlock(this.props.index);
	}
	save() {
		var message = this.refs.newTxt.value;
		this.props.updateBlock(message, this.props.index);		
		this.setState({edit: false})
	}
	renderSave() {
		return (
			<div className="Task">
				<div>{this.props.children}</div>
				<button onClick={this.edit}>Edit</button>
				<button onClick={this.delete}>Delete</button>
			</div>
		);
	}
	renderEdit() {
		return (
			<div className="Task">
				<div>
					<textarea ref="newTxt" >{this.props.children}</textarea>
				</div>
				<div>
					<button onClick={this.save}>Save</button>
				</div>
			</div>	
		);
	}
	render() {
		if (this.state.edit) {
			return this.renderEdit();
		} else {
			return this.renderSave();
		}
	}
}

class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: [
				"product 1",
				"product 2",
				"product 3"
			]
		};
		this.updateBlock = this.updateBlock.bind(this);
		this.removeBlock = this.removeBlock.bind(this);	
		this.renderAllTasks = this.renderAllTasks.bind(this);
		this.addBlock = this.addBlock.bind(this);
		
	}
	removeBlock(index) {
		var arr = this.state.tasks;
		arr.splice(index, 1);
		this.setState({
			tasks: arr
		});
	}
	updateBlock(text, index) {
		var arr = this.state.tasks;
		arr[index] = text;
		this.setState({
			tasks: arr
		})
	}
	renderAllTasks(item, index) {
		var a = this;
			return (
			<Task index={index}  updateBlock={this.updateBlock} removeBlock={this.removeBlock}>
				{item}
			</Task>
		)
	}
	addBlock(text) {
		var arr = this.state.tasks;
		arr.push(text);
		this.setState({
			tasks: arr
		})
	}
	render() {
		return(
			<div>
				<button onClick={this.addBlock.bind(null, 'default task')}>New task</button>			
					{this.state.tasks.map(this.renderAllTasks)}			
			</div>
		);
	}
}


ReactDOM.render(
	<div>
		<Container />
	</div>,
	place);