module.exports.init = (msg, args) => {
	console.log("leave.js");

    client.on("guildMemberRemove", member => {
        const channel = member.guild
        ._sortedChannels()
        .find(ch => ch.type === "text");

    let owner = member.guild.owner;

    if (!channel) {
        send(
            owner,
            "error",
            "Welcome Message",
            "welcome channel does not exist, please create one!"
        );

        return console.log("Cnl not found");
    }

    channel.send(`${member}, Leaved the Server`);
});
};

module.exports.help = {
	help: "",
	description: "leave msg"
};
