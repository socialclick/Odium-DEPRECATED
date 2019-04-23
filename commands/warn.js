module.exports.run = (msg, args) => {
	console.log("warn");
	//command
	//report
	if (!args[1]) {
		let rUser = msg.guild.member(
			msg.mentions.users.first() || msg.guild.members.get(args[0])
		);
		if (!rUser) return msg.channel.send("Couldn´t find user.");
		let reason = args.join(" ").slice(22);

		let reportEmbed = new Discord.RichEmbed()
			.setDescription("~Warn~")
			.setColor("#ff6600")
			.addField("Warned User", `${rUser} with ID: ${rUser.id}`)
			.addField("Warned by", `${msg.author} with ID ${msg.author.id}`)
			.addField("channel", msg.channel)
			.addField("time", msg.createdAt)
			.setFooter(
				client.user.username +
					" Bot coded by NaCl-y#4400 & Flam3rboy#5979",
				client.user.displayAvatarURL
			);

		let warnchannel = msg.guild.channels.find(`name`, "report");
		if (!warnchannel) return msg.guild.createChannel("report", "text");

		msg.delete().catch(O_o => {});
		reportschannel.send(reportEmbed);
		return;
	}

	let rUser = msg.guild.member(
		msg.mentions.users.first() || msg.guild.members.get(args[0])
	);
	if (!rUser) return msg.channel.send("Couldn´t find user.");
	let reason = args.join(" ").slice(22);

	let reportEmbed = new Discord.RichEmbed()
		.setDescription("~Warn~")
		.setColor("#ff6600")
		.addField("Warned User", `${rUser} with ID: ${rUser.id}`)
		.addField("Warned by", `${msg.author} with ID ${msg.author.id}`)
		.addField("channel", msg.channel)
		.addField("time", msg.createdAt)
		.addField("Reason", reason)
		.setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);

	let warnchannel = msg.guild.channels.find(`name`, "report");
	if (!warnchannel) return msg.guild.createChannel("report", "text");

	msg.delete().catch(O_o => {});
	reportschannel.send(reportEmbed);
};

module.exports.help = {
	help: "warn",
	description: "warn`s a user ``!warn [@user] [reason]``"
};
