const ytdl = require('ytdl-core');

module.exports = {
    name: 'giorno',
    description: 'Play Il vento d\'oro!',
    usage: '<>',
    args: false,
    execute(message, args) {
        if (message.member.voice.channel) {
            message.member.voice.channel.join().then(connection => {
                connection.play(ytdl("https://www.youtube.com/watch?v=2MtOpB5LlUA", {
                    filter: 'audioonly'
                }));
            })
        } else {
            console.log("Can't find channel");
        }
    },
};