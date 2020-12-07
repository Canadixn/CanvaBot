const client = require('easier-iss')
const iss = new client()
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  async function test() {
    console.log(await iss.iss.data());

    const embed = new Discord.MessageEmbed()
    .setTitle("ISS Information")
    .setDescription("Information of the International Space Station")
    .addField("Altitude", `${iss.iss.data.altitude}`)
    .addField("Longitude", `${iss.iss.data.longitude}`)
    .addField("Latitude", `${iss.iss.data.latitude}`)
    .addField("Visisbility", `${iss.iss.data.visibility}`)
    .setTimestamp();

    message.channel.send(embed)
    }
  test()
  
}

module.exports.help = {
    name: "iss",
    aliases: [],
    description: "ISS stats"
}
