
module.exports.run = async (bot, message, args) => {

let purgemember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
  
if(purgemember){
  if(!args[1]) return message.reply("mention a valid number from 2-100.")
  
  if(args[1] && isNaN(args[1])) return message.reply("mention a valid number from 2-100.")
  
  if(args[1] > 100 || args[1] < 2) return message.reply("amount must be from 2-100.")
  
  await message.delete()
    message.channel.messages.fetchMessages({limit: 100}).then(messages => {
      let purgemessages = messages.filter(messages => messages.author.id == purgemember.user.id && !messages.pinned)
      message.channel.bulkDelete(purgemessages.first(parseInt(args[1])))
      message.channel.send(`Purged ${args[1]} messages!`);
  })

}else if(!purgemember){
  if(isNaN(args[0])) return message.reply("mention a valid number from 2-100.")
  
  if(args[0] > 100 || args[0] < 2) return message.reply("amount must be from 2-100.")
  
  await message.delete()
    message.channel.messages.fetchMessages({limit: 100}).then(messages => {
      let purgemessages = messages.filter(messages => !messages.pinned)
      message.channel.bulkDelete(purgemessages.first(parseInt(args[0])))

          })
      
      }
  }

  module.exports.help = {
    name: "purge",
    description: "Pings AedusUtil",
    aliases: []
  }
