const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
    console.log("Success!   Logged in as: "  + client.user.tag );
});

client.on('messageDelete', (message) => {
    console.log("Message log initiated: " + message);

    let log = new Discord.MessageEmbed()
    .setTitle('Message Event')
    .addField('Message ID:', message.id, false)
    .addField('Message Author', message.author.tag, false)
    .addField('Message Author ID', message.author.id, false)
    .addField('Message Content:', message.content, false)
    client.channels.cache.get(`YourChannelID`).send(log)

});

client.on('roleCreate', (role) => {
    let log = new Discord.MessageEmbed()
    .setTitle('Role Event')
    .addField('Role ID:', role.id, false)
    .addField('Role Name:', role.name, false)
    .addField('Role Color ID:', role.color,false)
    client.channels.cache.get(`YourChannelID`).send(log)
});

client.on('roleDelete', (role) => {
    let log = new Discord.MessageEmbed()
    .setTitle('Role Delete Event')
    .addField('Role ID:', role.id, false)
    .addField('Role Name:', role.name, false)
    .addField('Role Color ID:', role.color,false)
    client.channels.cache.get(`YourChannelID`).send(log)
});

client.on('typingStart', (channel, user) => {
    let log = new Discord.MessageEmbed()
    .setTitle('User Typing Event')
    .addField('User ID:', user.id, false)
    .addField('User Name:', user.tag, false)
    .addField('Channel ID:', channel.id,false)
    .addField('Channel Name:', channel.name,false)
    client.channels.cache.get(`YourChannelID`).send(log)
});


client.login(config.token)