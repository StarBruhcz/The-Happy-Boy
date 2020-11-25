const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';

client.on('message', message => {
    if (message.content = "TEST")
    {
        message.channel.send("TEST STATUS: SUCCED!");
        console.log("TEST SUCCESFUL");
    }
})

client.login(process.env.TOKEN);