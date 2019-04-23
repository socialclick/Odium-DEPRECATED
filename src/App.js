import React, { Component } from "react";
import logo from "./bot_icon.png";
import "./App.css";
import { init } from "./client";

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

		init();

		this.login = this.login.bind(this);
		this.invite = this.invite.bind(this);
	}

	state = {};

	login() {
		console.log(this);
		var win = window.open(
			"https://discordapp.com/api/oauth2/authorize?client_id=569201129691283497&redirect_uri=http://flam3rboy.ddns.net/api/authorize&state=" +
				global.id +
				"&response_type=code&scope=identify guilds",
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
