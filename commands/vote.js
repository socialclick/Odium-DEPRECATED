module.exports.run = (msg, args) => {
	return msg.channel.send(
		"Vote here to support and unlock special commands for your account or your guild.\nhttps://discordbots.org/bot/569201129691283497/vote"
	);
};

module.exports.help = {
	help: "vote",
	description: "Votes for the bot"
};
