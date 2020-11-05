const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


var countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();
var now = new Date().getTime();
var timeleft = countDownDate - now;

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const embed = new Discord.MessageEmbed()
.setAuthor('Christmas Countdown', "https://cdn.discordapp.com/attachments/770760785873469473/773724254322819092/p_5b4yrkYF7x_l_xOiyJzbPDZyOm8kwZ19RmkWXo4sWs1CMCxwVjDch3gO-7rAmNVbm2GHiIrj4w1zaFE0eDLCiSZRkVrIWmEiu1.png")
.setDescription(`There are about **${days}** days and **${hours}** hours left until Christmas!`)
.setTimestamp()
message.channel.send(embed);

}

module.exports.help = {
  name: "christmas",
  aliases: ["santa"],
  description: "Countdown"
}

