const Canvas = require('canvas');
const canvas = Canvas.createCanvas(250, 500);
const ctx = canvas.getContext('2d');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        const canvas = Canvas.createCanvas(250, 500);

        const ctx = canvas.getContext('2d');

 let pingedMember = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]) || message.author);
if(!pingedMember || !pingedMember.user || !pingedMember.id || !pingedMember.user.displayAvatarURL()) pingedMember == message.member

        const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/770760785873469473/771617701939642368/TnPdGIBqc-wbX1RFE8wj4mfr0-xLswq9_Shyu_KGKRTSm8ndWsS4LftvJdpoOZCHCBg7ZqOSmVOZcqsk_sI3xYQs400.png");
              ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);


        const avatar = await Canvas.loadImage(pingedMember.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 60, 125, 140, 400);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'karen.png');
    message.channel.send(attachment);

}

module.exports.help = {

name: "dream",
aliases: ["GOGY"],
description: "Turn yourself into Dream"

}
