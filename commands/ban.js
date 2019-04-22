module.exports.run = (msg, args) => {
	console.log("ban");
    //command
        //ban

            let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!bUser) return message.channel.send("Cant find user");
            let bReason = args.join(" ").slice(22);
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cant do that honey :)");
    
            let banEmbed = new Discord.RichEmbed()
            .setDescription("~ban~")
            .setColor("#990000")
            .addField("Banned User",`${bUser} with ID ${bUser.id}`)
            .addField("banned By",`<@${message.author.id}>`)
            .addField("banned in",  message.channel)
            .addField("time", message.createdAt)
            .addField("Reason", bReason)
            .setFooter(
                client.user.username + " Bot coded by NaCl-y#4400 & Flam3rboy#5979",
                client.user.displayAvatarURL
            );
        
            let banchannel = message.guild.channels.find(`name`, "report");
            if(!banchannel) return message.guild.createChannel("report", "text");
    
            message.guild.member(bUser).ban(bReason);
            banchannel.send(banEmbed)

};

module.exports.help = {
	help: "",
	description: ""
};