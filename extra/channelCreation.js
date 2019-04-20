module.exports.init = async function() {
	var channelprefix = "➤";

	client.on("voiceStateUpdate", (oldMember, newMember) => {
		try {
			if (true) {
				var newUserChannel = newMember.voiceChannel;
				var oldUserChannel = oldMember.voiceChannel;

				function cloneChannel(channel) {
					channel.setParent(newUserChannel.parent).then(() => {
						channel.setPosition(newUserChannel.position + 1);
					});
					channel.setUserLimit(newUserChannel.userLimit);
				}

				if (
					(oldUserChannel == undefined ||
						(newUserChannel !== undefined &&
							newUserChannel.id != oldUserChannel.id)) &&
					newUserChannel.name.indexOf("[") == -1 &&
					newUserChannel.name.indexOf(channelprefix) != -1
				) {
					newUserChannel.guild
						.createChannel(
							newUserChannel.name +
								" [" +
								newMember.user.username +
								"]",
							"voice"
						)
						.then(channel => {
							newMember.setVoiceChannel(channel);
							cloneChannel(channel);
						});
				}

				if (
					newUserChannel === undefined ||
					newUserChannel.id != oldUserChannel.id
				) {
					if (oldUserChannel.name.indexOf(channelprefix) != -1) {
						if (
							oldUserChannel.members.size <= 0 &&
							oldUserChannel.name.indexOf("[") != -1
						) {
							oldUserChannel.delete();
						}
					}
				}
			}
		} catch (e) {}
	});
};
