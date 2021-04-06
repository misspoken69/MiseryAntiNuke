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

// Help Command
if (msg.content === prefix + 'help'){
   const helpembed = new Discord.MessageEmbed()
   .setTitle('𝘔𝘐𝘚𝘌𝘙𝘠 𝘏𝘌𝘓𝘗 𝘗𝘈𝘕𝘌𝘓')
   .setTimestamp()
   
  .setColor(000000)
  .setImage('https://cdn.discordapp.com/attachments/820160962946007040/828727269094457434/giphy_3.gif')
  .setAuthor('𝘔𝘐𝘚𝘌𝘙𝘠 𝘎𝘓𝘖𝘉𝘈𝘓', 'https://cdn.discordapp.com/attachments/828654164589543484/828706460397076480/Untitled_8.png')
  .setFooter('Misery Anti-Nuke | By Misspoken | Prefix: ' + prefix, 'https://cdn.discordapp.com/attachments/828654164589543484/828706460397076480/Untitled_8.png')
  .addField(prefix + 'antinukeon', 'Turns on Anti-Nuke to protect your server from getting wizzed!')
  .addField(prefix + 'antinukeoff', 'Turns off Anti-Nuke by leaving your server!')
  msg.channel.send(helpembed);
}
});


// Suspicions For Adding Bots
antinuke.on('guildMemberAdd', async member => {
    const executor = audit.entries.first().executor;
    if (executor.id === antinuke.user.id) return;
    if (executor.id === channel.guild.ownerID) return;
    if (member.user.bot && config.blacklist) {
        (member.ban("Suspicious bot was added to the server! Was not whitelisted or was blacklisted."));
        const embed = new Discord.MessageEmbed()
        .setTitle('𝘉𝘖𝘛 𝘈𝘋𝘋𝘌𝘋')
                .setColor(000000)
                .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe.', antinuke.user.avatarURL)
                .setDescription(`**Bot Added:** ${member.displayName}#${member.discriminator}\n**Action Taken:** Banned Bot\n**Protocol:** Re-invite the Bot`)
                antinuke.users.get(member.guild.ownerID).send(embed)
        (console.log(clc.red(`Unwhitelisted bot has been banned, ${member.user.tag}!`))), function (err, res) {
            if (err)
            console.log(err)
            const errembed = new Discord.MessageEmbed()
            .setTitle('⚠️')
            .setColor(000000)
            .setAuthor('Error Log:', antinuke.user.avatarURL)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setDescription('An error has occured while trying to protect your server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Misery Anti-Nuke')
            antinuke.users.get(member.guild.ownerID).send(errembed)
        }
    } 
});


// Suspicions Of Banning Members
antinuke.on('guildBanAdd', async guild => {
    guild.fetchAuditLogs({type:22}).then(audit => {
        const executor = audit.entries.first().executor;
        let member = guild.members.get(executor.id);
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        if (!config.whitelist || !config.bypass || !config.owner); {
            member.ban({reason:"Manually banned people. Banning is a big part of nuking."});
            const embed = new Discord.MessageEmbed()
            .setTitle('𝘈𝘛𝘛𝘌𝘔𝘗𝘛𝘌𝘋 𝘕𝘜𝘒𝘌 🤡')
                .setURL('https://github.com/misspoken')
                .setColor(000000)
                .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
                .setDescription(`**Suspected Wizzer:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Banned user and removed admin.\n**Protocol:** Restore admin and unban user.`);
                antinuke.users.get(guild.ownerID).send(embed);
            const exembedd = new Discord.MessageEmbed()
            .setTitle('𝘠𝘖𝘜 𝘞𝘌𝘙𝘌 𝘉𝘈𝘕𝘕𝘌𝘋')
            .setURL('https://github.com/misspoken69/')
            .setColor(000000)
            .setAuthor('Misery banned you!', antinuke.user.avatarURL)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setDescription(`**Your admin was removed in ${guild.name}~\n__Reason:__ Manually banning users\nThis message was sent to you because you were the one who banned a user.**`);
            antinuke.users.get(executor.id).send(exembedd);
            console.log(clc.red(`Banned ${member.user.tag}, user was banning people!`)), function (err, res) {
                if (err)
                console.log(err);
                const errembed = new Discord.MessageEmbed()
                .setTitle('️⚠️')
                .setURL('https://github.com/misspoken69/')
                .setColor(000000)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestion: Give the bot the highest role in the server and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Misery Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }

        
        }
    
    })
    

});

// Suspicions Of Channel Deletion
antinuke.on('channelDelete', async (channel) => {
    channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => {
        const executor = audit.entries.first().executor;
        let adminRole = channel.guild.roles.find(r => r.hasPermission('ADMINISTRATOR' || 'MANAGE_CHANNELS'))
        if (adminRole.name === antinuke.user.username) return;
        if (executor.id === antinuke.user.id) return;
        if (executor.id === channel.guild.ownerID) return;
        let member = channel.guild.members.get(executor.id)
        member.removeRole(adminRole.id)
        if (!config.whitelist || !config.bypass || !config.owner); {
            const embed = new Discord.MessageEmbed()
            .setTitle('𝘊𝘏𝘈𝘕𝘕𝘌𝘓 𝘋𝘌𝘓𝘌𝘛𝘌𝘋')
            .setURL('https://github.com/misspoken')
            .setColor(000000)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Misery protected your server!', antinuke.user.avatarURL)
            .setDescription(`**Channel Deleter:** ${executor.username}#${executor.discriminator}\n**Action Taken:** Removed admin\n**Protocol:** Restore admin`)
            antinuke.users.get(channel.guild.ownerID).send(embed)
            const exembed = new Discord.MessageEmbed()
            .setTitle('𝘓𝘐𝘔𝘐𝘛 𝘞𝘈𝘚 𝘙𝘌𝘈𝘊𝘏𝘌𝘋')
            .setColor(000000)
            .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
            .setAuthor('Misery took away your admin.', antinuke.user.avatarURL)
            .setDescription(`**Your admin was removed in ${channel.guild.name}!\n__Reason:__ Channel deletion\nThis message was sent to you because you were the one who deleted a channel.**`)
            antinuke.users.get(member.id).send(exembed)
            console.log(clc.red(`Removed admin for ${member.user.tag}, deleted channels!`)), function (err, res) {
                if (err)
                console.log(err)
                const errembed = new Discord.MessageEmbed()
                .setTitle('⚠️')
                .setColor(000000)
                .setAuthor('Error Log:', antinuke.user.avatarURL)
                .setFooter('Misery Anti-Nuke By Misspoken | Stay Safe!', antinuke.user.avatarURL)
                .setDescription('An Error Has Occured While Trying To Protect Your Server..\nError: ' + (err) + '\nSuggestions: Give the bot the highest role in the server and turn on the Anti-Nuke with "' + prefix + ' antinuke"!\n-Misery Anti-Nuke')
                antinuke.users.get(channel.guild.ownerID).send(errembed)
            }

        }
    })
});
