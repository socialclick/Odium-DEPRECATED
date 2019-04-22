module.exports.init = () => {
	console.log("Welcome initalized");

	client.on("guildMemberAdd", member => {
		const channel = member.guild
			._sortedChannels()
			.find(ch => ch.type === "text");

		if (!channel) {
			return message.guild.createChannel("welcome", "text");
		};

		channel.send(`Welcome to the server, ${member}`);
	});
};
