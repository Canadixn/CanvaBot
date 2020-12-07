const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
var now = new Date().getTime();
var timeleft = countDownDate - now;

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const embed = new Discord.MessageEmbed()
.setAuthor('New Years Countdown', "https://cdn.discordapp.com/attachments/771833657781518378/774777928264187974/confetti-celebration-christmas-party-512.png")
.setDescription(`There are about **${days}** days and **${hours}** hours left until New Years!`)
.setTimestamp()
message.channel.send(embed);

}

module.exports.help = {
  name: "newyears",
  aliases: ["newyear", "nys", "ny"],
  description: "Countdown"
}
