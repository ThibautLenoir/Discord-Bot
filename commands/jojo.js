const Discord = require('discord.js');

module.exports = {
    name: 'jojo',
    description: 'Jojo commands',
    usage: '<subcommand: approach | kono>',
    args: true,
    execute(message, args) {
        if (args[0] === "approach") {
            test(message);
        }

        switch (args[0]) {
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