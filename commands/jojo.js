module.exports = {
    name: 'jojo',
    description: 'Jojo commands',
    usage: '<subcommand: approach>',
    args: true,
    execute(message, args) {
        if (args[0] === "approach") {
            test(message);
        }
    },
};

const test = message => {
    message.channel.send('Oh');
};