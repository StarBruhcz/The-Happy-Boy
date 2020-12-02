const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';

client.on('ready', () =>{
    console.log("READY");
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    if(cmd == 'meme')
    {
        const subreddits = ["dankmeme", "meme", "me_irl"];
        const random = subreddits[Math.floor(Math.random() * subreddits.length)];

        const img = await randomPuppy(random);
        const MEME= new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`from /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

            message.channel.send("Finding some **fresh** memes..");
            await message.channel.send(MEME);
    }
});

client.login(process.env.token);