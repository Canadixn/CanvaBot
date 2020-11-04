const Discord = require('discord.js');
const humanizeDuration = require("humanize-duration");

module.exports.run = async (bot, message, args) => {

    const userembed = new Discord.MessageEmbed()
    .setAuthor(`Userinfo - ${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL()}?size=256`)
    .setDescription('User data for ' + message.member + ":")
    .addField('Username', `${message.author.tag}`, true)
    .addField('User ID', `${message.author.id}`, true)
    .addField("Created", new Date(message.author.createdAt).toUTCString() + ` (${humanizeDuration(Date.now() - new Date(message.author.createdAt).getTime(), {largest: 2, round: true})} ago)`, true)
    .addField("Joined", new Date(message.member.joinedAt).toUTCString() + ` (${humanizeDuration(Date.now() - new Date(message.member.joinedAt).getTime(), {largest: 2, round: true})} ago)`, true);

    if(!args[0]) return message.channel.send(userembed);

    let joinedargs = args.join(" ");    
    let aperson = message.guild.member(message.mentions.users.first() || message.guild.members.get(joinedargs) || message.guild.members.find(member => member.user.username == joinedargs) || message.guild.members.find(member => member.user.tag == joinedargs) || message.guild.members.find(member => member.user.username.toLowerCase().startsWith(joinedargs.toLowerCase())) || message.guild.members.find(member => member.nickname == joinedargs) || message.guild.members.find(member => member.nickname.startsWith(joinedargs)));
    if(!aperson){

        let errorEmbed = new Discord.MessageEmbed()
        .setDescription(`Member Not Found: ${joinedargs}`);

        return message.channel.send(errorEmbed);

    };
    
        const userembed1 = new Discord.MessageEmbed()
    .setAuthor(`Userinfo - ${aperson.user.tag}`)
    .setThumbnail(`${aperson.user.avatarURL()}?size=256`)
    .setDescription('User data for ' + aperson + ":")
    .addField('Username', `${aperson.user.tag}`, true)
    .addField('User ID', `${aperson.user.id}`, true)
    .addField("Created", new Date(aperson.user.createdAt).toUTCString() + ` (${humanizeDuration(Date.now() - new Date(aperson.user.createdAt).getTime(), {largest: 2, round: true})} ago)`, true)
    .addField("Joined", new Date(aperson.user.joinedAt).toUTCString() + ` (${humanizeDuration(Date.now() - new Date(aperson.user.joinedAt).getTime(), {largest: 2, round: true})} ago)`, true);

    message.channel.send(userembed1);


}

module.exports.help = {
    name: "userinfo",
    aliases: ["whois", "ui"],
    description: "Displays userinformation"
  }

