module.exports.run = (msg, args) => {
	console.log("");
    //command
    //report
    if(cmd === `${prefix}warn`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldn´t find user.");
        let reason = args.join(" ").slice(22);
        
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("~Warn~")
        .setColor("#ff6600")
        .addField("Warned User", `${rUser} with ID: ${rUser.id}`)
        .addField("Warned by",`${message.author} with ID ${message.author.id}`)
        .addField("channel", message.channel)
        .addField("time", message.createdAt)
        .addField("Reason", reason)
        .setFooter(
			client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
			client.user.displayAvatarURL
		);
        
        let warnchannel = message.guild.channels.find(`name`, "report");
        if(!warnchannel) return message.guild.createChannel("report", "text");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
        return;

    }
};

module.exports.help = {
	help: "!warn [@user] [reason]",
	description: "warn`s a user"
};