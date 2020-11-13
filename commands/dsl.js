const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
const embed = new Discord.MessageEmbed()
.attachFiles([`https://top.gg/api/widget/763912146043011082.png`])
.setImage("attachment://763912146043011082.png");
message.channel.send(`https://top.gg/bot/763912146043011082`, embed)
}
module.exports.help = {
  name: "dsl",
  aliases: ["topgg"],
  description: "DSL stats"
}
