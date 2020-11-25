const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*';

client.on('ready', () =>{
    console.log("READY");
})

client.on('message', message => {
    if (message.content == "TEST") {
        message.channel.send("TEST STATUS: SUCCED!");
        console.log("TEST SUCCESFUL");
    }
})

client.on('message', async message => {
    if (message.content == "restart") {


        if (!message.author.id == '725072066050654249') {
            return message.reply("You cant use this command! Only the developer of this bot can do it.");
        }

        await message.channel.send("RESTARTING....")
        process.exit();
    }
})

//client.login(process.env.TOKEN);
client.login('Nzc3NTE1MDY3MDYzMTQwMzYy.X7EjVQ.sF6LB4cs8mPR3lx8cEZwHmmPg8I');