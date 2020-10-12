var figlet = require('figlet');

module.exports.run = async (bot, message, args) => {

msg = args.join(" ");

  figlet.text(`${msg}`, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    message.channel.send(`\`\`\`${data}\`\`\``);
});


}

module.exports.help = {

name: "ascii",
aliases: ["p"],
description: "Show the music queue and now playing."

}