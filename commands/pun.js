const punList = require('../puns.json');
const pun = punList;

const rn = require('random-number');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let r = rn({
        min: 0,
        max: pun.length - 1,
        integer: true
    });

    let image = pun[r];

    const embed = new MessageEmbed()

        .setThumbnail("https://cdn.discordapp.com/attachments/737385723703066706/749495969628029004/418-4186010_transparent-fun-png.png")
        .setAuthor("Pun", message.author.avatarURL())
        .setDescription(image);

    if (!message.mentions.users.first()) return message.channel.send(embed);


    }

module.exports.help = {

name: "pun",
aliases: ["joke", "tellmeajoke", "dadjoke"],
description: "Shows a random joke"

}

