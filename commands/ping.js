module.exports.run = (msg, args) => {
	console.log("ping");

	return msg.channel.send(
		"Ping: " + client.ping + " ms."
	);
};

module.exports.help = {
	help: "",
	description: "Ping"
};
