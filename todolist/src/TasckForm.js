import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


class  TasckFrom extends React.Component{

	constructor(props){
	super(props);
		this.state = {
			task: ""	
	};
}

	render(){
		return (
		<form>
		<p><TextField variant='outlined' value={this.state.task} onChange={event => {

		this.setState({
			task:event.target.value
		});

		}} placeholder="escrive lo que sea"/></p>
		
		<Button variant='contained'type="button" onClick={() => {	
		if (this.state.task.trim() === ""){
			this.setState({
			task: ""
			});

			return;
		}

		this.props.onAddTask(this.state.task);
		this.setState({
			task: ""
		});
}}>+</Button>
		</form>
		);
	}


}

export default TasckFrom;
