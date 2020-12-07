const punList = require('../8ball.json');
const pun = punList;

const rn = require('random-number');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

if(!args[0]) return message.reply("You question does not trigger my endeavors...");

let m = args.join(" ");

    if(m) {
    let r = rn({
        min: 0,
        max: pun.length - 1,
        integer: true
    });

    let image = pun[r];

    const embed = new MessageEmbed()

        .setThumbnail("https://media.discordapp.net/attachments/578869190727827456/598719013425512473/8ball.png")
        .setAuthor("8ball", message.author.avatarURL())
        .setDescription(`**${image}**`);

    if (!message.mentions.users.first()) return message.channel.send(embed);

        }
    }

module.exports.help = {

name: "8ball",
aliases: [],
description: "Heads or Tails"

}
