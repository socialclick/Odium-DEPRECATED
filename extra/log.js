module.exports.init = () => {};

global.log = function(type, user, mod, reason, msgchannel) {
	var color;

	switch (type.toLowerCase()) {
		case "ban":
			color = "#990000";
			break;
		case "kick":
			color = "#ff0000";
			break;
		case "warn":
		case "mute":
		case "report":
			color = "#ff6600";
			break;
	}

	let channel = msg.guild.channels.find(`name`, "report");
	let time = new Date().toGMTString().slice(5, -4);

	let fEmbed = new Discord.RichEmbed()
		.setTitle("~" + type + "~")
		.addField(type + " User:", `<@${user}>`)
		.addField(type + " by", `<@${mod}>`)
		.addField(type + " at", time)
		.addField(type + " for", reason)
		.addField(type + " in", msgchannel)
		.setColor(color)
		.setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);

	channel.send(fEmbed);
};
