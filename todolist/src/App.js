import Title from './Title';
import TasckForm from './TasckForm';
import TasckList from './TasckList';
//import './App.css';
import './TODO.css';
import React from 'react';

import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';

class App extends React.Component{ 
  constructor (props) {
	super(props);

	this.state = {
	tasklist: [],
	tasklistID[],
	tasklistTime[]
	};

  }

  componentDidMount () {
	
	this.timePoint();
  }

  timePoint() = () => {
		fetch('http://192.168.1.139', { method: "GET"})
			.then(response => response.json())
		.then(info => this.createTasckList(data));
  }

createTasklist = (list) => {

	this.state.tasklistID = [];
	this.state.tasklist = [];
	this.state.tasklistTime = [];


	if (list.length <= 0) {
		return;
	}
	
	for (let i = 0; i < list.length; i++) {
		this.state.tasklistID.unshift(list[i]._id);
		this.state.tasklist.unshift(list[i].tasks);
		this.state.tasklistTime.unshift(list[i].time);
	}
	this.setState ({
		tasklistID: this.state.tasklistID,
		tasklist: this.state.tasklist,
		taskListTime: this.state.tasklistTime
	});

}

  addTask = (task) => {

 	fetch('http://192.168.1.37:8080', {
		method: "POST",
		body: '{"task":"' + task + '", "remove": "false"}'
	})
		.then(response => response.json())
		.then(data => this.fetchData());
}

 removeTask = (task) => {
  	
	fetch("192.168.1.139:3000", {
			method: "POST",
			body: '{"task":"' + task + '", "remove": "true"}'
		})
			.then(response => response.json)
			.then(info => this.timePoint());
	}


	 return (
	  <Box
	  	sx={{
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		background: 'linear-gradient(to right bottom, #10B2E6, #06DF4B)'
		}}

		>
	   	<Paper elevation={3}
		sx={{
			padding: '16px'
			}}
		>
		  <Title text="TO DO APP 2000"/>
	 	        <TasckForm onAddTask={this.addTask}/>
				<TasckList list={this.state.tasklist} onRemoveTask={this.removeTask}/>
	 		<p>number oftask tascks to do <strong>{this.state.tasklist.length}</strong></p> 	 
 	  	</Paper>
	  </Box>
 		 );
	}
}
export default App;
