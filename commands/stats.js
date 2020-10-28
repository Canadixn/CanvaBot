const Discord = require("discord.js");
const settings = require('../config.json');
const os = require("os")

module.exports.run = async (bot, message, args) => {

    let memUsage = (process.memoryUsage().rss/1024/1024).toFixed(3);
    let freeMem = (os.freemem()/1024/1024/1024).toFixed(3);
    let thetotalMem = (os.totalmem()/1024/1024/1024).toFixed(3);
    let theOsType = os.type;
    let cpuCores = os.cpus().length;
    let cpuModel = os.cpus()[0].model;
    let Theuptime = Math.floor(os.uptime()/60/60/24);
    let SUptimeHrs = Math.floor((os.uptime()/60/60) % 24);
    let days = Math.floor(bot.uptime / 86400000);
    let hours = Math.floor(bot.uptime / 3600000) % 24;
    let minutes = Math.floor(bot.uptime / 60000) % 60;
    let seconds = Math.floor(bot.uptime / 1000) % 60;
    let uptime = `\`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds\``;


    let clientpfp = bot.user.displayAvatarURL({dynamic: true});
    let botembed = new Discord.MessageEmbed()

    .setTitle(`${bot.user.username} Stats`)
    .setDescription("CanvaBot's Status... 👀")
    .setThumbnail(clientpfp)
    .addField("Host Type", `\`${theOsType}\``, true)
    .addField("CPU Cores", `\`${cpuCores}\``, true)
    .addField("CPU Model", `\`${cpuModel}\``, true)
    .addField("Memory Usage", `\`${memUsage} MB\``, true)
    .addField("Free Memory", `\`${freeMem} GB\` / \`${thetotalMem} GB\``, true)
    .addField("System Uptime", `\`${Theuptime} days, ${SUptimeHrs} hours\``, true)
    .addField("Bot Uptime", uptime)
    .setFooter("Bot ID: " + bot.user.id, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()

    message.channel.send(botembed)
}

module.exports.help = {
    name: "stats",
    aliases: ["stat", "botstats"],
    description: "Shows stats of the Discord Bot",
    category: "general"
}
