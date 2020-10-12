const canvacord = require("canvacord");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let m = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0] || message.author.id));
    
    if(!m || !m.user || !m.user.displayAvatarURL()) m = message.member;
    
    let av1 = message.author.displayAvatarURL({dynamic: false, format: "png"});
    
    let av2 = m.user.displayAvatarURL({dynamic: false, format: "png"});

    let bim = await canvacord.Canvas.bed(av1, av2);
    let attachment = new Discord.MessageAttachment(bim, 'bed.png');

  return message.channel.send(attachment);

}


module.exports.help = {
  name: "bed",
  aliases: ["b"],
  description: "Pings CanvaCord."
}