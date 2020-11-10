const Canvas = require('canvas');
const canvas = Canvas.createCanvas(500, 500);
const ctx = canvas.getContext('2d');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        const canvas = Canvas.createCanvas(500, 500);

        const ctx = canvas.getContext('2d');

 let pingedMember = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]) || message.author);
if(!pingedMember || !pingedMember.user || !pingedMember.id || !pingedMember.user.displayAvatarURL()) pingedMember == message.member


        const background = await Canvas.loadImage(pingedMember.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);


        const avatar = await Canvas.loadImage('https://cdn.discordapp.com/attachments/772283355013709836/775801598856134706/mpAxmLLHBhTFOcXmNPXyeGYEftZiqfzBoAnh_yKa49so63OLPCGhpnTdQuWwMC9XdaJlI0YGFMdjizRsyvUVv9dlEgb9UMYzEdWK.png');
        ctx.drawImage(avatar, 50, -75, 500, 500);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'christmashat.png');
    message.channel.send(attachment);

}

module.exports.help = {
    name: "christmashat",
    aliases: ["christhas", "santahat", "santify", "hatchristmas"],
    description: "Generates your avatar wearing a christmas hat..."
  }
