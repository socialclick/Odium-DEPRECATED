module.exports.run = (msg, args) => {
	console.log("meme started");
    //command

    let reddit =[
        "dankmemes",
        "ich_iel"
    ]

    let num = Math.floor(Math.random())
    let subreddit = reddit[num]
    let reddit =[
        "dankmemes",
        "ich_iel"
    ]

    let num = Math.floor(Math.random())
    let subreddit = reddit[num]
    
    message.channel.startTyping();
    randomPuppy(subreddit).then(async url => {
        await message.channel.send(url).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));
};

module.exports.help = {
	help: "",
	description: "Shows memes from r/dankmemes r/ich_iel"
};
