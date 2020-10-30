// Credits to Bacon Utilities creeator...

/**
@ https://github.com/muhimur9049
*/

const Canvas = require('canvas');
const canvas = Canvas.createCanvas(500, 500);
const ctx = canvas.getContext('2d');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        const canvas = Canvas.createCanvas(500, 500);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('https://image.freepik.com/free-icon/person-fight-punch_318-29637.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);


 let pingedMember = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]) || message.author);
if(!pingedMember || !pingedMember.user || !pingedMember.id || !pingedMember.user.displayAvatarURL()) pingedMember == message.member



        const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 75, 25, 100, 100);

        const target = await Canvas.loadImage(pingedMember.user.displayAvatarURL({ format: 'jpg'}));
        ctx.drawImage(target, 300, 25, 100, 100);


    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'punch.png');
    return message.channel.send(`**${message.author.tag}** sucker punches **${pingedMember.user.tag}**`, attachment)
   message.channel.send(attachment);

 }

 module.exports.help = {

name: "punch",
aliases: ["uppercut", "suckerpunch"],
description: "Punch yourself or somebody."

}
