var Discord = require("discord.js");
global.client = new Discord.Client();
var fs = require("fs");
var config = require("./botconfig.json");
var basic = require("./basic");

client.commands = new Discord.Collection();

client.on("ready", () => {
	basic.init();
	console.log(`Logged in as ${client.user.tag}`);
});

client.login(config.token);
