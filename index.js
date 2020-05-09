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
const config = require('./config.json');

const client = new Client();
let mainVC;

client.login(config.token);

client.on('ready', () => {
    mainVC = client.channels.cache.get("433272666414383116");
});

client.on('message', message => {
    checkForAlia(message);
    checkforLeemhouse(message);
});

const checkForAlia = message => {
    if (message.content === 'alia intro') {
        if (!mainVC) {
            console.log("Channel not found");
        } else {
            mainVC.join().then(connection => {
                connection.play(ytdl('https://www.youtube.com/watch?v=HSumM_jNY3g', {
                    filter: 'audioonly'
                }));
            });
        }
    }
};

const checkforLeemhouse = message => {
    if (message.content === 'leemhouse rave') {
        if (!mainVC) {
            console.log("Channel not found");
        } else {
            mainVC.join().then(connection => {
                connection.play(ytdl('https://www.youtube.com/watch?v=u_0A40FveIc', {
                    filter: 'audioonly'
                }));
            });
        }
    }
};