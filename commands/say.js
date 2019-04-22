module.exports.run = (msg, args) => {
	console.log("");
		
		//command
    	let msgcont = message.content.toString().slice(4);
        let channel = message.guild.channels.find("name", "news");
        
		message.delete();
		
        channel.send(msgcont);

};

module.exports.help = {
	help: "!say [text]",
	description: "say something in a channel"
};