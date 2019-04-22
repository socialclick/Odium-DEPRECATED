import React, { Component } from "react";
import logo from "./bot_icon.png";
import "./App.css";

import {
	Button,
	ButtonGroup,
	DropdownButton,
	MenuItem,
	Modal
} from "react-bootstrap";

class App extends Component {
	constructor(props) {
		super(props);

		this.login = this.login.bind(this);
		this.invite = this.invite.bind(this);
	}

	state = {};

	login() {
		console.log(this);
		var win = window.open(
			"https://discordapp.com/oauth2/authorize?response_type=code&client_id=159985415099514880&redirect_uri=https%3A%2F%2Fmee6.xyz%2Fapi%2Fdiscord-callback&scope=identify+guilds+email&state=allqJ0T3RePtYc1Vx0asdmKUEt8u1q",
			"windowOpenTab",
			"resizable=1,height=800,width=500,left=" +
				(window.innerWidth / 2 + 400) +
				",top=" +
				window.innerHeight / 2
		);
	}

	invite() {
		console.log(this);
		var win = window.open(
			"https://discordapp.com/api/oauth2/authorize?client_id=569201129691283497&permissions=0&scope=bot",
			"windowOpenTab",
			"resizable=1,height=800,width=500,left=" +
				(window.innerWidth / 2 + 400) +
				",top=" +
				window.innerHeight / 2
		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="">Odium</h1>
					<img src={logo} className="App-logo m-4" alt="logo" />
					<Button onClick={this.login} size="lg">
						Login with Discord
					</Button>
					<br />
					<Button variant="secondary" onClick={this.invite}>
						Invite to Server
					</Button>
				</header>
			</div>
		);
	}
}

export default App;
