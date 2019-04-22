module.exports.run = (msg, args) => {
	console.log("clear");
        //command
        //clear msg
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("nope u cant do that");
        if(!args[0]) return message.channel.send("Please specify the amount of messages to delate!");

        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Cleared ${args[0]} Messages!`).then(msg => msg.delete(3000));
        });

        let clearEmbed = new Discord.RichEmbed()
        .setDescription("~clear~")
        .setColor("#7289DA")
        .addField("Deleted Msg",`${args[0]}`)
        .addField("Cleared by",`<@${message.author.id}>`)
        .addField("Cleared in",  message.channel)
        .addField("time", message.createdAt)
        .setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);
    
        let clearhannel = message.guild.channels.find(`name`, "report");
        if(!clearchannel) return message.guild.createChannel("report", "text");

        clearchannel.send(clearEmbed)
    
};

module.exports.help = {
	help: "",
	description: ""
};
