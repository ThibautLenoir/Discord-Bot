module.exports = {
    name: 'play',
    description: 'Play music using youtube links!',
    args: true,
    usage: '<youtube url>',
    execute(message, args) {
        message.channel.send('Pong.');
    },
};