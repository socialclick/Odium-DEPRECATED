module.exports.run = async function(msg, args) {
	switch (args[0]) {
		case undefined:
			var fields = [];

			client.commands.forEach((e, i) => {
				fields.push({
					name: i,
					value: e.help.description
				});
			});

			msg.channel.send({
				embed: {
					color: 0x0000ff,
					title: "Commands:",
					fields: fields
				}
			});
			break;
		default:
			var command = client.commands.get(args[0]);

			if (command == undefined) {
				msg.channel.send({
					embed: {
						color: 0x0000ff,
						title: "Hilfe: Unbekannter Command: " + args[0]
					}
				});
			} else {
				msg.channel
					.send({
						embed: {
							color: 0x0000ff,
							title: "Hilfe: " + args[0],
							description: command.help.help,
							author: {
								name: command.help.description
							}
						}
					})
					.catch(e => {
						console.error(e);
					});
			}
			break;
	}
};

module.exports.help = {
	description: "Displays all Commands",
<<<<<<< HEAD
	help: "``!help [command]``"
=======
	help: "``help [command]``"
>>>>>>> 343b9b5868cfdfd1f0e0a8c61f4a5d61d4054bca
};
