module.exports.init = () => {
	console.log("Welcome initalized");

	client.on("guildMemberAdd", member => {
		const channel = member.guild.channels.find(x => x.name==="welcome")
		
		if (!channel){
			return msg.guild.createChannel("welcome", "text").then(x=>{
				x.send(`Welcome to the server, ${member}`)
				})
		};

		channel.send(`Welcome to the server, ${member}`);
	});
};
