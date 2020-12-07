const util = require('util');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

if(message.author.id !== "736074854712999980") return;


    let code = args.join(" ")
    if(!code) return message.reply("provide some code to run.");

    let output; 

    try {
        output = await eval(code);
    } catch(err) {

      const errembed = new Discord.MessageEmbed()
      .setAuthor("CanvaBot", bot.user.displayAvatarURL())
      .setTitle("Evaluation")
      .addField('Input', `\`\`\`js\n${code}\`\`\``)
      .addField('Output\n`ERROR`', `\`\`\`js\n${err}\`\`\``)
      .setTimestamp();
              
        return message.channel.send(errembed);
    };

    if (typeof output != "string") output = util.inspect(output);

    const outputembed = new Discord.MessageEmbed()
    .setAuthor("CanvaBot", bot.user.displayAvatarURL())
    .setTitle("Evaluation")
    .addField('Input', `\`\`\`js\n${code}\`\`\``)
    .addField('Output', `\`\`\`js\n${output}\`\`\``)
    .setFooter(`Executed in ${Date.now() - message.createdTimestamp}ms`)
    .setTimestamp();
    
    message.channel.send(outputembed);
}

module.exports.help = {
    name: "eval",
    aliases: ["e"],
    description: "Evaluation."
  }
