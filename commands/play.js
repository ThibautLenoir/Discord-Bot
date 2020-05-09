const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    description: 'Play music using youtube links!',
    usage: '<youtube url>',
    args: true,
    execute(message, args) {
        if (message.member.voice.channel) {
            message.member.voice.channel.join().then(connection => {
                connection.play(ytdl(args[0], {
                    filter: 'audioonly'
                }));
            })
        } else {
            console.log("Can't find channel");
        }
    },
};