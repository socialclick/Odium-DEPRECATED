module.exports.init = () => {
	client.on("guildMemberAdd", member => {
		const channel = member.guild
			._sortedChannels()
			.find(ch => ch.type === "text");

		if (!channel) {
			return msg.guild.createChannel("welcome", "text");
		}

		channel.send(`Welcome to the server, ${member}`);
	});
};
