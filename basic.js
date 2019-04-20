module.exports.init = fs => {
	fs.readdir(__dirname + "/commands/", {}, (err, file) => {
		if (err) console.error(err);

		var jsfile = file.filter(f => f.split(".").pop() === "js");

		jsfile.forEach((f, i) => {
			let props = require(__dirname + "/commands/" + f);
			console.log(f + " loaded!");
			bot.commands.set(f.replace(".js", ""), props);
		});
	});

	fs.readdir(__dirname + "/extra/", {}, (err, file) => {
		if (err) console.error(err);

		var jsfile = file.filter(f => f.split(".").pop() === "js");

		jsfile.forEach((f, i) => {
			let props = require(__dirname + "/extra/" + f);
			console.log(f + " loaded!");
			bot.extra.set(f.replace(".js", ""), props);
			props.init();
		});
	});
};

global.guild = function(id, settings) {};

global.send = function(channel, type,  title, text, fields) {
	var color;

	switch (type) {
		case "help":
			color = 0x0092ed;
			break;
		case "error":
			title = "error: " + title;
			color = 0xdd2c2c;
			break;
		default:
			color = 0x707070;
			break;
	}

	var message = new Discord.RichEmbed()
		.setColor(color)
		.setTitle(title)
		.setDescription(text)
		.setAuthor(`${message.guild.name}`, message.guild.iconURL)
		.setFooter(
			bot.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			bot.user.displayAvatarURL
		);

	message.fields = fields;

	return channel.send(message);
};
