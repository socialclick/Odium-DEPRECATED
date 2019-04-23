module.exports.init = () => {
	client.on("guildMemberRemove", member => {
		const channel = member.guild.channels.find(x => x.name === "welcome");

		if (!channel) {
			return member.guild.createChannel("welcome", "text").then(x => {
				x.send(`Welcome to the server, ${member}`);
			});
		}
		channel.send(`${member}, Leaved the Server`);
	});
};

module.exports.help = {
	help: "",
	description: "leave msg"
};
