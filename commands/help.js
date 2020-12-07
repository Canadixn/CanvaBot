const Discord = require('discord.js');
const config = require('../package.json');

module.exports.run = async (bot, message, args) => {


const helpembed = new Discord.MessageEmbed()

.setAuthor('CanvaCord 🖌️ | Help Command', bot.user.displayAvatarURL())
.addFields(

  { name: 'Commands:', value: 'https://canvabot.wordpress.com/', inline: true },

  { name: 'Docs', value: 'Coming Soon!', inline: true },

  { name: 'Patreon', value: 'Coming Soon!', inline: false },

  { name: 'Bot Version', value: `v${config.version}`, inline: true}

)
.setFooter(`Bot ID: ${bot.user.id} • Servers: ${bot.guilds.cache.size}`)
.setTimestamp();

message.channel.send(helpembed);

}


module.exports.help = {
  name: "help",
  description: "CanvaBot Help",
  aliases: ["info"]
}
