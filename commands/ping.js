const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    const msg = await message.channel.send("🏓 Pinging CanvaCord...");

    const pingembed = new Discord.MessageEmbed()
    .setAuthor("Pong!", "https://cdn.discordapp.com/attachments/737385723703066706/759616004233101362/source_1.gif")
    .addFields(

    { name: '⌛ Bot Latency:', value: `${msg.createdTimestamp - message.createdTimestamp}ms`, inline: true },

    { name: '💓 API Latency:', value: `${Math.round(bot.ws.ping)}ms`, inline: true }

    )
    .setFooter(`ID: ${message.author.id} • Servers: ${bot.guilds.cache.size}`)

    .setTimestamp();
    
    msg.edit(``, pingembed);

  }



module.exports.help = {
  name: "ping",
  description: "Pings CanvaCord.",
  aliases: ["latency", "alexa_show_me_ping"]
}
