module.exports.run = (msg, args) => {
	console.log("ban");
	//command
	//ban
	if(!args[1]){
		let bUser = msg.guild.member(
			msg.mentions.users.first() || msg.guild.members.get(args[0])
		);
		if (!bUser) return msg.channel.send("Cant find user");
		let bReason = args.join(" ").slice(22);
		if (!msg.member.hasPermission("BAN_MEMBERS"))
			return msg.channel.send("You cant do that honey :)");
	
		let banEmbed = new Discord.RichEmbed()
			.setDescription("~ban~")
			.setColor("#990000")
			.addField("Banned User", `${bUser} with ID ${bUser.id}`)
			.addField("banned By", `<@${msg.author.id}>`)
			.addField("banned in", msg.channel)
			.addField("time", msg.createdAt)
			.setFooter(
				client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
				client.user.displayAvatarURL
			);
	
		let banchannel = msg.guild.channels.find(`name`, "report");
		if (!banchannel) return msg.guild.createChannel("report", "text");
	
		msg.guild.member(bUser).ban(bReason);
		banchannel.send(banEmbed);
		return;
	};

	

	let bUser = msg.guild.member(
		msg.mentions.users.first() || msg.guild.members.get(args[0])
	);
	if (!bUser) return msg.channel.send("Cant find user");
	let bReason = args.join(" ").slice(22);
	if (!msg.member.hasPermission("BAN_MEMBERS"))
		return msg.channel.send("You cant do that honey :)");

	let banEmbed = new Discord.RichEmbed()
		.setDescription("~ban~")
		.setColor("#990000")
		.addField("Banned User", `${bUser} with ID ${bUser.id}`)
		.addField("banned By", `<@${msg.author.id}>`)
		.addField("banned in", msg.channel)
		.addField("time", msg.createdAt)
		.addField("Reason", bReason)
		.setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);

	let banchannel = msg.guild.channels.find(`name`, "report");
	if (!banchannel) return msg.guild.createChannel("report", "text");

	msg.guild.member(bUser).ban(bReason);
	banchannel.send(banEmbed);
};

module.exports.help = {
	help: "ban",
	description: "bans a user ``!ban [@user] [reason]``"
};
