module.exports.init = (msg, args) => {
	console.log("leave.js");

	client.on("guildMemberRemove", member => {
		const channel = member.guild
			._sortedChannels()
			.find(ch => ch.type === "text");

		if (!channel) {
			return msg.guild.createChannel("welcome", "text");
		}

		channel.send(`${member}, Leaved the Server`);
	});
};

module.exports.help = {
	help: "",
	description: "leave msg"
};
