const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let serverinfo = new Discord.MessageEmbed()
    .setTitle(message.guild.name + " Information")
    .setThumbnail(message.guild.iconURL())
    .addField("Server Owner", message.guild.owner.user.tag)
    .addField("Server Region", message.guild.region, true)
    .addField("Total Roles", message.guild.roles.cache.size, true)
    .addField("Total Humans", message.guild.members.cache.filter(f => !f.user.bot).size, true)
    .addField("Total Bots", message.guild.members.cache.filter(f => f.user.bot).size, true)
    .addField("Total Text Channels", message.guild.channels.cache.filter(f => f.type === "text").size, true)
    .addField("Total Voice Channels", message.guild.channels.cache.filter(f => f.type === "voice").size, true)
    .setFooter("Server Created")
    .setTimestamp(message.guild.createdAt);

    message.channel.send(serverinfo);

}

module.exports.help = {
    name: "serverinfo",
    aliases: [],
    category: "general"
}
