const Discord = require('discord.js');
const mi = require('minecraft-information');

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.reply(
        'You need to say a Minecraft username!'
    )

    const m = args.join(" ")

    const attachment = new Discord.MessageAttachment(mi.avatar(m), 'mcavatar.png');
    message.channel.send(attachment);
}


module.exports.help = {
    name: "minecraftavatar",
    aliases: ["mcavatar"],
    description: "DSL stats"
}

