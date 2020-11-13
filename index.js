const Discord = require('discord.js'); // Require Discord.js
const fs = require('fs');
const settings = require('./config.json'); // Configuration Handler.

const bot = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" } }});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let cmddir = files.filter(f => f.split(".").pop() === "js");
    if(cmddir.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }


    cmddir.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);

        });
    });
});

bot.on('guildMemberAdd', async member => {


const Discord = require("discord.js");
const Canvas = require("canvas");

const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');

    let fontSize = 70;

    do {
        ctx.font = `${fontSize -= 10}px sans-serif`;
    } while (ctx.measureText(text).width > canvas.width - 300);

    return ctx.font;
};
        const channel = member.guild.channels.cache.find(ch => ch.name === 'glory');
        if (!channel) return;

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/770760785873469473/776267262805540914/image_38.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

        ctx.font = applyText(canvas, `${member.displayName}!`);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`(#${member.guild.memberCount})`, canvas.width / 2.5, canvas.height / 1.2);

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 200, 200);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        channel.send(`Welcome to the server, ${member}!`, attachment);
});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

    bot.user.setPresence({ activity: { name: "the Canvas... | .help", type: "WATCHING"}, status: 'online' });

    bot.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      let prefix = settings.prefix
      let messageArray = message.content.split(" ");
      let args = message.content.slice(prefix.length).trim().split(/ +/g);
      let cmd = args.shift().toLowerCase();
      let commandfile;

      if (bot.commands.has(cmd)) {
        commandfile = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
      commandfile = bot.commands.get(bot.aliases.get(cmd));
    }

        if (!message.content.startsWith(prefix)) return;

    try {
      commandfile.run(bot, message, args);

    } catch (e) {

        }}
)});


    bot.login(settings.token);
