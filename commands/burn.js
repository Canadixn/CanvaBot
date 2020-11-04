const canvacord = require("canvacord");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let m = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0] || message.author.id));
    if(!m || !m.user || !m.user.displayAvatarURL()) m = message.member;
    let avatar = m.user.displayAvatarURL({dynamic: false, format: "png", size: 256});


        var sharpener = new Array(5);
        for (var i = 0; i < 5; i++) {
            sharpener[i] = i + 1;
        }

const errorembed = new Discord.MessageEmbed()
.setDescription("❌ Please use a number between **0 - 5**.");
  if (parseInt(args[0]) > 5 || parseInt(args[0]) < 0)
          return message.channel.send(errorembed).catch(console.error);


msg = args.join(`${sharpener}`);

      let image = await canvacord.Canvas.burn(avatar, `${msg}`);
    let attachment = new Discord.MessageAttachment(image, 'sharpened.png');

    message.channel.send(attachment);

}

module.exports.help = {
  name: "burn",
  aliases: ["roast", "burn"],
  description: "Applies a burn effect on your avatar."
}
