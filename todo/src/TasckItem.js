import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

class TasckItem  extends React.Component{

	constructor(props){
	super(props);

	this.state = {
	open: false
	};

}
	removeTask = () => {
		this.props.removeTask(this.props.num_task);
		this.closeDialog();
	}
	

	 openDialog = () =>	{
		this.setState({
			open:true
		});
	
	}
	closeDialog = () => {
		this.setState({
		open:false
		});
	}
	render(){
		return (
		<ListItem>
			<ListItemText primary={this.props.text}/>
				<Tooltip onClick={this.openDialog} title="Borrado">
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<Dialog open={this.state.open}> 
					<DialogContent>
						<DialogContentText>
						Quiere Borror esto?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button variant="contained" color="error" onClick={this.removeTask}> Borrar </Button>
					 <Button onClick={this.closeDialog}> cancelar </Button>
					</DialogActions>
				</Dialog>
		</ListItem>
		);
	}


}

export default TasckItem;
