const fetch = require('node-fetch');
const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {

        let countries = args.join(" ");
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setThumbnail("https://cdn.discordapp.com/attachments/737385723703066706/749493267690946570/thediplomat-2020-04-01.png")
        .setColor(0xFF0000)
        .setDescription('**Too few arguments!**')
        .addField("Usage:", "!covid `Country` | `all`")
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/737385723703066706/749493267690946570/thediplomat-2020-04-01.png")
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/737385723703066706/749493267690946570/thediplomat-2020-04-01.png")
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
    }

module.exports.help = {
        name: "covid",
        aliases: ["coronavirus"],
        description: "Shows stats of the coronavirus."
}

