import React from 'react';
import TasckItem from './TasckItem';
import List from '@mui/material/List';

class TasckList  extends React.Component{
	constructor (props){
		super(props);
			this.state = {
			items: this.props.list 
		};
	}

	render(){

		let counter = -1;
		const tasks = this.state.items.map( task => {
		counter++;
		return(
		<TasckItem text = {task} num_task={counter} onRemoveTask={this.props.onRemoveTask}/>
		);
		});

		return(
		<ol>
			{tasks}
		</ol>
		);
	
	
	}


}

export default TasckList;
