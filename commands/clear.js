module.exports.run = (msg, args) => {
	console.log("clear");
	//command
	//clear msg
	if (!msg.member.hasPermission("MANAGE_MESSAGES"))
		return msg.reply("nope u cant do that");
	if (!args[0])
		return msg.channel.send("Please specify the amount of msgs to delete!");

	if (args[0] > 100 || args[0] < 0) {
		msg.channel
			.send(`You can only delete 1-100 messages!`)
			.then(msg => msg.delete(3000));
	} else {
		msg.channel.bulkDelete(args[0]).then(() => {
			msg.channel
				.send(`Cleared ${args[0]} msgs!`)
				.then(msg => msg.delete(3000));
		});
	}
	let clearEmbed = new Discord.RichEmbed()
		.setDescription("~clear~")
		.setColor("#7289DA")
		.addField("Deleted Msg", `${args[0]}`)
		.addField("Cleared by", `<@${msg.author.id}>`)
		.addField("Cleared in", msg.channel)
		.addField("time", msg.createdAt)
		.setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);
	let clearchannel = msg.guild.channels.find(`name`, "report");
	if (!clearchannel) return msg.guild.createChannel("report", "text");

	clearchannel.send(clearEmbed);
};

module.exports.help = {
	help: "clear",
	description: "deletes msg ``!clear [amount]``"
};
