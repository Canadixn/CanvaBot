const canvacord = require("canvacord");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let m = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0] || message.author.id));
    if(!m || !m.user || !m.user.displayAvatarURL()) m = message.member;
    let avatar = m.user.displayAvatarURL({dynamic: false, format: "png", size: 256});

    let image = await canvacord.Canvas.rip(avatar);
    let attachment = new Discord.MessageAttachment(image, 'rip.png');

    message.channel.send(attachment);

}

module.exports.help = {
  name: "rip",
  aliases: ["roygbiv"],
  description: "Pings CanvaCord."
}