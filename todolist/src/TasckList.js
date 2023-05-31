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
		const tasks = this.props.list.map( task => {
		counter++;
		return(
			<TasckItem  text={task} time={this.props.timeTask[counter]} onRemoveTask={this.props.onRemoveTask}/>	
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
