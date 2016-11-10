import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

const app = document.getElementById('app');

ReactDOM.render(<Layout name = "John"/>, app);

/* ES5 Method
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function(){
		return (
			<h1>fsdfsdf</h1>
		);
	}
});

var elem = React.createElement(module.exports);
ReactDOM.render(elem, app);
*/