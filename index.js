'use strict';

const {
    Client
} = require('discord.js');

const {
    prefix,
    token
} = require('./config.json');

const fs = require('fs');

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Running...');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split('/ +/');
    const command = args.shift().toLowerCase();

    console.log(command);
});

client.login(token);