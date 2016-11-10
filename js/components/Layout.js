import React from "react";

export default class Layout extends React.Component{
	getName(){
		return "Tason";
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>Hello {this.getName()} and {this.props.name}!</h1> 
		);
	}
}
