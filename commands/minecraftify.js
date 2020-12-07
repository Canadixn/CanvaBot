const Canvas = require('canvas');
const canvas = Canvas.createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments! Available arguments: \`snow\`, \`overworld\`, \`desert\``);
    }

    else if (args[0] === 'snow') {

        const canvas = Canvas.createCanvas(1920, 1080);

        const ctx = canvas.getContext('2d');

        let pingedMember = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[1]) || message.author);
        if(!pingedMember || !pingedMember.user || !pingedMember.id || !pingedMember.user.displayAvatarURL()) pingedMember == message.member

        const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/770760785873469473/777315015673774090/e3aba8da6da4c2ff0308029e611169af.png");
              ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);


        const avatar = await Canvas.loadImage(pingedMember.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 815, 65, 300, 300);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'minecrafter.png');
    message.channel.send(attachment);

    }
    else if (args[0] === 'overworld') {

        const canvas = Canvas.createCanvas(1920, 1080);

        const ctx = canvas.getContext('2d');

        let pingedMember = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[1]) || message.author);
        if(!pingedMember || !pingedMember.user || !pingedMember.id || !pingedMember.user.displayAvatarURL()) pingedMember == message.member

        const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/770760785873469473/777314693089722388/68f1e4d89f7b097c00a990935be41b05.png");
              ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);


        const avatar = await Canvas.loadImage(pingedMember.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 815, 65, 300, 300);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'minecrafter.png');
    message.channel.send(attachment);
    }

    else if (args[0] === 'desert') {

        const canvas = Canvas.createCanvas(1920, 1080);

        const ctx = canvas.getContext('2d');

        let pingedMember = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[1]) || message.author);
        if(!pingedMember || !pingedMember.user || !pingedMember.id || !pingedMember.user.displayAvatarURL()) pingedMember == message.member

        const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/770760785873469473/777314897695473714/5febc88e7226b64529972e339aaa1d7d.png");
              ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);


        const avatar = await Canvas.loadImage(pingedMember.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 815, 65, 300, 300);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'minecrafter.png');
    message.channel.send(attachment);
    }

    let replies = ["snow", "overworld", "desert"];
    if(!replies.includes(args[0])){
        return message.channel.send(`> You didn't provide a valid argument! Available arguments: \`snow\`, \`overworld\`, \`desert\``)
    }

}

module.exports.help = {
    name: "minecraftify",
    aliases: ["mcify"],
    description: "DSL stats"
  }
