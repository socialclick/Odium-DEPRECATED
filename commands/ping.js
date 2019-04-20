module.exports.run = (msg, args) => {
	console.log("ping");

	return msg.channel.send("Der Ping des Bots beträgt: " + bot.ping + " ms.");
};

module.exports.help = {
	help: "",
	description: "Ping"
};
