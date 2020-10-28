const canvacord = require("canvacord");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let m = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0] || message.author.id));
    if(!m || !m.user || !m.user.displayAvatarURL()) m = message.member;
    let avatar = m.user.displayAvatarURL({dynamic: false, format: "png", size: 256});

    let image = await canvacord.Canvas.beautiful(avatar);
    let attachment = new Discord.MessageAttachment(image, 'beautiful.png');

    message.channel.send(attachment);

}

module.exports.help = {
  name: "beautiful",
  aliases: ["beautify", "thatsbeautiful"],
  description: "Puts yours or your targeted friend's image in a 'beautiful' meme format."
}
