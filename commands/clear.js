module.exports.run = (msg, args) => {
	console.log("clear");
        //command
        //clear msg
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("nope u cant do that");
        if(!args[0]) return message.channel.send("Please specify the amount of messages to delate!");

        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Cleared ${args[0]} Messages!`).then(msg => msg.delete(3000));
        });
}

module.exports.help = {
	help: "",
	description: ""
};
