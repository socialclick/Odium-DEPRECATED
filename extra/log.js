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
		case "clear":
			color = "#ff6600";
	}

	let channel = msg.guild.channels.find(`name`, "report");
	let time = new Date().toGMTString().slice(5, -4);

	if (!channel) {
		member.guild.createChannel("report", "text");
	}

	let fEmbed = new Discord.RichEmbed();
	if (user) {
		fEmbed.addField(type + " User:", `<@${user}>`);
	}

	fEmbed
		.setTitle("~" + type + "~")
		.addField(type + " by", `<@${mod}>`)
		.addField(type + " at", time);
	if (reason) {
		fEmbed.addField(type + " for", reason);
	}
	fEmbed
		.addField(type + " in", msgchannel)
		.setColor(color)
		.setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);

	channel.send(fEmbed);
};
