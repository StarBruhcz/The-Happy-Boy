const Discord = require('discord.js');
const client = new Discord.Client();
const randomPuppy = require('random-puppy');
const prefix = '*';

client.on('ready', () =>{
    console.log("READY");
    setInterval(() => {
        client.user.setActivity("to help we need you!",{type: "COMPETING"})
    })
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
            await  message.channel.send(MEME);
    }

    if(cmd == 'ban')
    {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry boy but you cant ***ban*** anyone");
        let Target = message.mentions.members.first();
        let Reason = args.join(' ').slice(22);
        if (!Target.bannable) return message.reply
    }
});

client.login(process.env.token);