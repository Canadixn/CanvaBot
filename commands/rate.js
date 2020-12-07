var points = new Array(100);
for (var i = 0; i < 100; i++) {
    points[i] = i + 1;
}
const number = points
const rn = require('random-number');

module.exports.run = async (bot, message, args) => {

let r = rn({

    min: 0,
    max: number.length - 1,
    integer: true

});


let image = number[r];

if (!message.mentions.users.first()) return message.channel.send(':star2: **' + message.author.username + '** has rated himself a ' + image +'/100!');

message.channel.send(':star2: **' + message.author.username + '** has rated **' + message.mentions.users.first().username + '** a ' + image +'/100!');

}

module.exports.help = {
    name: "rate",
    aliases: ["rating"],
    description: "Rates you or a mentioned person's out of 100."

  }
