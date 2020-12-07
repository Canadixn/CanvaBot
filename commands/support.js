const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setTitle("CanvaBot Support")
  .setThumbnail(bot.user.displayAvatarURL())
  .addField(`Support Server`, "[Support Server](https://discord.gg/Z3e2PZhCWN)")
  .addField(`Invite The Bot`, "[Invite Link](https://top.gg/bot/763912146043011082)")
  .addField(`Commands`, "[Commands](https://canvabot.wordpress.com/)")
  .addField(`Patreon`, "Coming Soon!")
  .setTimestamp();

  message.channel.send(embed);
  
}

module.exports.help = {
    name: "invite",
    aliases: ["support", "topgglink", "supportserver"],
    description: "DSL stats"
}
