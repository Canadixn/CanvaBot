const request = require('request');

const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {

        const subReddits = ["softwaregore"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }


module.exports.help = {
    name: "softwaregore",
    aliases: ["sg"],
    description: "Generates a random image from r/softwaregore"
}
