'use strict';

const {
    Client
} = require('discord.js');

const {
    prefix,
    token
} = require('./config.json');

const ytdl = require('ytdl-core');

const client = new Client();

client.login(token);

client.on('ready', () => {
    console.log('Running...');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
});