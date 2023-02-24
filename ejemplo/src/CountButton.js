import React from 'react';


class CountButton extends React.Component{

	render(){

	constructor(props){
	
		super(props);
		this.state = {
			contador: 0
		};

		


	}

		return (

		<button onClick={() => alert("oli")  }>Habla</button>

		);

	}
}

export default CountButton;
