module.exports.run = (msg, args) => {
	switch (args[0]) {
		case "add":
			break;
		default:
			send(msg.channel, "help", "Reaction Role", this.help.help);
			break;
	}
};

module.exports.help = {
	help: "rr add [channel] [messageid] [reactionemoji] [role]",
	description: "Ad"
};

//function(channel, type, title, text, fields, thumbnail)
