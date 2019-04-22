module.exports.run = (msg, args) => {
	console.log("");
    //command
        //report

            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!rUser) return message.channel.send("Couldn´t find user.");
            let reason = args.join(" ").slice(22);
            
            let reportEmbed = new Discord.RichEmbed()
            .setDescription("~Report~")
            .setColor("#ff6600")
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported by",`${message.author} with ID ${message.author.id}`)
            .addField("channel", message.channel)
            .addField("time", message.createdAt)
            .addField("Reason", reason)
            .addField(".", `Made by : ${Twitter}`);
            
            let reportschannel = message.guild.channels.find(`name`, "report");
            if(!reportschannel) return message.guild.createChannel("report", "text");
    
            message.delete().catch(O_o=>{});
            reportschannel.send(reportEmbed);
        
};

module.exports.help = {
	help: "",
	description: ""
};
