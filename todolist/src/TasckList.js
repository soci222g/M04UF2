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

	itemList = () => {
		
		let counter = -1;
		let tasks = this.props.list.map( task => {
		counter++;
		return(
			<TasckItem  key={counter} text={task} time={this.props.listTime[counter]} onRemoveTask={this.props.onDeleteTask}/>	
		);
		});
		return tasks;
		}
 render(){
	const tasks = this.itemList();

		return(
		<List>
			{tasks}
		</List>
		);
	
	
	}


}

export default TasckList;
