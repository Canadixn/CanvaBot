const Discord = require('discord.js');

var figlet = require('figlet');

module.exports.run = async (bot, message, args) => {

msg = args.join(" ");

  figlet.text(`${msg}`, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true

}, 

function(err, data) {

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }


    const Embed = new Discord.MessageEmbed()
    .setDescription(`\`\`\`${data}\`\`\``);

    message.channel.send(Embed);

if (Embed.description.length >= 2048)
return message.channel.send("Your text is too long! Please shorten it.").catch(console.error);

});

}

module.exports.help = {
name: "ascii",
aliases: ["asc"],
description: "Prints ASCII Art."
}
