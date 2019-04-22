global.Discord = require("discord.js");
global.Util = require("discord.js");
global.client = new Discord.Client();
var fs = require("fs");
var request = require("request");
var http = require("http");
var express = require("express");
var config = require("./botconfig.json");
var basic = require("./basic");
var web = require("./web");
global.YouTube = require("simple-youtube-api");
global.ytdl = require("ytdl-core");
global.randomPuppy = require("random-puppy");

global.youtube = new YouTube("AIzaSyAz1Vni_d5yFCAa27zavInnfa6wV3KbrFo");

client.commands = new Discord.Collection();
client.extra = new Discord.Collection();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`);
});

basic.init(fs);
web.init({ express: express, request: request, http: http });

client.on("message", message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm")
		return message.channel.send(
			"Die Befehle dieses Bots sind nicht für Privatnachrichten ausgelegt"
		);

	let prefix = "!";
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0].toLowerCase().slice(prefix.length);
	let args = messageArray.slice(1);

	if (client.commands.get(cmd) != undefined) {
		client.commands.get(cmd).run(message, args);
	}
});

client.login(config.token);
