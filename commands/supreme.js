module.exports.run = async (bot, message, args) => {

        const canvas = Canvas.createCanvas(500, 500);

        const ctx = canvas.getContext('2d');

 let pingedMember = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]) || message.author);
if(!pingedMember || !pingedMember.user || !pingedMember.id || !pingedMember.user.displayAvatarURL()) pingedMember == message.member


        const background = await Canvas.loadImage(pingedMember.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);


        const avatar = await Canvas.loadImage('https://cdn.discordapp.com/attachments/770760785873469473/772281389240156160/1200px-Supreme_Logo.png');
        ctx.drawImage(avatar, 0, 125, 500, 225);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'sup;reme.png');
    message.channel.send(attachment);

}

module.exports.help = {
    name: "supreme",
    aliases: ["supre", "sup"],
    description: "Make your PFP a supreme Logo"
}
