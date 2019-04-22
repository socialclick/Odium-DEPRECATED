module.exports.run = (msg, args) => {
	console.log("report");
	//command
	//report

	let rUser = msg.guild.member(
		msg.mentions.users.first() || msg.guild.members.get(args[0])
	);
	if (!rUser) return msg.channel.send("Couldn´t find user.");
	let reason = args.join(" ").slice(22);

	let reportEmbed = new Discord.RichEmbed()
		.setDescription("~Report~")
		.setColor("#ff6600")
		.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
		.addField("Reported by", `${msg.author} with ID ${msg.author.id}`)
		.addField("channel", msg.channel)
		.addField("time", msg.createdAt)
		.addField("Reason", reason)
		.setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);

	let reportschannel = msg.guild.channels.find(`name`, "report");
	if (!reportschannel) return msg.guild.createChannel("report", "text");

	msg.delete().catch(O_o => {});
	reportschannel.send(reportEmbed);
};

module.exports.help = {
	help: "",
	description: ""
};
