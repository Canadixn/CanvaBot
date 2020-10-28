const Discord = require('discord.js');
const config = require('../package.json');

module.exports.run = async (bot, message, args) => {



    const avatarEmbed = new Discord.MessageEmbed()

    .setColor('#000000')
    .setAuthor(`Avatar | ${message.author.tag}`, message.author.avatarURL())

    .setImage(`${message.author.avatarURL()}?size=256`)

    if(!args[0]) return message.channel.send(avatarEmbed);


    let joinedargs = args.join(" ");

    let aperson = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(joinedargs) ||
    message.guild.members.find(member => member.user.username == joinedargs) || message.guild.members.find(member => member.user.tag == joinedargs) || message.guild.members.find(member => member.u>

    if(!aperson){

        let errorEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`Member Not Found: ${joinedargs}`);

        return message.channel.send(errorEmbed);

    };

    const pfpEmbed = new Discord.MessageEmbed()
    .setColor("#000000")
    .setAuthor(`Avatar | ${aperson.user.tag}`, message.author.avatarURL())
    .setImage(`${aperson.user.avatarURL()}?size=256`)

    message.channel.send(pfpEmbed);


    }



module.exports.help = {
  name: "avatar",
  aliases: ["av"],
  description: "Enlarges your avatar to a savable PNG Format."
}
