module.exports.run = (msg, args) => {
	console.log("");

	//command
	let msgcont = msg.content.toString().slice(4);
	let channel = msg.guild.channels.find("name", "news");

	msg.delete();

	channel.send(msgcont);
};

module.exports.help = {
	help: "!say [text]",
	description: "say something in a channel"
};
