
const canvacord = require("canvacord");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const argszero = new Discord.MessageEmbed()
    .setDescription("<:canvadenied:763570128062251008> You need to atleast comment something... right?");

    if(!args[0]) return message.channel.send(argszero)


    let m = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0] || message.author.id));
    if(!m || !m.user || !m.user.displayAvatarURL()) m = message.member;
    let avatar1 = m.user.displayAvatarURL({dynamic: false, format: "png", size: 256});

     msg = args.join(" ");

    let image = await canvacord.Canvas.youtube( {username: message.author.username, content: `${msg}`, avatar: avatar1, dark: false } );
    let attachment = new Discord.MessageAttachment(image, 'youtube.png');

    message.channel.send(attachment);

}

module.exports.help = {
  name: "youtube",
  aliases: ["yt"],
  description: "Pings CanvaCord."
}