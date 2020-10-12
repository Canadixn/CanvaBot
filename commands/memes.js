const request = require('request');

const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {

        const subReddits = ["memes"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }


module.exports.help = {
    name: "meme",
    aliases: ["kitten"], //kermitmemes
    category: "meme",
    description: "lol",
}