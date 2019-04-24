module.exports.init = () => {
	client.on("guildCreate", guild => {
		guild
			._sortedChannels()
			.find(x => x.type == "text")
			.send(
				"FBI open up!\nhttps://tenor.com/view/fbi-raid-swat-gif-11500735"
			);

		let channel = guild.channels.find(`name`, "report");
		if (!channel) {
			return guild.createChannel("report", "text");
		}
	});
};
