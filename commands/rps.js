const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const botwin1 = new Discord.MessageEmbed()
    .setDescription("I won! I chose `Paper`! :newspaper2:");

    const tie = new Discord.MessageEmbed()
    .setDescription("**It's a tie!** We had the same choice.");

    const playerwin1 = new Discord.MessageEmbed()
    .setDescription("You won! I chose `Scissors`! :scissors:");

    const botwin2 = new Discord.MessageEmbed()
    .setDescription("I won! I chose `Rock`! :white_square_button:");

    const playerwin2 = new Discord.MessageEmbed()
    .setDescription("You won! I chose `Paper`! :newspaper2:");

    const botwin3 = new Discord.MessageEmbed()
    .setDescription("I won! I chose `Rock`! :white_square_button:");

    const playerwin3 = new Discord.MessageEmbed()
    .setDescription("You won! I chose `Rock`! :white_square_button:")

    let replies = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random() * replies.length);

    const zeroargs = new Discord.MessageEmbed()
    .setDescription(`Please play with either: \`${replies.join(", ")}\``);

    const invalidargs = new Discord.MessageEmbed()
    .setDescription(`Only these responses are accepted: \`${replies.join(", ")}\``);

    let uReply = args[0];
    if(!uReply){
        return message.channel.send(zeroargs)
    }

    if(!replies.includes(uReply)){
        return message.channel.send(invalidargs)
    }

    if(replies[result] === uReply){

        return message.channel.send(tie);

    } else if(uReply === "rock") {

        if(replies[result] === "paper"){

            message.channel.send(botwin1)

            } else return message.channel.send(playerwin1)

    } else if(uReply === "scissors") {

        if(replies[result] === "rock"){

            message.channel.send(botwin2)

            } else return message.channel.send(playerwin2)

    } else if(uReply === "paper") {

         if(replies[result] === "scissors"){

            message.channel.send(botwin3)

            } else return message.channel.send(playerwin3)
     }

 }

 module.exports.help = {
    name: "rockpaperscissors",
    aliases: ["rps", "rock"],
    description: "RPS"
  }
