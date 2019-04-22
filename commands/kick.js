module.exports.run = (msg, args) => {
	console.log("kick");
    //command
    //kick
    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Cant find user");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cant do that honey :)");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~kick~")
        .setColor("#ff0000")
        .addField("Kicked User",`${kUser} with ID ${kUser.id}`)
        .addField("Kicked By",`<@${message.author.id}>`)
        .addField("Kicked in",  message.channel)
        .addField("time", message.createdAt)
        .addField("Reason", kReason)
        .setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);
    
        let kickchannel = message.guild.channels.find(`name`, "report");
        if(!kickchannel) return message.guild.createChannel("report", "text");

        message.guild.member(kUser).kick(kReason);
        kickchannel.send(kickEmbed)
};

module.exports.help = {
	help: "",
	description: ""
};