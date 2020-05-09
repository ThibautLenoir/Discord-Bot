'use strict';

const {
    Client,
    MessageEmbed
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

});