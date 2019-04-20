var Discord = require("discord.js");
global.bot = new Discord.bot();
var fs = require("fs");
var botconfig = require("./botconfig.json");
var config = require("./config.json");
var basic = require("./basic");

bot.commands = new Discord.Collection();

basic.init(fs);

bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}`);
});

bot.on("message", msg => {
	if (msg.author.bot) return;

	var args = msg.split(" ");
	var cmd = args[0].toLowerCase();

	bot.commands.get(cmd).run(msg, args.slice(1));
});

bot.login(botconfig.token);
