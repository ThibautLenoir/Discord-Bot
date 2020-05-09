const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
    name: 'jojo',
    description: 'Jojo commands',
    usage: '<subcommand: approach | kono | warudo>',
    args: true,
    execute(message, args) {

        switch (args[0]) {
            case 'warudo':
                warudo(message);
                break;
            case 'approach':
                approach(message);
                break;
            case 'kono':
                kono(message);
                break;
            default:
                console.log('Error with jojo module');
        }
    },
};

const approach = message => {
    const dioEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription('Oh? You\'re approaching me? Instead of running away, you\'re coming right to me? Even though your grandfather, Joseph, told you the secret of za warudo like an exam student scrambling to finish the last problems on an exam until the last moments before the chime?')
        .setImage('https://i.imgur.com/tXIEjpm.jpg');

    const jotaroEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription('I can\'t beat the shit out of you without getting any closer.')
        .setImage('https://i.imgur.com/hlsXDmM.png');

    message.channel.send(dioEmbed);
    message.channel.send(jotaroEmbed);

    dioEmbed.setDescription('Oh ho! Then come as close as you like.');

    message.channel.send(dioEmbed);
};

const kono = message => {
    const dioEmbed = new Discord.MessageEmbed()
        .setTitle('KONO DIO DA!!111!!!!1!')
        .setImage('https://i1.sndcdn.com/artworks-000178961422-k21zbp-t500x500.jpg');

    message.channel.send(dioEmbed);
}

const warudo = message => {
    const url = 'https://www.youtube.com/watch?v=7ePWNmLP0Z0';

    const dioEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('ZA WARUDO!!!1!!11!!11!!')
        .setImage('https://media.giphy.com/media/nyNS6Cfrnkdj2/giphy.gif');

    if (message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => {
            connection.play(ytdl(url, {
                filter: 'audioonly'
            }));
        })
    } else {
        console.log("Can't find channel");
    }

    message.channel.send(dioEmbed);
}