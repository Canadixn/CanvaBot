const { ICONS, AchievementCreator } = require("mc-achievements");
const Discord = require('discord.js');
const rn = require('random-number');

const iconlist = require('../mcicons.json');
const classicons = iconlist;

module.exports.run = async (bot, message, args) => {

let r = rn({ min: 0, max: classicons.length -1, integer: true });

let random = classicons[r];

const m = args.join(" ");


AchievementCreator.create(ICONS.diamond, "Achiement Get!", m).then(buffer => {

const attachment = new Discord.MessageAttachment(buffer, "test.png");


message.channel.send(attachment);


if(message.length >= 28)
return message.channel.send("You argument was too long! Maybe try shortening it?");

});

}
module.exports.help = {
    name: "advancement",
    aliases: ["achievement"],
    description: "DSL stats"
  }
