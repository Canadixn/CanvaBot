const Discord = require('discord.js');
const pinger = require('minecraft-pinger');

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.reply(
        "You need to enter a **Minecraft** __`Server IP`__! (Server entered must have a port of 25565 (Default Port)."
    );

    const m = args.join(" ");

    pinger.ping(m, 25565, (error, result) => {
        if (error) return message.channel.send(`${error}, (The IP of the server must have the default port of \`25565\`!)`)

        const embed = new Discord.MessageEmbed()
        .setTitle(`__\`Minecraft Server Ping\`__`)
        .addField(`Server IP`, `\`${m}\``)
        .addField(`Ping`, `\`${result.ping}ms\``)
	.setImage('https://www.animatedimages.org/data/media/562/animated-line-image-0015.gif')
        .setTimestamp();
        message.channel.send(embed);


      })

}

module.exports.help = {
    name: "mcping",
    aliases: ["pingmc", "pingserver", "pingmcserver", "mcserverping"],
    description: "DSL stats"
}

