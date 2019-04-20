module.exports.init = () => {
	console.log("Welcome initalized");

	client.on("guildMemberAdd", member => {
		const channel = member.guild.channels.find(ch => ch.name === 'welcome');
		
		let owner = member.guild.owner

		if (!channel){
			send(owner, "error","Welcome Message", "welcome channel does not exist, please create one!");

			return console.log("Cnl not found")
		};
	
		channel.send(`Welcome to the server, ${member}`);
	})
};
