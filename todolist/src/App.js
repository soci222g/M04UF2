

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
	tasklist: ["lista de la app"]
	};

  }

  removeTask = (num_task) => {
  	this.state.tasklist.splice(num_task, 1);

	this.setState({
		tasklist: this.state.tasklist
	});
	}


  addTask = (task) => {
	console.log(task);
 	this.state.tasklist.unshift(task);

	this.setState ({
		tasklist: this.state.tasklist
	});
 	}

	render(){
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
	   	<Paper elevation={3}>
		  <Title text="TODO APP 2000"/>
	 	        <TasckForm onAddTask={this.addTask}/>
				<TasckList list={this.state.tasklist} onRemoveTask={this.removeTask}/>
	 		<p>number of tascks to do <strong>{this.state.tasklist.length}</strong></p> 	 
 	  	</Paper>
	  </Box>
 		 );
	}
}
export default App;
