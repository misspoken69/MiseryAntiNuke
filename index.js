// Made by Misspoken#1122. Don't skid this shit. :)

// Dependencies 
const Discord = require('discord.js'); 
const antinuke = new Discord.Client(); 
const fs = require('fs'); 
const ms = require('ms'); 
const clc = require('cli-color'); 
const config = require('./config.json'); 
const prefix = 'm!';
const keepAlive = require('./server.js');

// Logs
antinuke.on("ready", async () => {
    console.clear();
  console.log("███╗░░░███╗██╗░██████╗███████╗██████╗░██╗░░░██╗")
  console.log("████╗░████║██║██╔════╝██╔════╝██╔══██╗╚██╗░██╔╝")
  console.log("██╔████╔██║██║╚█████╗░█████╗░░██████╔╝░╚████╔╝░")
  console.log("██║╚██╔╝██║██║░╚═══██╗██╔══╝░░██╔══██╗░░╚██╔╝░░")
  console.log("██║░╚═╝░██║██║██████╔╝███████╗██║░░██║░░░██║░░░")
  console.log("╚═╝░░░░░╚═╝╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░")
  console.log("———————————————————————————————————————————————")
  console.log("[-] Thanks for using Misery Anti-Nuke!")
  console.log("[-] If you like it, maybe leave a star and follow?")
  console.log("[-] It would help a lot considering I am making more!")
  console.log("[-] This was made by Misspoken so don't skid this shit.")
  console.log("———————————————————————————————————————————————")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
  console.log("Fear Misspoken ©️")
})

// Turning on Anti-Nuke
antinuke.on('message', async msg => {
  if (msg.content === prefix + 'antinukeon'){


  const antiemebd = new Discord.MessageEmbed()
  .setTitle('𝘔𝘐𝘚𝘌𝘙𝘠 𝘈𝘕𝘛𝘐-𝘕𝘜𝘒𝘌')
  .setTimestamp()
  .setColor(000000)
  .setAuthor('Use this shit wisely!', 'https://cdn.discordapp.com/attachments/828654164589543484/828706460397076480/Untitled_8.png')
  .setFooter('Misery Anti-Wizz | By Misspoken | Prefix: ' + prefix, 'https://cdn.discordapp.com/attachments/828654164589543484/828706460397076480/Untitled_8.png',)
  .addField('GitHub', 'https://bit.ly/ghsarcastic' ,true)
  .addField('YouTube', 'http://bit.ly/ytsarcastic', true)
  .setImage('https://cdn.discordapp.com/attachments/820160962946007040/828707550396022784/c2d0a5f07c427205f78986d4affb7681.gif')
  .setDescription('Thanks for adding Misery Anti-Nuke by Misspoken!\nIf any suspected nuking is detected, it will be console logged to the owner and the suspected nuker will be banned.\n\n**We see all signs of any nuke attempts, so you will be banned if:**\n - You ban a member while not being the owner of the server or while not being whitelisted or not obtaining the bypass role.\n - You add an unwhitelisted bot while not being whitelisted or not being the owner of the server or not obtaining the bypass role.')
  msg.channel.send(antiemebd)
  .then(sentMessage => sentMessage.react('822307172229840926'))
  .catch(console.error)
  console.log(clc.red(`Turned on Anti-Nuke in ${msg.guild.name}`))

// Turning off Anti-Nuke
}
  
if (msg.content === prefix + 'antinukeoff'){
   msg.channel.send('Turning off Misery Anti-Nuke and leaving the server..');
   console.log(clc.green(`Left ${msg.guild.name}!`));
   msg.guild.leave();
}
