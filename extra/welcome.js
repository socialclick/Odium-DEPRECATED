module.exports.init = () => {
	console.log("Welcome initalized");

	client.on("guildMemberAdd", member => {
		const channel = member.guild
			._sortedChannels()
			.find(ch => ch.type === "text");

		let owner = member.guild.owner;

		if (!channel) {
			return message.guild.createChannel("welcome", "text");
		

			return console.log("Cnl not found");
		};

		channel.send(`Welcome to the server, ${member}`);
	});
};
